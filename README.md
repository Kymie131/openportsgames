# OpenPortsGames

A curated, non-profit library of native game ports: decompilations, static
recompilations and engine reimplementations for PC and Android. Each entry
points to the official source of the project: repository, releases, Discord
or the authors' website. Nothing is hosted or linked as a downloadable file.

Built as a fully static site. No accounts, comments or database in this stage.

## Principio / Scope

In English: this site catalogs native ports and does not distribute any
copyrighted content. It has no affiliation with any game company. Game names
are used only to identify the projects. See `LEGAL` pages and
`docs/EDITORIAL_POLICY.md` for the full policy.

## Tech stack

- Next.js (App Router) with TypeScript in strict mode
- Tailwind CSS v4
- Fully static export (`output: "export"`), deployable on any static host
- zod for content schemas, MiniSearch for client-side search
- next-intl for English/Spanish localization
- ESLint, Prettier, Vitest, Playwright

## Requirements

- Node.js LTS (>= 22)
- npm

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the dev server                     |
| `npm run build`     | Static export to `out/`                  |
| `npm run lint`      | Run ESLint                               |
| `npm run typecheck` | Type-check with `tsc --noEmit`           |
| `npm run test`      | Run unit tests (Vitest)                  |
| `npm run validate`  | Validate catalog, hardware and test data |
| `npm run test:e2e`  | Run Playwright smoke tests               |

## Project structure

```
content/            Catalog data (ports, hardware, tests)
docs/               Architecture, data model, editorial policy, deployment
src/
  app/              App Router pages and routes
  components/       UI components
  lib/              Data layer and utilities
tests/
  unit/             Unit tests
  content/          Data validation tests
  e2e/              Playwright smoke tests
```

The catalog data lives in `content/` as JSON files validated with zod. All
data access goes through a single layer (`src/lib/ports`) so the JSON source
can later be replaced by a database without touching components.

## Localization

English is the default. The interface and guides are also available in
Spanish, with browser language detection and a manual EN/ES switcher.

## Environment variables

Copy `.env.example` to `.env.local` and adjust. `NEXT_PUBLIC_SITE_URL` is
required for metadata and `sitemap.xml`. `PAYPAL_DONATION_URL` enables the
optional /support page link.

## Deployment

Supported targets: Cloudflare Pages, Vercel, GitHub Pages. Instructions in
`docs/DEPLOYMENT.md`.

## Contributing

See `CONTRIBUTING.md`. Issue templates cover proposing a port, adding a test,
reporting a broken link and requesting a takedown.

## Licenses

- Code: MIT License (`LICENSE`)
- Catalog data: CC BY 4.0 (`LICENSE-DATA`)

Not affiliated with any video game company. Game trademarks belong to their
respective owners and are used solely to identify the projects.
