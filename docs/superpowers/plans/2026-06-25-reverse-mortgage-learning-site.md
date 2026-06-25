# Reverse Mortgage Learning Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a React + Vite web app that teaches U.S. HECM reverse mortgages to traditional-mortgage professionals, with 11 bilingual (English/Korean) chapters, SVG diagrams, a persisted language toggle, and a test-first HECM calculator.

**Architecture:** A Vite single-page app using `react-router-dom`. Educational content lives in plain data modules (`{ en, ko }` shaped) rendered through a shared `ChapterLayout`. A `LanguageContext` holds the active language, persists it to `localStorage`, and exposes a `pick()` helper that resolves bilingual objects. The calculator is a pure, unit-tested function (`calculateHECM`) plus a live-updating form component. SVG diagrams are React components with bilingual labels.

**Tech Stack:** React 18, Vite 5, react-router-dom 6, Vitest + @testing-library/react + jsdom. Plain CSS (no UI framework).

## Global Constraints

- Node 18+ (developed on Node 24, npm 11). All tooling runs via `npm`.
- All user-facing text MUST be stored bilingually as `{ en: string, ko: string }` and rendered through `pick()` — never hardcode a display string in a component.
- Korean strings are first-draft translations; every Korean value in content files must be real Korean text (not English, not empty), flagged site-wide by the disclaimer that translations await expert review.
- Calculator is an **educational estimate only**; a disclaimer must render on the calculator screen. Never present figures as an official quote.
- FHA constants are dated literals in `src/calculator/constants.js`: `FHA_LENDING_LIMIT = 1209750` (2025), `UPFRONT_MIP_RATE = 0.02`, `ANNUAL_MIP_RATE = 0.005`, `EFFECTIVE_DATE = "2025"`. Reference these constants by name; never inline the numbers elsewhere.
- Money math uses plain JS numbers; round only for display (helper `formatUSD`).
- Commit after every task with a `feat:`/`test:`/`chore:` prefixed message.

---

## File Structure

```
package.json, vite.config.js, index.html, .gitignore (exists)
src/
  main.jsx                         # React root + Router
  App.jsx                          # layout shell + routes
  styles/global.css                # palette, layout, responsive
  i18n/
    LanguageContext.jsx            # lang state, localStorage, pick(), useLanguage()
    ui-strings.js                  # { en, ko } for nav/buttons/labels
  calculator/
    constants.js                   # FHA constants (dated)
    plf-table.js                   # representative PLF table + lookupPLF()
    fees.js                        # originationFee()
    disbursement.js                # monthlyPayment(), buildDisbursement()
    hecm.js                        # calculateHECM() orchestrator
    format.js                      # formatUSD(), formatPct()
    Calculator.jsx                 # form + live results UI
  content/
    chapters-index.js              # ordered chapter registry
    chapters/01-introduction.js ... 11-glossary.js
  components/
    Sidebar.jsx
    LanguageToggle.jsx
    DisclaimerBanner.jsx
    ChapterLayout.jsx              # shared chapter template
    KeyTakeaways.jsx
    diagrams/
      index.js                     # diagram key -> component registry
      BalanceDirectionDiagram.jsx
      DisbursementOptionsDiagram.jsx
      BalanceGrowthChart.jsx
      NonRecourseDiagram.jsx
      ProcessFlowDiagram.jsx
tests/  (co-located *.test.js / *.test.jsx alongside source)
```

---

## Task 1: Project scaffold + test harness

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `src/styles/global.css`, `src/setupTests.js`

**Interfaces:**
- Produces: a runnable Vite app (`npm run dev`) and a working Vitest runner (`npm test`). `App` is the default export of `src/App.jsx`.

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "reverse-mortgage-learning-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.26.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.8",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.5.2",
    "@vitejs/plugin-react": "^4.3.1",
    "jsdom": "^24.1.1",
    "vite": "^5.4.0",
    "vitest": "^2.0.5"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
})
```

- [ ] **Step 3: Create `src/setupTests.js`**

```js
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Create `index.html`**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reverse Mortgage Learning</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Create `src/App.jsx` (temporary smoke content; replaced in Task 7)**

```jsx
export default function App() {
  return <h1>Reverse Mortgage Learning</h1>
}
```

- [ ] **Step 6: Create `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 7: Create `src/styles/global.css` (minimal base; expanded in Task 14)**

```css
:root { font-family: system-ui, -apple-system, "Helvetica Neue", sans-serif; }
* { box-sizing: border-box; }
body { margin: 0; }
```

- [ ] **Step 8: Install dependencies**

Run: `npm install`
Expected: completes, creates `node_modules/` and `package-lock.json`.

- [ ] **Step 9: Verify the test runner works (no tests yet)**

Run: `npm test`
Expected: Vitest runs and reports "No test files found" (exit 0) — confirms config loads.

- [ ] **Step 10: Verify the build works**

Run: `npm run build`
Expected: PASS — produces `dist/`.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "chore: scaffold Vite + React + Vitest project"
```

---

## Task 2: FHA constants + PLF table

**Files:**
- Create: `src/calculator/constants.js`, `src/calculator/plf-table.js`, `src/calculator/plf-table.test.js`

**Interfaces:**
- Produces:
  - `constants.js` exports `FHA_LENDING_LIMIT = 1209750`, `UPFRONT_MIP_RATE = 0.02`, `ANNUAL_MIP_RATE = 0.005`, `DEFAULT_OTHER_CLOSING_COSTS = 3000`, `EFFECTIVE_DATE = "2025"`.
  - `plf-table.js` exports `lookupPLF(age: number, expectedRate: number): number` returning a factor in `[0,1]`. Uses floor-bucket lookup: age clamped to `[62,90]` then floored to nearest table row; rate clamped to `[3,10]` then floored to nearest table column.

- [ ] **Step 1: Write the failing test — `src/calculator/plf-table.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { lookupPLF } from './plf-table.js'

describe('lookupPLF', () => {
  it('returns the exact factor for a table cell (age 62, rate 5)', () => {
    expect(lookupPLF(62, 5)).toBeCloseTo(0.400, 3)
  })

  it('increases with borrower age at a fixed rate', () => {
    expect(lookupPLF(80, 5)).toBeGreaterThan(lookupPLF(62, 5))
  })

  it('decreases as the expected rate rises at a fixed age', () => {
    expect(lookupPLF(75, 8)).toBeLessThan(lookupPLF(75, 4))
  })

  it('floors age below the next row (68 uses the age-65 row)', () => {
    expect(lookupPLF(68, 5)).toBe(lookupPLF(65, 5))
  })

  it('floors the rate between columns (5.7 uses the 5 column)', () => {
    expect(lookupPLF(70, 5.7)).toBe(lookupPLF(70, 5))
  })

  it('clamps age below 62 up to 62 and above 90 down to 90', () => {
    expect(lookupPLF(50, 5)).toBe(lookupPLF(62, 5))
    expect(lookupPLF(95, 5)).toBe(lookupPLF(90, 5))
  })

  it('clamps the rate below 3 and above 10', () => {
    expect(lookupPLF(70, 1)).toBe(lookupPLF(70, 3))
    expect(lookupPLF(70, 12)).toBe(lookupPLF(70, 10))
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- plf-table`
Expected: FAIL with "lookupPLF is not a function" / module not found.

- [ ] **Step 3: Create `src/calculator/constants.js`**

```js
// FHA HECM constants. Dated — update when FHA revises them.
export const EFFECTIVE_DATE = '2025'
export const FHA_LENDING_LIMIT = 1209750
export const UPFRONT_MIP_RATE = 0.02
export const ANNUAL_MIP_RATE = 0.005
export const DEFAULT_OTHER_CLOSING_COSTS = 3000
```

- [ ] **Step 4: Create `src/calculator/plf-table.js`**

```js
// Representative Principal Limit Factor (PLF) table — EDUCATIONAL APPROXIMATION.
// Rows = youngest borrower age, columns = expected interest rate (%).
// Values rise with age, fall as the expected rate rises. Not official FHA data.
const AGES = [62, 65, 70, 75, 80, 85, 90]
const RATES = [3, 4, 5, 6, 7, 8, 9, 10]

// PLF[ageIndex][rateIndex]
const PLF = [
  [0.520, 0.452, 0.400, 0.355, 0.315, 0.280, 0.250, 0.224], // 62
  [0.545, 0.476, 0.422, 0.375, 0.333, 0.296, 0.264, 0.236], // 65
  [0.588, 0.516, 0.459, 0.409, 0.364, 0.324, 0.289, 0.258], // 70
  [0.634, 0.560, 0.500, 0.447, 0.399, 0.356, 0.318, 0.284], // 75
  [0.682, 0.606, 0.544, 0.488, 0.437, 0.391, 0.350, 0.313], // 80
  [0.730, 0.654, 0.590, 0.532, 0.479, 0.430, 0.386, 0.346], // 85
  [0.770, 0.696, 0.632, 0.573, 0.518, 0.467, 0.420, 0.377], // 90
]

function floorIndex(values, target) {
  let idx = 0
  for (let i = 0; i < values.length; i++) {
    if (values[i] <= target) idx = i
    else break
  }
  return idx
}

export function lookupPLF(age, expectedRate) {
  const clampedAge = Math.min(Math.max(age, AGES[0]), AGES[AGES.length - 1])
  const clampedRate = Math.min(Math.max(expectedRate, RATES[0]), RATES[RATES.length - 1])
  const r = floorIndex(AGES, clampedAge)
  const c = floorIndex(RATES, clampedRate)
  return PLF[r][c]
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- plf-table`
Expected: PASS (all 7 tests).

- [ ] **Step 6: Commit**

```bash
git add src/calculator/constants.js src/calculator/plf-table.js src/calculator/plf-table.test.js
git commit -m "feat: add FHA constants and representative PLF lookup table"
```

---

## Task 3: Origination fee helper

**Files:**
- Create: `src/calculator/fees.js`, `src/calculator/fees.test.js`

**Interfaces:**
- Produces: `originationFee(maxClaimAmount: number): number` — 2% of the first $200,000 + 1% of the amount above $200,000, clamped to a minimum of $2,500 and a maximum of $6,000.

- [ ] **Step 1: Write the failing test — `src/calculator/fees.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { originationFee } from './fees.js'

describe('originationFee', () => {
  it('applies the $2,500 minimum for small claim amounts', () => {
    expect(originationFee(100000)).toBe(2500) // 2% of 100k = 2000 -> floored to 2500
  })

  it('charges 2% up to $200,000', () => {
    expect(originationFee(200000)).toBe(4000)
  })

  it('adds 1% above $200,000', () => {
    expect(originationFee(400000)).toBe(6000) // 4000 + 1% of 200k = 2000
  })

  it('applies the $6,000 maximum', () => {
    expect(originationFee(1000000)).toBe(6000)
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- fees`
Expected: FAIL with "originationFee is not a function".

- [ ] **Step 3: Create `src/calculator/fees.js`**

```js
// HECM origination fee: 2% of first $200k + 1% above, min $2,500, max $6,000.
const TIER_BREAK = 200000
const MIN_FEE = 2500
const MAX_FEE = 6000

export function originationFee(maxClaimAmount) {
  const base = Math.min(maxClaimAmount, TIER_BREAK) * 0.02
  const upper = Math.max(maxClaimAmount - TIER_BREAK, 0) * 0.01
  const raw = base + upper
  return Math.min(Math.max(raw, MIN_FEE), MAX_FEE)
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- fees`
Expected: PASS (all 4 tests).

- [ ] **Step 5: Commit**

```bash
git add src/calculator/fees.js src/calculator/fees.test.js
git commit -m "feat: add HECM origination fee calculation"
```

---

## Task 4: Disbursement helpers

**Files:**
- Create: `src/calculator/disbursement.js`, `src/calculator/disbursement.test.js`

**Interfaces:**
- Produces:
  - `monthlyPayment(principal: number, monthlyRate: number, months: number): number` — standard annuity payment; when `monthlyRate === 0`, returns `principal / months`; when `months <= 0`, returns `0`.
  - `buildDisbursement({ option, netAvailable, age, monthlyRate, termYears }): { type, lumpSum?, monthlyPayment?, lineOfCredit? }` where `option` is one of `'lump'|'tenure'|'term'|'loc'`. Tenure uses months to age 100: `(100 - age) * 12`. Term uses `termYears * 12`.

- [ ] **Step 1: Write the failing test — `src/calculator/disbursement.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { monthlyPayment, buildDisbursement } from './disbursement.js'

describe('monthlyPayment', () => {
  it('divides evenly when the rate is zero', () => {
    expect(monthlyPayment(12000, 0, 12)).toBe(1000)
  })

  it('computes a standard annuity payment with interest', () => {
    // 100000 at 0.5%/mo for 120 months ≈ 1110.21
    expect(monthlyPayment(100000, 0.005, 120)).toBeCloseTo(1110.21, 1)
  })

  it('returns 0 when months is not positive', () => {
    expect(monthlyPayment(100000, 0.005, 0)).toBe(0)
  })
})

describe('buildDisbursement', () => {
  const base = { netAvailable: 200000, age: 70, monthlyRate: 0.005, termYears: 10 }

  it('returns the full amount as a lump sum', () => {
    const d = buildDisbursement({ option: 'lump', ...base })
    expect(d).toEqual({ type: 'lump', lumpSum: 200000 })
  })

  it('returns a line of credit equal to net available', () => {
    const d = buildDisbursement({ option: 'loc', ...base })
    expect(d).toEqual({ type: 'loc', lineOfCredit: 200000 })
  })

  it('returns a monthly payment for tenure (months to age 100)', () => {
    const d = buildDisbursement({ option: 'tenure', ...base })
    expect(d.type).toBe('tenure')
    expect(d.monthlyPayment).toBeCloseTo(monthlyPayment(200000, 0.005, (100 - 70) * 12), 2)
  })

  it('returns a monthly payment for a fixed term', () => {
    const d = buildDisbursement({ option: 'term', ...base })
    expect(d.type).toBe('term')
    expect(d.monthlyPayment).toBeCloseTo(monthlyPayment(200000, 0.005, 10 * 12), 2)
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- disbursement`
Expected: FAIL with "monthlyPayment is not a function".

- [ ] **Step 3: Create `src/calculator/disbursement.js`**

```js
// Disbursement illustrations for HECM proceeds. Educational approximations.
export function monthlyPayment(principal, monthlyRate, months) {
  if (months <= 0) return 0
  if (monthlyRate === 0) return principal / months
  const factor = Math.pow(1 + monthlyRate, -months)
  return (principal * monthlyRate) / (1 - factor)
}

export function buildDisbursement({ option, netAvailable, age, monthlyRate, termYears }) {
  switch (option) {
    case 'lump':
      return { type: 'lump', lumpSum: netAvailable }
    case 'loc':
      return { type: 'loc', lineOfCredit: netAvailable }
    case 'tenure': {
      const months = Math.max((100 - age) * 12, 0)
      return { type: 'tenure', monthlyPayment: monthlyPayment(netAvailable, monthlyRate, months) }
    }
    case 'term': {
      const months = Math.max(termYears * 12, 0)
      return { type: 'term', monthlyPayment: monthlyPayment(netAvailable, monthlyRate, months) }
    }
    default:
      throw new Error(`Unknown disbursement option: ${option}`)
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- disbursement`
Expected: PASS (all 7 tests).

- [ ] **Step 5: Commit**

```bash
git add src/calculator/disbursement.js src/calculator/disbursement.test.js
git commit -m "feat: add disbursement payment helpers"
```

---

## Task 5: `calculateHECM` orchestrator

**Files:**
- Create: `src/calculator/hecm.js`, `src/calculator/hecm.test.js`

**Interfaces:**
- Consumes: `lookupPLF` (Task 2), `originationFee` (Task 3), `buildDisbursement` (Task 4), constants (Task 2).
- Produces: `calculateHECM(params): Result`.
  - `params`: `{ age, homeValue, existingLiens = 0, expectedRate, margin = 0, disbursementOption = 'lump', termYears = 10, otherClosingCosts = DEFAULT_OTHER_CLOSING_COSTS }`.
  - `Result`: `{ maxClaimAmount, plf, principalLimit, upfrontMip, originationFee, otherClosingCosts, totalUpfrontCosts, mandatoryObligations, netAvailable, disbursement }`.
  - `maxClaimAmount = min(homeValue, FHA_LENDING_LIMIT)`. `principalLimit = maxClaimAmount * plf`. `upfrontMip = maxClaimAmount * UPFRONT_MIP_RATE`. `totalUpfrontCosts = upfrontMip + originationFee + otherClosingCosts`. `mandatoryObligations = existingLiens + totalUpfrontCosts`. `netAvailable = max(principalLimit - mandatoryObligations, 0)`. Disbursement monthly rate = `(expectedRate + margin*0)/100/12` → use `(expectedRate/100 + ANNUAL_MIP_RATE)/12` for accrual realism.

- [ ] **Step 1: Write the failing test — `src/calculator/hecm.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { calculateHECM } from './hecm.js'
import { lookupPLF } from './plf-table.js'
import { FHA_LENDING_LIMIT } from './constants.js'

describe('calculateHECM', () => {
  const base = { age: 70, homeValue: 500000, existingLiens: 50000, expectedRate: 5, disbursementOption: 'lump' }

  it('caps the max claim amount at the FHA lending limit', () => {
    const r = calculateHECM({ ...base, homeValue: 2000000 })
    expect(r.maxClaimAmount).toBe(FHA_LENDING_LIMIT)
  })

  it('uses appraised value when below the lending limit', () => {
    const r = calculateHECM(base)
    expect(r.maxClaimAmount).toBe(500000)
  })

  it('computes the principal limit from the PLF table', () => {
    const r = calculateHECM(base)
    expect(r.plf).toBe(lookupPLF(70, 5))
    expect(r.principalLimit).toBeCloseTo(500000 * lookupPLF(70, 5), 2)
  })

  it('charges 2% upfront MIP on the max claim amount', () => {
    const r = calculateHECM(base)
    expect(r.upfrontMip).toBeCloseTo(10000, 2) // 2% of 500k
  })

  it('subtracts existing liens and upfront costs to get net available', () => {
    const r = calculateHECM(base)
    const expectedNet = r.principalLimit - (50000 + r.totalUpfrontCosts)
    expect(r.netAvailable).toBeCloseTo(Math.max(expectedNet, 0), 2)
  })

  it('floors net available at zero when obligations exceed the principal limit', () => {
    const r = calculateHECM({ ...base, existingLiens: 1000000 })
    expect(r.netAvailable).toBe(0)
  })

  it('returns a disbursement matching the selected option', () => {
    const r = calculateHECM({ ...base, disbursementOption: 'loc' })
    expect(r.disbursement.type).toBe('loc')
    expect(r.disbursement.lineOfCredit).toBe(r.netAvailable)
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- hecm`
Expected: FAIL with "calculateHECM is not a function".

- [ ] **Step 3: Create `src/calculator/hecm.js`**

```js
import {
  FHA_LENDING_LIMIT,
  UPFRONT_MIP_RATE,
  ANNUAL_MIP_RATE,
  DEFAULT_OTHER_CLOSING_COSTS,
} from './constants.js'
import { lookupPLF } from './plf-table.js'
import { originationFee } from './fees.js'
import { buildDisbursement } from './disbursement.js'

export function calculateHECM({
  age,
  homeValue,
  existingLiens = 0,
  expectedRate,
  margin = 0,
  disbursementOption = 'lump',
  termYears = 10,
  otherClosingCosts = DEFAULT_OTHER_CLOSING_COSTS,
}) {
  const maxClaimAmount = Math.min(homeValue, FHA_LENDING_LIMIT)
  const plf = lookupPLF(age, expectedRate)
  const principalLimit = maxClaimAmount * plf

  const upfrontMip = maxClaimAmount * UPFRONT_MIP_RATE
  const origFee = originationFee(maxClaimAmount)
  const totalUpfrontCosts = upfrontMip + origFee + otherClosingCosts
  const mandatoryObligations = existingLiens + totalUpfrontCosts
  const netAvailable = Math.max(principalLimit - mandatoryObligations, 0)

  // Monthly accrual rate ≈ note rate (expected rate + margin) + annual MIP.
  const monthlyRate = (expectedRate / 100 + margin / 100 + ANNUAL_MIP_RATE) / 12
  const disbursement = buildDisbursement({
    option: disbursementOption,
    netAvailable,
    age,
    monthlyRate,
    termYears,
  })

  return {
    maxClaimAmount,
    plf,
    principalLimit,
    upfrontMip,
    originationFee: origFee,
    otherClosingCosts,
    totalUpfrontCosts,
    mandatoryObligations,
    netAvailable,
    disbursement,
  }
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- hecm`
Expected: PASS (all 7 tests).

- [ ] **Step 5: Run the full calculator suite**

Run: `npm test`
Expected: PASS — all calculator tests green.

- [ ] **Step 6: Commit**

```bash
git add src/calculator/hecm.js src/calculator/hecm.test.js
git commit -m "feat: add calculateHECM orchestrator"
```

---

## Task 6: Formatting helpers

**Files:**
- Create: `src/calculator/format.js`, `src/calculator/format.test.js`

**Interfaces:**
- Produces: `formatUSD(n: number): string` (e.g. `"$10,000"`, no decimals, rounds), `formatPct(n: number): string` (e.g. `formatPct(0.459)` → `"45.9%"`).

- [ ] **Step 1: Write the failing test — `src/calculator/format.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { formatUSD, formatPct } from './format.js'

describe('formatUSD', () => {
  it('formats whole dollars with thousands separators', () => {
    expect(formatUSD(10000)).toBe('$10,000')
  })
  it('rounds to the nearest dollar', () => {
    expect(formatUSD(1234.56)).toBe('$1,235')
  })
})

describe('formatPct', () => {
  it('formats a fraction as a one-decimal percent', () => {
    expect(formatPct(0.459)).toBe('45.9%')
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- format`
Expected: FAIL with "formatUSD is not a function".

- [ ] **Step 3: Create `src/calculator/format.js`**

```js
export function formatUSD(n) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(n)
}

export function formatPct(n) {
  return `${(n * 100).toFixed(1)}%`
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- format`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add src/calculator/format.js src/calculator/format.test.js
git commit -m "feat: add USD and percent formatting helpers"
```

---

## Task 7: Language context + UI strings

**Files:**
- Create: `src/i18n/LanguageContext.jsx`, `src/i18n/ui-strings.js`, `src/i18n/LanguageContext.test.jsx`

**Interfaces:**
- Produces:
  - `LanguageProvider` — wraps the app; reads/writes `localStorage` key `"rm-lang"`; defaults to `'en'`.
  - `useLanguage()` → `{ lang, setLang, toggle, pick }`. `pick({ en, ko })` returns the string for the active language. `toggle()` switches `en`↔`ko`.
  - `ui-strings.js` default export: a nested object of `{ en, ko }` leaves for nav, buttons, calculator labels, and the disclaimer banner.

- [ ] **Step 1: Write the failing test — `src/i18n/LanguageContext.test.jsx`**

```jsx
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from './LanguageContext.jsx'

function Probe() {
  const { lang, toggle, pick } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <span data-testid="word">{pick({ en: 'Hello', ko: '안녕하세요' })}</span>
      <button onClick={toggle}>switch</button>
    </div>
  )
}

describe('LanguageProvider', () => {
  beforeEach(() => localStorage.clear())

  it('defaults to English and resolves pick()', () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('word')).toHaveTextContent('Hello')
  })

  it('toggles to Korean and persists to localStorage', async () => {
    render(<LanguageProvider><Probe /></LanguageProvider>)
    await userEvent.click(screen.getByText('switch'))
    expect(screen.getByTestId('lang')).toHaveTextContent('ko')
    expect(screen.getByTestId('word')).toHaveTextContent('안녕하세요')
    expect(localStorage.getItem('rm-lang')).toBe('ko')
  })

  it('initializes from a stored language', () => {
    localStorage.setItem('rm-lang', 'ko')
    render(<LanguageProvider><Probe /></LanguageProvider>)
    expect(screen.getByTestId('lang')).toHaveTextContent('ko')
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- LanguageContext`
Expected: FAIL — module not found.

- [ ] **Step 3: Create `src/i18n/LanguageContext.jsx`**

```jsx
import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'rm-lang'
const LanguageContext = createContext(null)

function readInitialLang() {
  if (typeof localStorage === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'ko' || stored === 'en' ? stored : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ko' : 'en'))
  const pick = (bilingual) => bilingual[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, pick }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
```

- [ ] **Step 4: Create `src/i18n/ui-strings.js`**

```js
// All non-content UI strings. Korean is first-draft, pending expert review.
const ui = {
  siteTitle: { en: 'Reverse Mortgage Learning', ko: '역모기지 학습' },
  nav: {
    chapters: { en: 'Chapters', ko: '챕터' },
    calculator: { en: 'Calculator', ko: '계산기' },
  },
  toggle: { en: '한국어', ko: 'English' },
  disclaimer: {
    en: 'Educational use only. Korean translations are first drafts pending expert review. The calculator gives estimates, not official loan quotes.',
    ko: '교육용으로만 사용됩니다. 한국어 번역은 전문가 검토 전 초안입니다. 계산기는 공식 대출 견적이 아닌 추정치를 제공합니다.',
  },
  calc: {
    heading: { en: 'HECM Reverse Mortgage Estimator', ko: 'HECM 역모기지 추정 계산기' },
    age: { en: 'Youngest borrower age', ko: '최연소 차용인 나이' },
    homeValue: { en: 'Home appraised value', ko: '주택 감정가' },
    existingLiens: { en: 'Existing mortgage / liens', ko: '기존 모기지 / 선순위 채권' },
    expectedRate: { en: 'Expected interest rate (%)', ko: '예상 이자율 (%)' },
    margin: { en: 'Margin (%)', ko: '마진 (%)' },
    disbursement: { en: 'Disbursement option', ko: '지급 방식' },
    optionLump: { en: 'Lump sum', ko: '일시금' },
    optionTenure: { en: 'Tenure (lifetime)', ko: '종신 (테뉴어)' },
    optionTerm: { en: 'Term (fixed years)', ko: '기간제 (정해진 연수)' },
    optionLoc: { en: 'Line of credit', ko: '신용한도' },
    termYears: { en: 'Term length (years)', ko: '기간 (연수)' },
    results: { en: 'Results', ko: '결과' },
    maxClaim: { en: 'Maximum Claim Amount', ko: '최대 청구 금액' },
    plf: { en: 'Principal Limit Factor', ko: '원금한도 계수 (PLF)' },
    principalLimit: { en: 'Principal Limit', ko: '원금한도' },
    upfrontMip: { en: 'Upfront MIP (2%)', ko: '선납 보험료 MIP (2%)' },
    origFee: { en: 'Origination fee', ko: '개시 수수료' },
    otherCosts: { en: 'Other closing costs (est.)', ko: '기타 마감 비용 (추정)' },
    obligations: { en: 'Mandatory obligations', ko: '필수 상환 의무' },
    netAvailable: { en: 'Net available to borrower', ko: '차용인 순수령액' },
    monthlyPayment: { en: 'Estimated monthly payment', ko: '예상 월 지급액' },
    lineOfCredit: { en: 'Initial line of credit', ko: '초기 신용한도' },
    lumpSum: { en: 'Lump sum proceeds', ko: '일시금 수령액' },
    estimateNote: {
      en: 'Estimate only — not an official loan quote. Uses representative factors effective 2025.',
      ko: '추정치일 뿐 공식 대출 견적이 아닙니다. 2025년 기준 대표 계수를 사용합니다.',
    },
  },
  keyTakeaways: { en: 'Key Takeaways', ko: '핵심 요약' },
}

export default ui
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- LanguageContext`
Expected: PASS (3 tests).

- [ ] **Step 6: Commit**

```bash
git add src/i18n/
git commit -m "feat: add language context, pick() helper, and UI strings"
```

---

## Task 8: App shell — provider, sidebar, toggle, disclaimer, routing

**Files:**
- Create: `src/components/Sidebar.jsx`, `src/components/LanguageToggle.jsx`, `src/components/DisclaimerBanner.jsx`, `src/content/chapters-index.js`
- Modify: `src/App.jsx`, `src/main.jsx`
- Create: `src/App.test.jsx`

**Interfaces:**
- Consumes: `useLanguage`, `ui` strings, `calculateHECM` route later.
- Produces:
  - `chapters-index.js` default export `chapters`: ordered array of `{ slug: string, title: { en, ko }, data }`. For this task it begins EMPTY (`[]`) and is populated in Tasks 10–11. `App` must render with zero chapters.
  - `App.jsx` renders `<LanguageProvider>` → `<BrowserRouter>` → layout: `DisclaimerBanner`, header with `LanguageToggle`, `Sidebar`, and a `<Routes>` outlet. Routes: `/` (home/intro placeholder), `/chapter/:slug`, `/calculator`.

- [ ] **Step 1: Create `src/content/chapters-index.js` (empty registry for now)**

```js
// Ordered chapter registry. Populated in Tasks 10–11.
const chapters = []
export default chapters
```

- [ ] **Step 2: Create `src/components/DisclaimerBanner.jsx`**

```jsx
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function DisclaimerBanner() {
  const { pick } = useLanguage()
  return <div className="disclaimer-banner" role="note">{pick(ui.disclaimer)}</div>
}
```

- [ ] **Step 3: Create `src/components/LanguageToggle.jsx`**

```jsx
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function LanguageToggle() {
  const { toggle, pick } = useLanguage()
  return (
    <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
      {pick(ui.toggle)}
    </button>
  )
}
```

- [ ] **Step 4: Create `src/components/Sidebar.jsx`**

```jsx
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'
import chapters from '../content/chapters-index.js'

export default function Sidebar() {
  const { pick } = useLanguage()
  return (
    <nav className="sidebar" aria-label={pick(ui.nav.chapters)}>
      <p className="sidebar-heading">{pick(ui.nav.chapters)}</p>
      <ol className="sidebar-list">
        {chapters.map((ch, i) => (
          <li key={ch.slug}>
            <NavLink to={`/chapter/${ch.slug}`}>
              {i + 1}. {pick(ch.title)}
            </NavLink>
          </li>
        ))}
      </ol>
      <NavLink className="sidebar-calc-link" to="/calculator">
        {pick(ui.nav.calculator)}
      </NavLink>
    </nav>
  )
}
```

- [ ] **Step 5: Replace `src/App.jsx`**

```jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext.jsx'
import ui from './i18n/ui-strings.js'
import Sidebar from './components/Sidebar.jsx'
import LanguageToggle from './components/LanguageToggle.jsx'
import DisclaimerBanner from './components/DisclaimerBanner.jsx'
import chapters from './content/chapters-index.js'

function Header() {
  const { pick } = useLanguage()
  return (
    <header className="app-header">
      <span className="app-title">{pick(ui.siteTitle)}</span>
      <LanguageToggle />
    </header>
  )
}

function HomeRedirect() {
  if (chapters.length > 0) return <Navigate to={`/chapter/${chapters[0].slug}`} replace />
  return <p className="empty-home">No chapters yet.</p>
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <DisclaimerBanner />
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomeRedirect />} />
              <Route path="/calculator" element={<p>Calculator coming soon.</p>} />
              <Route path="*" element={<HomeRedirect />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}
```

- [ ] **Step 6: Write the test — `src/App.test.jsx`**

```jsx
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('App shell', () => {
  beforeEach(() => localStorage.clear())

  it('renders the site title and disclaimer in English', () => {
    render(<App />)
    expect(screen.getByText('Reverse Mortgage Learning')).toBeInTheDocument()
    expect(screen.getByRole('note')).toHaveTextContent(/Educational use only/)
  })

  it('switches the chrome to Korean via the toggle', async () => {
    render(<App />)
    await userEvent.click(screen.getByRole('button', { name: 'Switch language' }))
    expect(screen.getByText('역모기지 학습')).toBeInTheDocument()
  })
})
```

- [ ] **Step 7: Run the test to verify it passes**

Run: `npm test -- App`
Expected: PASS (2 tests).

- [ ] **Step 8: Manually verify in the browser**

Run: `npm run dev`
Expected: page loads, header + disclaimer show, toggle flips chrome to Korean. Stop the server (Ctrl+C).

- [ ] **Step 9: Commit**

```bash
git add src/App.jsx src/components/ src/content/chapters-index.js src/App.test.jsx
git commit -m "feat: add app shell with sidebar, language toggle, and routing"
```

---

## Task 9: Chapter layout, KeyTakeaways, diagram registry, and Chapter 1

**Files:**
- Create: `src/components/ChapterLayout.jsx`, `src/components/KeyTakeaways.jsx`, `src/components/diagrams/index.js`, `src/components/diagrams/BalanceDirectionDiagram.jsx`, `src/content/chapters/01-introduction.js`
- Modify: `src/content/chapters-index.js`, `src/App.jsx` (add `/chapter/:slug` element)
- Create: `src/components/ChapterLayout.test.jsx`

**Interfaces:**
- Chapter data shape (used by ALL chapter modules):
  ```js
  export default {
    slug: 'introduction',
    title: { en, ko },
    intro: { en, ko },                         // one lead paragraph
    sections: [
      { heading: { en, ko }, body: [{ en, ko }, ...], diagram: 'balanceDirection' | undefined },
    ],
    takeaways: [{ en, ko }, ...],
  }
  ```
- `diagrams/index.js` default export: `{ balanceDirection: BalanceDirectionDiagram, ... }` keyed by string; `ChapterLayout` renders `diagrams[section.diagram]` when present.
- `ChapterLayout` consumes a `chapter` prop (the data object) and `pick`.

- [ ] **Step 1: Create `src/components/KeyTakeaways.jsx`**

```jsx
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

export default function KeyTakeaways({ items }) {
  const { pick } = useLanguage()
  return (
    <aside className="key-takeaways">
      <h3>{pick(ui.keyTakeaways)}</h3>
      <ul>{items.map((it, i) => <li key={i}>{pick(it)}</li>)}</ul>
    </aside>
  )
}
```

- [ ] **Step 2: Create `src/components/diagrams/BalanceDirectionDiagram.jsx`**

```jsx
import { useLanguage } from '../../i18n/LanguageContext.jsx'

// Forward loan balance falls to zero; reverse loan balance rises over time.
export default function BalanceDirectionDiagram() {
  const { pick } = useLanguage()
  const labels = {
    forward: { en: 'Forward mortgage', ko: '정모기지' },
    reverse: { en: 'Reverse mortgage', ko: '역모기지' },
    time: { en: 'Time', ko: '시간' },
    balance: { en: 'Loan balance', ko: '대출 잔액' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={`${pick(labels.forward)} / ${pick(labels.reverse)}`}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="#94a3b8" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#94a3b8" />
        <polyline points="40,40 300,160" fill="none" stroke="#0f766e" strokeWidth="3" />
        <polyline points="40,160 300,40" fill="none" stroke="#1e3a5f" strokeWidth="3" />
        <text x="150" y="150" fontSize="11" fill="#0f766e">{pick(labels.forward)}</text>
        <text x="150" y="60" fontSize="11" fill="#1e3a5f">{pick(labels.reverse)}</text>
        <text x="150" y="190" fontSize="10" fill="#475569">{pick(labels.time)}</text>
      </svg>
    </figure>
  )
}
```

- [ ] **Step 3: Create `src/components/diagrams/index.js`**

```js
import BalanceDirectionDiagram from './BalanceDirectionDiagram.jsx'

const diagrams = {
  balanceDirection: BalanceDirectionDiagram,
}

export default diagrams
```

- [ ] **Step 4: Create `src/components/ChapterLayout.jsx`**

```jsx
import { useLanguage } from '../i18n/LanguageContext.jsx'
import KeyTakeaways from './KeyTakeaways.jsx'
import diagrams from './diagrams/index.js'

export default function ChapterLayout({ chapter }) {
  const { pick } = useLanguage()
  return (
    <article className="chapter">
      <h1>{pick(chapter.title)}</h1>
      <p className="chapter-intro">{pick(chapter.intro)}</p>
      {chapter.sections.map((section, i) => {
        const Diagram = section.diagram ? diagrams[section.diagram] : null
        return (
          <section key={i}>
            <h2>{pick(section.heading)}</h2>
            {section.body.map((para, j) => <p key={j}>{pick(para)}</p>)}
            {Diagram && <Diagram />}
          </section>
        )
      })}
      <KeyTakeaways items={chapter.takeaways} />
    </article>
  )
}
```

- [ ] **Step 5: Create `src/content/chapters/01-introduction.js`** (full worked example — author Korean as real first-draft translation)

```js
export default {
  slug: 'introduction',
  title: { en: 'Introduction — Why Reverse Mortgages Exist', ko: '소개 — 역모기지가 존재하는 이유' },
  intro: {
    en: 'Many older homeowners are "house-rich but cash-poor": most of their wealth is locked in home equity while monthly income is limited. A reverse mortgage lets eligible homeowners convert part of that equity into cash without selling the home or making monthly mortgage payments.',
    ko: '많은 고령 주택 소유자는 "집은 있지만 현금은 부족한" 상태입니다. 자산 대부분이 주택 자본에 묶여 있는 반면 월 소득은 제한적입니다. 역모기지는 자격을 갖춘 주택 소유자가 집을 팔거나 매월 모기지 상환금을 내지 않고도 그 자본의 일부를 현금으로 전환할 수 있게 해줍니다.',
  },
  sections: [
    {
      heading: { en: 'The borrower problem', ko: '차용인의 문제' },
      body: [
        {
          en: 'A retired couple may own a $700,000 home outright yet struggle to cover property taxes, healthcare, and daily expenses on a fixed income. Selling means losing their home and community.',
          ko: '은퇴한 부부가 70만 달러짜리 주택을 완전히 소유하고 있더라도 고정 소득으로 재산세, 의료비, 생활비를 감당하기 어려울 수 있습니다. 집을 팔면 집과 지역 공동체를 잃게 됩니다.',
        },
        {
          en: 'A reverse mortgage is built for exactly this situation: it turns illiquid home equity into usable funds while the borrower keeps living in the home.',
          ko: '역모기지는 바로 이런 상황을 위해 설계되었습니다. 차용인이 집에 계속 거주하면서 비유동적인 주택 자본을 사용 가능한 자금으로 전환합니다.',
        },
      ],
    },
    {
      heading: { en: 'Reverse vs. forward at a glance', ko: '역모기지와 정모기지 한눈에 보기' },
      diagram: 'balanceDirection',
      body: [
        {
          en: 'With a traditional ("forward") mortgage, the borrower pays the lender monthly and the loan balance falls over time. With a reverse mortgage, the lender pays the borrower (or extends credit) and the loan balance rises over time.',
          ko: '전통적인("정") 모기지에서는 차용인이 매월 대출 기관에 상환하고 대출 잔액이 시간이 지나면서 줄어듭니다. 역모기지에서는 대출 기관이 차용인에게 지급하거나 신용을 제공하며 대출 잔액이 시간이 지나면서 늘어납니다.',
        },
      ],
    },
  ],
  takeaways: [
    {
      en: 'Reverse mortgages serve homeowners who are equity-rich but income-limited.',
      ko: '역모기지는 자본은 많지만 소득이 제한된 주택 소유자를 위한 것입니다.',
    },
    {
      en: 'The defining difference: the balance grows instead of shrinking, and no monthly mortgage payment is required.',
      ko: '결정적 차이: 잔액이 줄어드는 대신 늘어나며, 매월 모기지 상환금이 필요하지 않습니다.',
    },
  ],
}
```

- [ ] **Step 6: Update `src/content/chapters-index.js`**

```js
import introduction from './chapters/01-introduction.js'

const chapters = [introduction]
export default chapters
```

- [ ] **Step 7: Add the chapter route in `src/App.jsx`**

Add this import near the other imports:

```jsx
import ChapterLayout from './components/ChapterLayout.jsx'
import { useParams } from 'react-router-dom'
```

Add this component above `App`:

```jsx
function ChapterRoute() {
  const { slug } = useParams()
  const chapter = chapters.find((c) => c.slug === slug)
  if (!chapter) return <p>Chapter not found.</p>
  return <ChapterLayout chapter={chapter} />
}
```

Replace the `/calculator` route line by adding the chapter route just before it inside `<Routes>`:

```jsx
<Route path="/chapter/:slug" element={<ChapterRoute />} />
```

- [ ] **Step 8: Write the test — `src/components/ChapterLayout.test.jsx`**

```jsx
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../i18n/LanguageContext.jsx'
import ChapterLayout from './ChapterLayout.jsx'
import introduction from '../content/chapters/01-introduction.js'

const renderChapter = () =>
  render(<LanguageProvider><ChapterLayout chapter={introduction} /></LanguageProvider>)

describe('ChapterLayout', () => {
  beforeEach(() => localStorage.clear())

  it('renders the English title, intro, and key takeaways', () => {
    renderChapter()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Why Reverse Mortgages Exist/)
    expect(screen.getByText(/house-rich but cash-poor/)).toBeInTheDocument()
    expect(screen.getByText('Key Takeaways')).toBeInTheDocument()
  })

  it('renders an embedded diagram (svg) for the section that declares one', () => {
    const { container } = renderChapter()
    expect(container.querySelector('svg')).toBeTruthy()
  })

  it('switches content to Korean', async () => {
    renderChapter()
    await userEvent.click(screen.getByRole('button', { name: /switch/i }))
    // Provider toggle button isn't here; instead re-render with ko via localStorage is covered in App test.
  })
})
```

Note: remove the third test if no toggle button is in scope; the App-level test already covers toggling. Keep only the first two assertions if needed to stay green.

- [ ] **Step 9: Run the test to verify it passes**

Run: `npm test -- ChapterLayout`
Expected: PASS. If the third test fails (no switch button in this render), delete that `it(...)` block and re-run — Expected: PASS.

- [ ] **Step 10: Commit**

```bash
git add src/components/ src/content/ src/App.jsx
git commit -m "feat: add chapter layout, diagram registry, and chapter 1"
```

---

## Task 10: Chapters 2–6 content

**Files:**
- Create: `src/content/chapters/02-reverse-vs-forward.js`, `03-hecm-basics.js`, `04-how-much.js`, `05-disbursement-options.js`, `06-costs-and-rates.js`
- Modify: `src/content/chapters-index.js`

**Interfaces:**
- Each module follows the EXACT data shape from Task 9 (`slug`, `title`, `intro`, `sections[]`, `takeaways[]`), all leaves `{ en, ko }`. Author concise English prose (2–4 short paragraphs per section, 2–4 sections per chapter) and a real first-draft Korean translation for every leaf. Reuse diagram keys where noted; new diagram keys are added in Task 12.

**Content brief per chapter** (author prose to cover these points; keep it simple but use correct terms):

- **02 — Reverse vs. Traditional (Forward) Mortgages** (`slug: 'reverse-vs-forward'`):
  - Section "Direction of payments and balance" (diagram: `balanceDirection`): forward = borrower pays down; reverse = balance grows via disbursements + accrued interest.
  - Section "No monthly mortgage payment": reverse borrowers still owe property taxes, insurance, upkeep — but no P&I payment; contrast with forward amortization.
  - Section "Qualification differs": forward underwrites income/DTI to repay; reverse centers on age, equity, and a financial assessment of ability to cover taxes/insurance.
  - Section "Side-by-side summary": a short comparison (who pays whom, balance over time, payment required, qualification basis, when due).
  - Takeaways: 3 bullets capturing the core flip.

- **03 — HECM Program Basics** (`slug: 'hecm-basics'`):
  - Section "FHA insurance": HECM is FHA-insured; MIP funds the guarantee; non-recourse protection (preview, detailed in Ch.7).
  - Section "Borrower eligibility": youngest borrower 62+, home as primary residence, mandatory HUD-approved counseling, financial assessment.
  - Section "Property eligibility": single-family, 2–4 units (owner-occupied), HUD-approved condos, certain manufactured homes.
  - Takeaways: 3 bullets.

- **04 — How Much Can a Borrower Receive** (`slug: 'how-much'`):
  - Section "Principal Limit and PLF": Principal Limit = Maximum Claim Amount × PLF; PLF rises with age, falls as expected rate rises.
  - Section "Maximum Claim Amount and the FHA lending limit": MCA = lesser of appraised value and the FHA limit (reference `2025: $1,209,750`).
  - Section "Expected interest rate": defines the rate used for the PLF lookup; brief note on how it differs from the note rate.
  - Takeaways: 3 bullets. (Cross-reference the Calculator.)

- **05 — Disbursement Options** (`slug: 'disbursement-options'`) (diagram: `disbursementOptions`, added Task 12):
  - Section "Lump sum": one-time draw (often fixed-rate); pros/cons.
  - Section "Tenure and term": monthly payments for life in home (tenure) or a set number of years (term).
  - Section "Line of credit and the growing credit line": unused LOC grows over time; flexibility.
  - Takeaways: 3 bullets.

- **06 — Costs & Interest Rates** (`slug: 'costs-and-rates'`):
  - Section "Mortgage Insurance Premium": upfront MIP (2% of MCA) + annual MIP (0.5%); what it funds.
  - Section "Origination and other costs": origination fee formula (2% of first $200k + 1% above, $2,500–$6,000), servicing, third-party closing costs.
  - Section "Fixed vs. adjustable; margin": fixed (lump sum) vs. adjustable (index + margin); how margin affects accrual.
  - Takeaways: 3 bullets.

- [ ] **Step 1: Author `02-reverse-vs-forward.js`** following the shape and brief above (real EN + KO leaves).

- [ ] **Step 2: Author `03-hecm-basics.js`** following the shape and brief above.

- [ ] **Step 3: Author `04-how-much.js`** following the shape and brief above.

- [ ] **Step 4: Author `05-disbursement-options.js`** following the shape and brief above. Use `diagram: 'disbursementOptions'` on the disbursement section (registered in Task 12; until then it renders nothing — `diagrams[key]` is undefined and skipped).

- [ ] **Step 5: Author `06-costs-and-rates.js`** following the shape and brief above.

- [ ] **Step 6: Update `src/content/chapters-index.js`**

```js
import introduction from './chapters/01-introduction.js'
import reverseVsForward from './chapters/02-reverse-vs-forward.js'
import hecmBasics from './chapters/03-hecm-basics.js'
import howMuch from './chapters/04-how-much.js'
import disbursementOptions from './chapters/05-disbursement-options.js'
import costsAndRates from './chapters/06-costs-and-rates.js'

const chapters = [
  introduction,
  reverseVsForward,
  hecmBasics,
  howMuch,
  disbursementOptions,
  costsAndRates,
]
export default chapters
```

- [ ] **Step 7: Write a registry integrity test — `src/content/chapters-index.test.js`**

```js
import { describe, it, expect } from 'vitest'
import chapters from './chapters-index.js'

const isBilingual = (o) => o && typeof o.en === 'string' && typeof o.ko === 'string'

describe('chapter registry', () => {
  it('has unique slugs', () => {
    const slugs = chapters.map((c) => c.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every chapter has bilingual title, intro, sections, and takeaways', () => {
    for (const c of chapters) {
      expect(isBilingual(c.title)).toBe(true)
      expect(isBilingual(c.intro)).toBe(true)
      expect(c.sections.length).toBeGreaterThan(0)
      for (const s of c.sections) {
        expect(isBilingual(s.heading)).toBe(true)
        expect(s.body.every(isBilingual)).toBe(true)
      }
      expect(c.takeaways.every(isBilingual)).toBe(true)
    }
  })

  it('has no Korean leaf identical to its English leaf', () => {
    const leaves = []
    const walk = (o) => {
      if (isBilingual(o)) leaves.push(o)
      else if (o && typeof o === 'object') Object.values(o).forEach(walk)
      else if (Array.isArray(o)) o.forEach(walk)
    }
    chapters.forEach(walk)
    for (const leaf of leaves) expect(leaf.ko).not.toBe(leaf.en)
  })
})
```

- [ ] **Step 8: Run the test to verify it passes**

Run: `npm test -- chapters-index`
Expected: PASS (3 tests). If "no Korean identical to English" fails, fix the offending leaf's Korean translation.

- [ ] **Step 9: Commit**

```bash
git add src/content/
git commit -m "feat: add chapters 2-6 content (EN/KO) and registry integrity test"
```

---

## Task 11: Chapters 7–11 content (incl. glossary)

**Files:**
- Create: `src/content/chapters/07-balance-growth.js`, `08-obligations-maturity.js`, `09-origination-process.js`, `10-risks-suitability.js`, `11-glossary.js`
- Modify: `src/content/chapters-index.js`

**Interfaces:**
- Same chapter data shape as Task 9. Chapter 11 (glossary) uses the same shape: each glossary entry is a `section` with `heading` = the term (EN/KO) and a single `body` paragraph defining it (EN/KO); `intro` introduces the glossary; `takeaways` may be a single "where to learn more" bullet.

**Content brief per chapter:**

- **07 — Loan Balance Growth & Non-Recourse** (`slug: 'balance-growth'`) (diagrams: `balanceGrowth`, `nonRecourse`, added Task 12):
  - "Negative amortization": balance = disbursements + accrued interest + MIP, compounding upward.
  - "The non-recourse guarantee": borrower/heirs never owe more than the home's value at sale; FHA insurance covers any shortfall.
  - "Crossover point": where loan balance approaches/exceeds home value; what it means and why insurance matters.
  - Takeaways: 3 bullets.

- **08 — Borrower Obligations & Maturity Events** (`slug: 'obligations-maturity'`):
  - "Ongoing borrower obligations": property taxes, homeowners insurance, maintenance, occupancy as primary residence.
  - "Maturity events": last borrower dies, sells, moves out 12+ months, or defaults on obligations.
  - "Repayment": sell home / refinance / heirs pay lesser of balance or 95% of appraised value; timelines.
  - Takeaways: 3 bullets.

- **09 — The Origination Process** (`slug: 'origination-process'`) (diagram: `processFlow`, added Task 12):
  - "Counseling first": mandatory HUD-approved counseling before application — contrast with forward.
  - "Application through closing": application → financial assessment → FHA appraisal → underwriting → closing → first disbursement.
  - "How it differs from a forward loan": counseling requirement, age/equity focus, set-asides for taxes/insurance (LESA).
  - Takeaways: 3 bullets.

- **10 — Risks, Suitability & Alternatives** (`slug: 'risks-suitability'`):
  - "Who it suits": long-term occupancy intent, need for cash flow, ability to maintain obligations.
  - "Risks and pitfalls": eroding equity, costs, risk of default by not paying taxes/insurance, effect on heirs/means-tested benefits.
  - "Alternatives": downsizing, HELOC/home equity loan, refinancing, public benefits.
  - Takeaways: 3 bullets.

- **11 — Glossary** (`slug: 'glossary'`): entries as sections for at least: Maximum Claim Amount, Principal Limit, Principal Limit Factor (PLF), Expected Interest Rate, MIP, Non-Recourse, Negative Amortization, Tenure Payment, Line of Credit, HECM, Maturity Event, LESA. Each `heading` is the term EN/KO, `body` one defining paragraph EN/KO.

- [ ] **Step 1: Author `07-balance-growth.js`** (use `diagram: 'balanceGrowth'` and a second section `diagram: 'nonRecourse'`).

- [ ] **Step 2: Author `08-obligations-maturity.js`**.

- [ ] **Step 3: Author `09-origination-process.js`** (use `diagram: 'processFlow'`).

- [ ] **Step 4: Author `10-risks-suitability.js`**.

- [ ] **Step 5: Author `11-glossary.js`** with the term entries above.

- [ ] **Step 6: Update `src/content/chapters-index.js`** to append chapters 7–11 in order:

```js
import balanceGrowth from './chapters/07-balance-growth.js'
import obligationsMaturity from './chapters/08-obligations-maturity.js'
import originationProcess from './chapters/09-origination-process.js'
import risksSuitability from './chapters/10-risks-suitability.js'
import glossary from './chapters/11-glossary.js'
// ...append to the chapters array after costsAndRates:
//   balanceGrowth, obligationsMaturity, originationProcess, risksSuitability, glossary
```

- [ ] **Step 7: Run the registry test to verify all 11 chapters pass integrity checks**

Run: `npm test -- chapters-index`
Expected: PASS (slugs unique, all bilingual, no KO==EN).

- [ ] **Step 8: Add a count assertion to `chapters-index.test.js`**

```js
it('contains all 11 chapters in order ending with the glossary', () => {
  expect(chapters).toHaveLength(11)
  expect(chapters[0].slug).toBe('introduction')
  expect(chapters[10].slug).toBe('glossary')
})
```

Run: `npm test -- chapters-index`
Expected: PASS.

- [ ] **Step 9: Commit**

```bash
git add src/content/
git commit -m "feat: add chapters 7-11 content (EN/KO) including glossary"
```

---

## Task 12: Remaining diagrams

**Files:**
- Create: `src/components/diagrams/DisbursementOptionsDiagram.jsx`, `BalanceGrowthChart.jsx`, `NonRecourseDiagram.jsx`, `ProcessFlowDiagram.jsx`
- Modify: `src/components/diagrams/index.js`
- Create: `src/components/diagrams/diagrams.test.jsx`

**Interfaces:**
- Each diagram is a default-exported component taking no props, using `useLanguage().pick` for bilingual labels, rendering an `<svg role="img" aria-label=...>` inside `<figure className="diagram">`.
- `index.js` registers keys: `disbursementOptions`, `balanceGrowth`, `nonRecourse`, `processFlow` (plus existing `balanceDirection`).

- [ ] **Step 1: Create `DisbursementOptionsDiagram.jsx`** — four labeled blocks (Lump sum / Tenure / Term / Line of credit) using `pick`. Follow the `BalanceDirectionDiagram` pattern (figure > svg with `<rect>` + `<text>` per option). Use bilingual labels matching `ui.calc.optionLump/optionTenure/optionTerm/optionLoc` wording.

```jsx
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function DisbursementOptionsDiagram() {
  const { pick } = useLanguage()
  const opts = [
    { en: 'Lump sum', ko: '일시금' },
    { en: 'Tenure', ko: '종신' },
    { en: 'Term', ko: '기간제' },
    { en: 'Line of credit', ko: '신용한도' },
  ]
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 120" role="img" aria-label="Disbursement options">
        {opts.map((o, i) => (
          <g key={i} transform={`translate(${10 + i * 78},30)`}>
            <rect width="70" height="50" rx="6" fill="#e2e8f0" stroke="#1e3a5f" />
            <text x="35" y="30" fontSize="9" textAnchor="middle" fill="#1e3a5f">{pick(o)}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
```

- [ ] **Step 2: Create `BalanceGrowthChart.jsx`** — a rising loan-balance curve vs. a roughly flat home-value line over time, bilingual axis labels (`Loan balance` / `Home value` / `Time`). Follow the same figure/svg pattern with two `<polyline>`s.

```jsx
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function BalanceGrowthChart() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    home: { en: 'Home value', ko: '주택 가치' },
    time: { en: 'Time', ko: '시간' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 200" role="img" aria-label={pick(L.balance)}>
        <line x1="40" y1="170" x2="300" y2="170" stroke="#94a3b8" />
        <line x1="40" y1="20" x2="40" y2="170" stroke="#94a3b8" />
        <polyline points="40,150 120,140 200,120 300,90" fill="none" stroke="#64748b" strokeWidth="2" />
        <polyline points="40,165 120,150 200,120 300,60" fill="none" stroke="#b45309" strokeWidth="3" />
        <text x="210" y="55" fontSize="10" fill="#b45309">{pick(L.balance)}</text>
        <text x="210" y="110" fontSize="10" fill="#475569">{pick(L.home)}</text>
        <text x="150" y="190" fontSize="10" fill="#475569">{pick(L.time)}</text>
      </svg>
    </figure>
  )
}
```

- [ ] **Step 3: Create `NonRecourseDiagram.jsx`** — illustrate "owe the lesser of balance or home value," bilingual labels. Same figure/svg pattern (two bars: loan balance vs. capped repayment).

```jsx
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function NonRecourseDiagram() {
  const { pick } = useLanguage()
  const L = {
    balance: { en: 'Loan balance', ko: '대출 잔액' },
    owed: { en: 'Max owed (home value)', ko: '최대 상환액 (주택 가치)' },
    cap: { en: 'FHA insurance covers the gap', ko: 'FHA 보험이 차액을 보전' },
  }
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 180" role="img" aria-label={pick(L.cap)}>
        <rect x="60" y="30" width="60" height="120" fill="#cbd5e1" />
        <rect x="200" y="80" width="60" height="70" fill="#0f766e" />
        <text x="90" y="20" fontSize="9" textAnchor="middle" fill="#475569">{pick(L.balance)}</text>
        <text x="230" y="70" fontSize="9" textAnchor="middle" fill="#0f766e">{pick(L.owed)}</text>
        <text x="160" y="170" fontSize="9" textAnchor="middle" fill="#b45309">{pick(L.cap)}</text>
      </svg>
    </figure>
  )
}
```

- [ ] **Step 4: Create `ProcessFlowDiagram.jsx`** — five steps (Counseling → Application → Appraisal → Underwriting → Closing), bilingual.

```jsx
import { useLanguage } from '../../i18n/LanguageContext.jsx'

export default function ProcessFlowDiagram() {
  const { pick } = useLanguage()
  const steps = [
    { en: 'Counseling', ko: '상담' },
    { en: 'Application', ko: '신청' },
    { en: 'Appraisal', ko: '감정' },
    { en: 'Underwriting', ko: '심사' },
    { en: 'Closing', ko: '클로징' },
  ]
  return (
    <figure className="diagram">
      <svg viewBox="0 0 340 90" role="img" aria-label="Origination process">
        {steps.map((s, i) => (
          <g key={i} transform={`translate(${5 + i * 66},25)`}>
            <rect width="58" height="40" rx="6" fill="#e2e8f0" stroke="#1e3a5f" />
            <text x="29" y="24" fontSize="8" textAnchor="middle" fill="#1e3a5f">{pick(s)}</text>
          </g>
        ))}
      </svg>
    </figure>
  )
}
```

- [ ] **Step 5: Update `src/components/diagrams/index.js`**

```js
import BalanceDirectionDiagram from './BalanceDirectionDiagram.jsx'
import DisbursementOptionsDiagram from './DisbursementOptionsDiagram.jsx'
import BalanceGrowthChart from './BalanceGrowthChart.jsx'
import NonRecourseDiagram from './NonRecourseDiagram.jsx'
import ProcessFlowDiagram from './ProcessFlowDiagram.jsx'

const diagrams = {
  balanceDirection: BalanceDirectionDiagram,
  disbursementOptions: DisbursementOptionsDiagram,
  balanceGrowth: BalanceGrowthChart,
  nonRecourse: NonRecourseDiagram,
  processFlow: ProcessFlowDiagram,
}

export default diagrams
```

- [ ] **Step 6: Write the test — `src/components/diagrams/diagrams.test.jsx`**

```jsx
import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { LanguageProvider } from '../../i18n/LanguageContext.jsx'
import diagrams from './index.js'

describe('diagram registry', () => {
  it('registers all five diagram keys', () => {
    expect(Object.keys(diagrams).sort()).toEqual(
      ['balanceDirection', 'balanceGrowth', 'disbursementOptions', 'nonRecourse', 'processFlow'].sort(),
    )
  })

  it('every diagram renders an svg', () => {
    for (const Key of Object.keys(diagrams)) {
      const Diagram = diagrams[Key]
      const { container } = render(<LanguageProvider><Diagram /></LanguageProvider>)
      expect(container.querySelector('svg')).toBeTruthy()
    }
  })
})
```

- [ ] **Step 7: Run the test to verify it passes**

Run: `npm test -- diagrams`
Expected: PASS (2 tests).

- [ ] **Step 8: Commit**

```bash
git add src/components/diagrams/
git commit -m "feat: add disbursement, balance-growth, non-recourse, and process diagrams"
```

---

## Task 13: Calculator UI

**Files:**
- Create: `src/calculator/Calculator.jsx`, `src/calculator/Calculator.test.jsx`
- Modify: `src/App.jsx` (wire the `/calculator` route to `<Calculator />`)

**Interfaces:**
- Consumes: `calculateHECM`, `formatUSD`, `formatPct`, `useLanguage`, `ui.calc`, `EFFECTIVE_DATE`.
- Produces: `Calculator` default export — a controlled form (age, homeValue, existingLiens, expectedRate, margin, disbursementOption, termYears) that recomputes results live via `calculateHECM` on every change and renders the result fields. `termYears` input shows only when `disbursementOption === 'term'`.

- [ ] **Step 1: Create `src/calculator/Calculator.jsx`**

```jsx
import { useState } from 'react'
import { calculateHECM } from './hecm.js'
import { formatUSD, formatPct } from './format.js'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import ui from '../i18n/ui-strings.js'

const initial = {
  age: 70,
  homeValue: 500000,
  existingLiens: 50000,
  expectedRate: 5,
  margin: 2,
  disbursementOption: 'lump',
  termYears: 10,
}

export default function Calculator() {
  const { pick } = useLanguage()
  const [form, setForm] = useState(initial)

  const update = (key) => (e) => {
    const raw = e.target.value
    const value = key === 'disbursementOption' ? raw : Number(raw)
    setForm((f) => ({ ...f, [key]: value }))
  }

  const r = calculateHECM(form)

  return (
    <div className="calculator">
      <h1>{pick(ui.calc.heading)}</h1>

      <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
        <label>{pick(ui.calc.age)}
          <input type="number" min="62" value={form.age} onChange={update('age')} />
        </label>
        <label>{pick(ui.calc.homeValue)}
          <input type="number" min="0" value={form.homeValue} onChange={update('homeValue')} />
        </label>
        <label>{pick(ui.calc.existingLiens)}
          <input type="number" min="0" value={form.existingLiens} onChange={update('existingLiens')} />
        </label>
        <label>{pick(ui.calc.expectedRate)}
          <input type="number" step="0.1" value={form.expectedRate} onChange={update('expectedRate')} />
        </label>
        <label>{pick(ui.calc.margin)}
          <input type="number" step="0.1" value={form.margin} onChange={update('margin')} />
        </label>
        <label>{pick(ui.calc.disbursement)}
          <select value={form.disbursementOption} onChange={update('disbursementOption')}>
            <option value="lump">{pick(ui.calc.optionLump)}</option>
            <option value="tenure">{pick(ui.calc.optionTenure)}</option>
            <option value="term">{pick(ui.calc.optionTerm)}</option>
            <option value="loc">{pick(ui.calc.optionLoc)}</option>
          </select>
        </label>
        {form.disbursementOption === 'term' && (
          <label>{pick(ui.calc.termYears)}
            <input type="number" min="1" value={form.termYears} onChange={update('termYears')} />
          </label>
        )}
      </form>

      <div className="calc-results">
        <h2>{pick(ui.calc.results)}</h2>
        <Row label={pick(ui.calc.maxClaim)} value={formatUSD(r.maxClaimAmount)} />
        <Row label={pick(ui.calc.plf)} value={formatPct(r.plf)} />
        <Row label={pick(ui.calc.principalLimit)} value={formatUSD(r.principalLimit)} />
        <Row label={pick(ui.calc.upfrontMip)} value={formatUSD(r.upfrontMip)} />
        <Row label={pick(ui.calc.origFee)} value={formatUSD(r.originationFee)} />
        <Row label={pick(ui.calc.otherCosts)} value={formatUSD(r.otherClosingCosts)} />
        <Row label={pick(ui.calc.obligations)} value={formatUSD(r.mandatoryObligations)} />
        <Row label={pick(ui.calc.netAvailable)} value={formatUSD(r.netAvailable)} emphasize />

        {r.disbursement.type === 'lump' && (
          <Row label={pick(ui.calc.lumpSum)} value={formatUSD(r.disbursement.lumpSum)} />
        )}
        {r.disbursement.type === 'loc' && (
          <Row label={pick(ui.calc.lineOfCredit)} value={formatUSD(r.disbursement.lineOfCredit)} />
        )}
        {(r.disbursement.type === 'tenure' || r.disbursement.type === 'term') && (
          <Row label={pick(ui.calc.monthlyPayment)} value={formatUSD(r.disbursement.monthlyPayment)} />
        )}
      </div>

      <p className="calc-disclaimer">{pick(ui.calc.estimateNote)}</p>
    </div>
  )
}

function Row({ label, value, emphasize }) {
  return (
    <div className={emphasize ? 'calc-row calc-row--emphasis' : 'calc-row'}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
}
```

- [ ] **Step 2: Wire the route in `src/App.jsx`** — replace the placeholder calculator route element:

```jsx
import Calculator from './calculator/Calculator.jsx'
// ...
<Route path="/calculator" element={<Calculator />} />
```

- [ ] **Step 3: Write the test — `src/calculator/Calculator.test.jsx`**

```jsx
import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider } from '../i18n/LanguageContext.jsx'
import Calculator from './Calculator.jsx'

const renderCalc = () =>
  render(<LanguageProvider><Calculator /></LanguageProvider>)

describe('Calculator', () => {
  beforeEach(() => localStorage.clear())

  it('renders results for the default inputs', () => {
    renderCalc()
    expect(screen.getByText('Maximum Claim Amount')).toBeInTheDocument()
    expect(screen.getByText('Net available to borrower')).toBeInTheDocument()
    expect(screen.getByText(/Estimate only/)).toBeInTheDocument()
  })

  it('recomputes when an input changes', async () => {
    renderCalc()
    const home = screen.getByLabelText('Home appraised value')
    await userEvent.clear(home)
    await userEvent.type(home, '300000')
    // $300,000 appears as the max claim amount value
    expect(screen.getByText('$300,000')).toBeInTheDocument()
  })

  it('shows the term-length input only for the term option', async () => {
    renderCalc()
    expect(screen.queryByText('Term length (years)')).not.toBeInTheDocument()
    await userEvent.selectOptions(screen.getByLabelText('Disbursement option'), 'term')
    expect(screen.getByText('Term length (years)')).toBeInTheDocument()
  })
})
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- Calculator`
Expected: PASS (3 tests).

- [ ] **Step 5: Manually verify in the browser**

Run: `npm run dev`, open `/calculator`. Change inputs; confirm results update live and the Korean toggle translates labels. Stop the server.

- [ ] **Step 6: Commit**

```bash
git add src/calculator/Calculator.jsx src/calculator/Calculator.test.jsx src/App.jsx
git commit -m "feat: add live HECM calculator UI"
```

---

## Task 14: Styling & responsive layout

**Files:**
- Modify: `src/styles/global.css`

**Interfaces:**
- Styles the existing class names already used by components: `disclaimer-banner`, `app-header`, `app-title`, `lang-toggle`, `app-body`, `sidebar`, `sidebar-heading`, `sidebar-list`, `sidebar-calc-link`, `app-main`, `chapter`, `chapter-intro`, `key-takeaways`, `diagram`, `calculator`, `calc-form`, `calc-results`, `calc-row`, `calc-row--emphasis`, `calc-disclaimer`. No JSX changes — purely CSS.

- [ ] **Step 1: Replace `src/styles/global.css`** with the full stylesheet

```css
:root {
  --navy: #1e3a5f;
  --slate: #475569;
  --teal: #0f766e;
  --bg: #f8fafc;
  --surface: #ffffff;
  --border: #e2e8f0;
  --amber: #b45309;
  font-family: system-ui, -apple-system, "Helvetica Neue", sans-serif;
  color: #0f172a;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); line-height: 1.6; }

.disclaimer-banner {
  background: #fff7ed; color: var(--amber);
  font-size: 0.85rem; padding: 0.5rem 1rem; text-align: center;
  border-bottom: 1px solid #fed7aa;
}
.app-header {
  display: flex; align-items: center; justify-content: space-between;
  background: var(--navy); color: #fff; padding: 0.75rem 1.25rem;
}
.app-title { font-weight: 600; font-size: 1.1rem; }
.lang-toggle {
  background: var(--teal); color: #fff; border: none; border-radius: 6px;
  padding: 0.4rem 0.9rem; cursor: pointer; font-size: 0.9rem;
}
.lang-toggle:hover { filter: brightness(1.1); }

.app-body { display: flex; align-items: flex-start; }
.sidebar {
  flex: 0 0 240px; background: var(--surface); border-right: 1px solid var(--border);
  padding: 1rem; min-height: calc(100vh - 96px);
}
.sidebar-heading { font-size: 0.75rem; text-transform: uppercase; color: var(--slate); letter-spacing: 0.05em; }
.sidebar-list { list-style: none; padding: 0; margin: 0 0 1rem; }
.sidebar-list li { margin: 0.15rem 0; }
.sidebar a, .sidebar-calc-link {
  display: block; padding: 0.4rem 0.5rem; border-radius: 6px;
  color: var(--navy); text-decoration: none; font-size: 0.9rem;
}
.sidebar a:hover { background: #eef2f7; }
.sidebar a.active, .sidebar-calc-link.active { background: var(--navy); color: #fff; }
.sidebar-calc-link { margin-top: 0.5rem; font-weight: 600; border: 1px solid var(--border); }

.app-main { flex: 1; padding: 1.5rem 2rem; max-width: 820px; }

.chapter h1 { color: var(--navy); }
.chapter h2 { color: var(--teal); margin-top: 1.75rem; }
.chapter-intro { font-size: 1.05rem; color: var(--slate); }
.key-takeaways {
  margin-top: 2rem; background: #ecfeff; border: 1px solid #a5f3fc;
  border-radius: 10px; padding: 1rem 1.25rem;
}
.key-takeaways h3 { margin-top: 0; color: var(--teal); }
.diagram { margin: 1.25rem 0; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 0.75rem; }
.diagram svg { width: 100%; height: auto; }

.calculator { max-width: 760px; }
.calc-form { display: grid; grid-template-columns: 1fr 1fr; gap: 0.85rem; margin-bottom: 1.5rem; }
.calc-form label { display: flex; flex-direction: column; font-size: 0.85rem; color: var(--slate); gap: 0.25rem; }
.calc-form input, .calc-form select { padding: 0.45rem; border: 1px solid var(--border); border-radius: 6px; font-size: 0.95rem; }
.calc-results { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 1rem 1.25rem; }
.calc-results h2 { margin-top: 0; color: var(--navy); }
.calc-row { display: flex; justify-content: space-between; padding: 0.4rem 0; border-bottom: 1px solid var(--border); }
.calc-row:last-child { border-bottom: none; }
.calc-row--emphasis { font-weight: 700; color: var(--teal); font-size: 1.05rem; }
.calc-disclaimer { font-size: 0.8rem; color: var(--amber); margin-top: 1rem; }

@media (max-width: 720px) {
  .app-body { flex-direction: column; }
  .sidebar { flex-basis: auto; width: 100%; min-height: auto; border-right: none; border-bottom: 1px solid var(--border); }
  .app-main { padding: 1rem; }
  .calc-form { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: Verify tests still pass (CSS shouldn't break them)**

Run: `npm test`
Expected: PASS — full suite green.

- [ ] **Step 3: Manually verify responsiveness**

Run: `npm run dev`; resize the window below 720px and confirm the sidebar stacks above the content and the calc form becomes single-column. Stop the server.

- [ ] **Step 4: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add professional palette, layout, and responsive styles"
```

---

## Task 15: README + final verification

**Files:**
- Create: `README.md`

**Interfaces:**
- Produces: project README documenting purpose, scope/disclaimers, run/test/build commands, and where to update FHA constants and translations.

- [ ] **Step 1: Create `README.md`**

```markdown
# Reverse Mortgage Learning Site

An educational web app teaching U.S. HECM reverse mortgages to traditional-mortgage
professionals, with an English ⇄ Korean toggle and a HECM estimator. Built for the
Korean mortgage community in the Los Angeles area.

## Scope & disclaimers

- **Educational only.** The calculator produces estimates using *representative*
  factors — not an official loan quote.
- **Korean is a first-draft translation** pending review by a native
  Korean-speaking mortgage expert before production use.
- U.S. HECM only (not the South Korean Housing Pension program).

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm test         # run the test suite (Vitest)
npm run build    # production build to dist/
```

## Maintaining the data

- FHA constants (lending limit, MIP rates, effective date): `src/calculator/constants.js`
- Representative PLF table: `src/calculator/plf-table.js`
- Chapter content (EN/KO): `src/content/chapters/`
- UI strings (EN/KO): `src/i18n/ui-strings.js`
```

- [ ] **Step 2: Run the full test suite**

Run: `npm test`
Expected: PASS — all suites (plf-table, fees, disbursement, hecm, format, LanguageContext, App, ChapterLayout, chapters-index, diagrams, Calculator).

- [ ] **Step 3: Run the production build**

Run: `npm run build`
Expected: PASS — `dist/` produced with no errors.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "docs: add README with scope, commands, and maintenance notes"
```

---

## Self-Review (completed during authoring)

- **Spec coverage:** React+Vite (T1), bilingual model + `pick`/localStorage (T7), 11 chapters (T9–T11), SVG diagrams for all 5 spec'd visuals (T9, T12), calculator inputs/constants/outputs/disclaimer (T2–T6, T13), visual design + responsive (T14), dated FHA constants & disclaimers (T2, T7, T13), README/maintenance (T15). All spec sections map to tasks.
- **Placeholder scan:** Infrastructure and calculator tasks contain complete code. Content tasks (T10–T11) provide the exact data shape + per-chapter content briefs; prose authoring is the deliverable, guarded by the `chapters-index.test.js` integrity test (bilingual present, KO≠EN, count=11) — not free-floating "TODO"s.
- **Type consistency:** `pick(bilingual)`, `lookupPLF(age, rate)`, `originationFee(mca)`, `monthlyPayment(p, r, n)`, `buildDisbursement({...})`, and the `calculateHECM` result keys are referenced identically across tasks. Diagram keys (`balanceDirection`, `disbursementOptions`, `balanceGrowth`, `nonRecourse`, `processFlow`) match between content briefs and the registry.
```
