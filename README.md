# OpenPortsGames

**Site: <https://kymie131.github.io/openportsgames/>**

Catalog of native game ports: decompilations, recompilations and
reimplementations, for PC and Android. Every entry links to the project's
official source.

The site hosts no downloadable files and links to none. Static build: no
accounts, no database.

- EN/ES, dark and light themes.
- Translations were assisted by an LLM.

## Tech

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4, static export. Client-side
i18n, zod schemas, MiniSearch, Radix UI. Tests with Vitest, smoke tests with
Playwright.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command                      | What it does                 |
| ---------------------------- | ---------------------------- |
| `npm run dev`                | Dev server                   |
| `npm run build`              | Static export into `out/`    |
| `npm run lint` / `typecheck` | ESLint / tsc                 |
| `npm test`                   | All tests                    |
| `npm run validate`           | Catalog data validation only |
| `npx playwright test`        | Smoke tests (build first)    |

## Layout

```
src/
  app/          Routes, API, sitemap
  components/   UI components
  content/      Catalog data (ports, hardware, tests)
  lib/          Data layer, i18n, helpers
tests/
  unit/         Vitest unit tests
  content/      Data validation tests
  e2e/          Playwright smoke tests
docs/           Development, policy, design, etc.
scripts/        Release checker, preview server
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issue templates exist for proposing a
port, reporting a test, fixing data, or requesting a takedown.

## Licenses

Code is MIT (`LICENSE`). Catalog data is CC BY 4.0 (`LICENSE-DATA`).

Not affiliated with any game company. Trademarks belong to their owners.
