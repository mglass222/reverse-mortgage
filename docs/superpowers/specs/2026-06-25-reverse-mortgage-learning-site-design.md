# Reverse Mortgage Learning Site — Design Spec

**Date:** 2026-06-25
**Status:** Approved for planning

## Overview

A web-based educational website that teaches reverse mortgages (U.S. **HECM** —
Home Equity Conversion Mortgage) to professionals who already understand
traditional ("forward") residential and commercial mortgages. The site centers
on how reverse mortgages *differ* from forward mortgages.

It includes a full **English ⇄ Korean** language toggle (curated, pre-translated
content) and a **HECM reverse-mortgage calculator**.

### Audience

Korean-speaking mortgage professionals in and around **Los Angeles,
California**, transitioning from traditional mortgage knowledge to reverse
mortgages.

### Tone & content goals

- Comprehensive but not overwhelming; each chapter stays short.
- Simple language, but correct industry terminology (e.g., *non-recourse*,
  *Principal Limit Factor*, *negative amortization*).
- Diagrams/illustrations where they aid understanding.

## Goals

1. Teach the conceptual shift from forward to reverse mortgages.
2. Provide an accurate-enough HECM estimator that demonstrates how each
   parameter affects the result.
3. Serve the content fully in English and Korean via an instant toggle.

## Non-Goals

- Not an official loan-origination or quoting tool. The calculator is an
  **educational estimate**, clearly disclaimed.
- Not covering the South Korean Housing Pension (주택연금) program — U.S. HECM only.
- Not a backend/CRM or lead-capture system; this is a static educational site.

## Architecture & Tech

- **React + Vite** single-page application, deployable as static files
  (GitHub Pages, Netlify, any static host).
- **Routing:** `react-router-dom`. A persistent left-sidebar table of contents
  lists the 11 chapters plus a "Calculator" entry. Clean routes, e.g.
  `/chapter/reverse-vs-forward`, `/calculator`.
- **Language state:** a `LanguageContext` holds `lang` (`'en' | 'ko'`),
  persisted to `localStorage` so the choice survives reloads. A top-right toggle
  swaps the entire UI instantly.
- **Content/presentation separation:** each chapter's text lives in its own data
  module; components render from that data.
- **Testing:** Vitest unit tests for the calculator math, written test-first.
- **Responsive:** works on laptop and tablet; sidebar collapses on narrow
  screens.

### Proposed structure

```
src/
  main.jsx
  App.jsx
  i18n/
    LanguageContext.jsx      # lang state + localStorage + useTranslation hook
    ui-strings.js            # { en, ko } for all UI labels/nav/buttons
  content/
    chapters/                # one module per chapter, each { en, ko }
      01-introduction.js
      02-reverse-vs-forward.js
      ...
      11-glossary.js
    chapters-index.js        # ordered list: slug, title{en,ko}, component data
  components/
    Sidebar.jsx
    LanguageToggle.jsx
    DisclaimerBanner.jsx
    ChapterLayout.jsx        # shared chapter template
    KeyTakeaways.jsx
    diagrams/                # SVG diagram components (bilingual labels)
  calculator/
    hecm.js                  # pure calculateHECM(params) — unit tested
    plf-table.js             # representative PLF lookup table (dated)
    Calculator.jsx           # form + live results UI
  styles/
```

## Content & Bilingual Model

- Every text string — chapter prose, UI labels, calculator fields, glossary,
  and SVG diagram labels — is stored **bilingually side-by-side** as
  `{ en, ko }`.
- English content is authored in full. Korean is a **first-draft professional
  translation**, shipped with a visible "translations pending expert review"
  note. Korean should be verified by a native Korean-speaking mortgage expert
  before production/client use.
- Chapters render from a shared `ChapterLayout` template: title, body sections,
  diagrams, and a "Key Takeaways" box — so all 11 chapters stay visually
  consistent.

### Chapter outline (approved)

1. **Introduction — Why Reverse Mortgages Exist** (house-rich, cash-poor seniors)
2. **Reverse vs. Traditional (Forward) Mortgages** (the core flip; side-by-side
   comparison — the heart of the site)
3. **HECM Program Basics** (FHA insurance; eligibility: age 62+, primary
   residence, mandatory counseling; eligible property types)
4. **How Much Can a Borrower Receive** (Principal Limit, PLF, expected rate, FHA
   lending limit — the levers the calculator uses)
5. **Disbursement Options** (lump sum, tenure, term, line of credit, and the
   growing credit line)
6. **Costs & Interest Rates** (upfront + annual MIP, origination fee, servicing,
   margin, fixed vs. adjustable)
7. **Loan Balance Growth & Non-Recourse** (negative amortization, compounding,
   the non-recourse guarantee, crossover point)
8. **Borrower Obligations & Maturity Events** (taxes/insurance/upkeep; when and
   how the loan becomes due and is repaid)
9. **The Origination Process** (counseling → application → appraisal →
   underwriting → closing, compared to the forward process)
10. **Risks, Suitability & Alternatives** (good fit vs. poor fit, common
    pitfalls, alternatives to consider)
11. **Glossary** (key terms, English + Korean)

## Visuals

Custom **SVG diagrams/charts drawn in code** — no external image files or
licensing. Labels are bilingual and translate with the toggle. Planned
diagrams:

- Reverse-vs-forward balance-direction diagram (Ch. 2)
- Disbursement-options chart (Ch. 5)
- Loan-balance-growth-over-time line chart (Ch. 7)
- Non-recourse / crossover illustration (Ch. 7)
- Origination-process flow (Ch. 9)

## Calculator — HECM Realistic Estimator

A pure function `calculateHECM(params)` plus a live-updating UI. Built
test-first with Vitest.

### Inputs

1. Youngest borrower age (62+)
2. Home appraised value
3. Existing mortgage balance / liens to pay off
4. Expected interest rate (drives the Principal Limit Factor)
5. Interest rate margin (ongoing accrual & adjustable illustration)
6. Disbursement option (lump sum / tenure / term / line of credit)

### Automatic constants (clearly labeled and dated)

- **FHA HECM lending limit** (2025: **$1,209,750**) — caps the claim amount.
- **Upfront MIP** = 2% of Maximum Claim Amount; **annual MIP** = 0.5%.
- **Origination fee** per FHA formula: 2% of first $200,000 + 1% of the amount
  above, with a **$2,500 minimum** and **$6,000 maximum**.
- **Representative PLF lookup table** by age × expected rate — an educational
  approximation, dated, with disclaimer. Lives in `plf-table.js`.

### Calculation flow

1. **Maximum Claim Amount (MCA)** = min(appraised value, FHA lending limit).
2. **Principal Limit** = MCA × PLF(age, expected rate), PLF from the table.
3. **Upfront costs** = upfront MIP (2% of MCA) + origination fee + estimated
   other closing costs.
4. **Mandatory obligations** = existing liens/mortgage payoff + upfront costs.
5. **Net Principal Limit / Net available** = Principal Limit − mandatory
   obligations.
6. **Disbursement illustration** based on selected option:
   - Lump sum: net available as a one-time draw.
   - Tenure: estimated monthly payment for life in the home.
   - Term: estimated monthly payment over a chosen number of years.
   - Line of credit: initial available credit line.

### Outputs displayed

Maximum Claim Amount, Principal Limit, upfront MIP, origination + estimated
closing costs, mandatory obligations deducted, **Net available to borrower**,
and the disbursement illustration.

### Disclaimer

Prominent: **"Educational estimate only — not an official loan quote. Figures
use representative factors and may differ from an actual HECM origination."**

## Visual Design

- Clean, professional financial aesthetic: calm palette (navy/slate + teal
  accent), neutral background, readable sans-serif, generous spacing.
- Responsive (laptop and tablet); sidebar collapses on narrow screens.
- Language toggle (top-right) and a clear top-level disclaimer banner.

## Open Items / Future

- Korean translations require expert review before production use.
- PLF table and FHA constants are dated and will need periodic updates when FHA
  revises them.
- Possible future additions (out of scope now): amortization/projection table
  in the calculator, more property-type detail, print/export of estimates.
