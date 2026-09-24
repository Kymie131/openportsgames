# OpenPortsGames

**Site: <https://kymie131.github.io/openportsgames/>**

A curated, non-profit catalog of **native game ports** — decompilations,
recompilations and engine reimplementations that bring classic games to PC
and Android. Every entry points to the project's official source:
repository, releases, website or documentation. **Nothing is hosted or linked
as a downloadable file** — ever.

Why does that rule exist? Because a lot of us learned, the slow way, that an
"ISO pack" link in a forum is how you get malware, and that a link to an
unofficial mirror dies the moment someone edits a file. The only link that
outlives the week is the project's own. That's the whole editorial stance.

Why does the catalog exist at all? Because Super Mario Bros. 3 was the game
that made me realize the cartridge in my hands was software — and that someone
could take that software apart, understand it, and rebuild it to run
anywhere I actually owned. Every entry here is a small win for that idea:
games that refused to die on the hardware they were born on.

Fully static site: no accounts, no comments, no database, no trackers. A
folder of files. It cannot be switched off.

- EN/ES interface · dark & light themes · WCAG-minded
- [Roadmap](docs/ROADMAP.md) · [Design](docs/DESIGN.md)

## Tech stack

- **Next.js 16** (App Router, TypeScript strict), **Tailwind CSS v4**
- Fully static export (`output: "export"`), deployable on any static host
- Custom client-side EN/ES i18n (no next-intl), `zod` for data schemas,
  MiniSearch for client-side search, Radix UI primitives
- Vitest (unit + content validation), Playwright (smoke E2E), ESLint/Prettier

## Requirements

- **Node.js ≥ 22** and npm

## Quick start (under 5 minutes)

```bash
npm install        # Linux: npm install --omit=optional if glibc complains
npm run dev        # http://localhost:3000
```

Useful commands:

| Script                       | What it does                               |
| ---------------------------- | ------------------------------------------ |
| `npm run dev`                | Dev server on `http://localhost:3000`      |
| `npm run build`              | Static export into `out/`                  |
| `npm run lint` / `typecheck` | ESLint / `tsc --noEmit`                    |
| `npm test`                   | All Vitest tests (unit + content)          |
| `npm run validate`           | Catalog/hardware/test data validation only |
| `npm run check:updates`      | Report outdated versions (maintainers)     |
| `npx playwright test`        | Smoke tests over the export (see below)    |

### Smoke tests

```bash
npm run build
PLAYWRIGHT_CHANNEL=msedge npx playwright test   # replace msedge with your browser channel
```

## Repository layout

```
src/
  app/          Routes (server), incl. /api/ports.json and sitemap/robots
  components/   Client UI (catalog, port detail, docs, header/footer, i18n, theme)
  content/      Catalog data: ports/*.ts, hardware, tests, meta
  lib/          Data layer (ports), i18n dictionaries, site/seo/date helpers
tests/
  unit/         Vitest — utilities and data layer
  content/      Vitest — data invariants enforced in CI
  e2e/          Playwright smoke tests
docs/           Architecture, data model, API, editorial policy, testing,
                design, deployment, roadmap, pending verification
scripts/        Latest-release checker, static-preview server
```

## Environment variables

Copy `.env.example` to `.env.local` (optional) and adjust:

| Variable                         | Purpose                                             |
| -------------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Canonicals, OG, sitemap, robots (no trailing slash) |
| `NEXT_PUBLIC_BASE_PATH`          | Subfolder deploy prefix (GitHub Pages)              |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Optional donation link on `/support`                |

## Documentation

- [Architecture](docs/ARCHITECTURE.md) · [Data model](docs/DATA_MODEL.md) · [API](docs/API.md)
- [Editorial policy](docs/EDITORIAL_POLICY.md) · [Testing methodology](docs/TESTING_METHODOLOGY.md)
- [Design](docs/DESIGN.md) · [Deployment](docs/DEPLOYMENT.md) · [Roadmap](docs/ROADMAP.md)
- [Pending verification](docs/PENDING_VERIFICATION.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issue templates cover proposing a
port, reporting a test, reporting wrong data and requesting a takedown
(the **Submit** page links to them).

## Licenses

- Code: MIT — see `LICENSE`
- Catalog data: CC BY 4.0 — see `LICENSE-DATA`

Not affiliated with any video game company. Game trademarks belong to their
owners and are used only to identify the projects.
