# OpenPortsGames

**Site: <https://kymie131.github.io/openportsgames/>**

A community catalog of native game ports: decompilations, recompilations and
reimplementations, for PC and Android. Every entry links to the project's
official source.

I built this because I got tired of clicking "ISO pack" links on forums and
ending up with malware, or finding that the mirror I bookmarked was dead a
week later. The only links that survive are the ones pointing at the project
itself. That's basically the whole idea.

Also because Super Mario Bros. 3 blew my mind when I realized the cartridge
was just software, something you can take apart and run anywhere. Most of the
projects here do exactly that.

This site hosts no downloadable files and links to none. For now the site is
static: no accounts and no database.

- EN/ES, dark & light themes
- Interface in several languages. The translations were assisted by an LLM.

## Tech

Next.js 16 (App Router, strict TypeScript) + Tailwind CSS v4. Static export,
so it works on any static host. Custom i18n in the client, zod for schemas,
MiniSearch for search, Radix UI.

Tests with Vitest, smoke tests with Playwright.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Useful scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Static export into `out/` |
| `npm run lint` / `typecheck` | ESLint / tsc |
| `npm test` | All tests |
| `npm run validate` | Catalog data validation only |
| `npx playwright test` | Smoke tests (build first) |

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
docs/           Architecture, policy, design, etc.
scripts/        Release checker, preview server
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). There are issue templates for
proposing a port, reporting a test, fixing wrong data, or requesting a
takedown.

## Licenses

Code is MIT (`LICENSE`). Catalog data is CC BY 4.0 (`LICENSE-DATA`).

Not affiliated with any game company. Trademarks belong to their owners.
