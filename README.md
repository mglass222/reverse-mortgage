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
