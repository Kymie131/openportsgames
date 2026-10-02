# OpenPortsGames

**Site: <https://kymie131.github.io/openportsgames/>**

Catalog of **native game ports** — decompilations, recompilations and engine
reimplementations that bring classic games to PC and Android. Every entry
links only to the project's official source (repo, releases, docs, website).
No downloadable files, ever.

I built this because I got tired of clicking "ISO pack" links on forums and
ending up with malware, or finding that the mirror I bookmarked was dead a
week later. The only links that survive are the ones pointing at the project
itself. That's basically the whole idea.

Also because Super Mario Bros. 3 blew my mind when I realized the cartridge
was just software — stuff you can take apart and run anywhere. Most of the
projects here do exactly that.

Static site. No accounts, no database, no trackers. Just files.

- EN/ES, dark & light themes
- [Roadmap](docs/ROADMAP.md) · [Design](docs/DESIGN.md)

## Tech

Next.js 16 (App Router, TypeScript strict) + Tailwind CSS v4. Static export,
so it works on any static host. Custom i18n in the client (no next-intl),
`zod` for schemas, MiniSearch for search, Radix UI for the fancy bits.

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

## Env vars

Copy `.env.example` to `.env.local` if you need to tweak anything:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap |
| `NEXT_PUBLIC_BASE_PATH` | Subfolder deploy (GitHub Pages) |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Donation link on /support |

## Docs

[Architecture](docs/ARCHITECTURE.md) · [Data model](docs/DATA_MODEL.md) ·
[API](docs/API.md) · [Editorial policy](docs/EDITORIAL_POLICY.md) ·
[Testing](docs/TESTING_METHODOLOGY.md) · [Design](docs/DESIGN.md) ·
[Deployment](docs/DEPLOYMENT.md) · [Roadmap](docs/ROADMAP.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). There are issue templates for
proposing a port, reporting a test, fixing wrong data, or requesting a
takedown.

## Licenses

Code is MIT (`LICENSE`). Catalog data is CC BY 4.0 (`LICENSE-DATA`).

Not affiliated with any game company. Trademarks belong to their owners.
