# OpenPortsGames

**Site: <https://openportsgames.com/>**

Catalog of native game ports: decompilations, recompilations and
reimplementations, for PC and Android. Every entry links to the project's
official source.

The site hosts no downloadable files and links to none. It is a static Next.js
export plus a small Cloudflare Workers backend (`api/`) that powers optional
sign-in, ratings and comments.

- EN/ES, dark and light themes.
- Listings are server-rendered (crawlable) and paginate with real URLs; a
  **System & tools** section catalogues non-game entries.
- Translations were assisted by an LLM.

## Tech

Next.js 16 (App Router, TypeScript) + Tailwind CSS v4, static export. Client-side
i18n, zod schemas, MiniSearch, Radix UI. Tests with Vitest, smoke tests with
Playwright.

The optional community backend lives in `api/`: Hono on Cloudflare Workers,
Cloudflare D1 (SQLite) through Drizzle ORM, and Better Auth for Google, Discord
and GitHub OAuth (no passwords). Every write endpoint validates with zod and is
rate limited. See [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Quick start

```bash
npm install
npm run dev        # site at http://localhost:3000
```

The backend is optional: without it, the site builds and runs, but sign-in,
ratings and comments stay disabled.

```bash
cd api
npm install
cp .dev.vars.example .dev.vars   # fill in BETTER_AUTH_* and OAuth secrets
npm run db:local                 # apply D1 migrations to the local database
npm run dev                      # Worker at http://localhost:8787
```

Point the site at the Worker with `NEXT_PUBLIC_API_URL=http://localhost:8787`
(see [`.env.example`](.env.example)). The origin must also be listed under
`connect-src` in `public/_headers`.

| Command                      | What it does                    |
| ---------------------------- | ------------------------------- |
| `npm run dev`                | Dev server                      |
| `npm run build`              | Static export into `out/`       |
| `npm run lint` / `typecheck` | ESLint / tsc                    |
| `npm test`                   | All tests                       |
| `npm run validate`           | Catalog data validation only    |
| `npx playwright test`        | Smoke tests (build first)       |
| `cd api && npm run dev`      | Worker dev server (`:8787`)     |
| `cd api && npm test`         | Backend tests                   |
| `cd api && npm run gen:ids`  | Regenerate port ids (see below) |

## Layout

```
src/
  app/          Routes, API, sitemap
  components/   UI components
  content/      Catalog data (ports, hardware, tests)
  lib/          Data layer, i18n, helpers
api/            Cloudflare Worker backend (Hono, D1, Drizzle, Better Auth)
tests/
  unit/         Vitest unit tests
  content/      Data validation tests
  e2e/          Playwright smoke tests
docs/           Development, policy, design, etc.
scripts/        Release checker, preview server
```

### Backend port ids

The Worker only accepts ratings and comments for known catalog ids. After any
change to `src/content/ports/`, rebuild and regenerate the id list:

```bash
npm run build            # emits out/api/ports.json
cd api && npm run gen:ids  # rewrites api/src/port-ids.json
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issue templates exist for proposing a
port, reporting a test, fixing data, or requesting a takedown.

## Licenses

Code is MIT (`LICENSE`). Catalog data is CC BY 4.0 (`LICENSE-DATA`).

Not affiliated with any game company. Trademarks belong to their owners.
