# Reverse Mortgage Learning Site

**🔗 Live site: https://mglass222.github.io/reverse-mortgage/**

An educational web app that teaches U.S. **HECM** (Home Equity Conversion Mortgage)
reverse mortgages to experienced mortgage and CRE lending professionals — built for
the Korean banking community in and around Los Angeles. Content is bilingual
(**English ⇄ Korean**) with an instant language toggle, and the site includes a live
HECM estimator.

The live site is deployed to GitHub Pages automatically on every push to `main`
(see `.github/workflows/deploy.yml`).

> The material is written at a **practitioner's altitude**: it assumes fluency in
> forward/commercial real estate underwriting and teaches reverse mortgages by
> contrast (expected vs. note rate, the PLF as a risk-based LTV, the Financial
> Assessment vs. ATR/QM, statutory non-recourse, Ginnie Mae HMBS / MMI Fund
> execution, LESA, 98% assignment, the 95% rule).

## Scope & disclaimers

- **Educational only.** The calculator produces estimates using *representative*
  factors — it is **not** an official loan quote or an origination tool.
- **Korean is a first-draft translation** pending review by a native
  Korean-speaking mortgage expert before any production/client use.
- **U.S. HECM only** — the South Korean Housing Pension (주택연금) program is out of scope.

## Tech stack

- **React 18** + **Vite 5** single-page app (deploys as static files anywhere)
- **react-router-dom 6** (HashRouter, so deep links work on the GitHub Pages subpath)
- **Vitest** + **@testing-library/react** + **jsdom** for unit/component tests
- Plain CSS (no UI framework) in a modern, sleek theme; Google Fonts:
  Sora (display), Hanken Grotesk (body), IBM Plex Mono (labels/figures), Noto Sans KR

## Features

- **12 routes**: 11 chaptered lessons, a glossary, and a "Sources & Further
  Reading" references chapter — each rendered from a shared bilingual data model
  so prose stays separate from presentation. A "next chapter" link and
  scroll-to-top tie the sequence together.
- **Instant English/Korean toggle** persisted to `localStorage`; every UI string,
  chapter, and SVG diagram label is stored as `{ en, ko }`. The Korean was
  accuracy-checked via Google Translate back-translation plus expert review.
- **Custom SVG diagrams** (one per chapter, drawn in code and fully translatable):
  equity gap, reverse-vs-forward balance curves, the program/insurance flow, the
  Principal Limit waterfall, disbursement options, the rate stack, balance growth,
  non-recourse/crossover, maturity-resolution paths, the origination flow, and a
  suitability comparison.
- **Inline source citations** in the prose plus a full-URL references chapter
  (HUD, eCFR, CFPB, Ginnie Mae, SSA/Medicaid).
- **Live HECM calculator** — Maximum Claim Amount, Principal Limit (PLF lookup),
  MIP, capped origination fee, mandatory obligations, net availability, and a
  disbursement illustration (lump sum / tenure / term / line of credit).
- **Responsive** with a collapsible mobile chapter menu, and an SVG favicon.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm test         # run the Vitest suite
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```text
src/
  main.jsx, App.jsx              # entry + layout shell, routing, scroll-to-top
  styles/global.css              # modern, sleek theme (Sora / Hanken Grotesk / IBM Plex Mono)
  i18n/
    LanguageContext.jsx          # lang state, localStorage, pick() helper
    ui-strings.js                # { en, ko } UI labels
  calculator/
    constants.js                 # dated FHA constants (lending limit, MIP rates)
    plf-table.js                 # representative Principal Limit Factor table
    fees.js                      # origination fee calculation
    disbursement.js              # tenure/term/lump/LOC math
    hecm.js                      # calculateHECM() orchestrator
    format.js                    # USD / percent formatting
    Calculator.jsx               # live calculator UI
  content/
    chapters-index.js            # ordered chapter registry
    chapters/01..12-*.js         # bilingual chapter content modules (incl. references)
  components/
    Sidebar, LanguageToggle, DisclaimerBanner, ChapterLayout, KeyTakeaways
    diagrams/                    # SVG diagram components + registry
```

Tests are colocated with their source as `*.test.js` / `*.test.jsx`.

## Maintaining the data

These are the files to update as the program and content evolve:

| What | Where |
| --- | --- |
| FHA constants (lending limit, MIP rates, effective date) | `src/calculator/constants.js` |
| Representative PLF table | `src/calculator/plf-table.js` |
| Chapter content (EN/KO) | `src/content/chapters/` |
| UI strings (EN/KO) | `src/i18n/ui-strings.js` |

FHA constants and the PLF table are **dated** (currently 2026 — e.g., the
$1,249,125 lending limit) — they must be refreshed when FHA revises them.

## Design docs

The approved design spec and the implementation plan live under
`docs/superpowers/`.
