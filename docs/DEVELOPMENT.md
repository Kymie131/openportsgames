# Development

Static export: no server, no database, no accounts. Next.js compiles the
catalog to plain HTML/CSS/JS plus `/api/ports.json`.

## Layout

```
src/
  app/          Routes, API route, sitemap, robots
  components/   UI (catalog, ports, emulators, header/footer, theme, i18n)
  content/      Catalog as code: ports/*.ts, hardware, tests, meta
  lib/ports/    zod schemas, registry, queries, API builder
  lib/i18n/     Dictionaries and the client-side locale store
tests/
  unit/         Vitest: utilities and data-layer behavior
  content/      Vitest: catalog data invariants
  e2e/          Playwright smoke tests over the export
docs/           Development, design, policy, methodology
scripts/        Release checker, static preview
```

## Data flow

1. `src/content/ports/*.ts` holds one typed object per port, plus
   `src/content/hardware`, `src/content/tests` and `src/content/ports/meta.ts`.
2. `src/lib/ports/schema.ts` defines the zod schemas. `portSchema` excludes
   `takedown` entries from the public catalog.
3. `src/lib/ports/index.ts` validates everything and exposes the registry and
   query helpers (`getPort`, `getPorts`, `getTestsForPort`, `getTestStatuses`,
   `originalSystemOf`, ...).
4. Server components read from the registry and pass validated objects to
   client components. No component reads a content file directly.

## Port schema

`src/lib/ports/schema.ts` is the reference. Fields: `id`, `kind`, `title`, `game`,
`developers`, `publisher`, `originalYear`, `genre`, `openSource`,
`originalGameLicense`, `portType`, `platforms`, `status`, `release`, `sources`,
`website`, `docs`, `discord`, `license`, `verified`, `verifiedAt`, `wip`, `notes`,
`notesEs`, `originalSystem`, `features`, `featuresEs`, `requirements`,
`screenshots`, `cover`, `installGuide`.

- `kind`: `game` (default), `system` or `tool`. Only `game` entries appear in the
  catalog listings (`/ports`, `/pc`, `/android`, `/console`), the counters, the
  home "Latest releases"/"Featured" and the paginated listings; `system`/`tool`
  entries keep their page under `/ports/<slug>/` (indexable, searchable) and are
  listed under `/tools`. See `getGamePorts()` / `getToolPorts()`. `/tools` also
  renders a categorized list of popular desktop programs from
  `src/content/programs.ts` (GIMP, LibreOffice, the ArtCraft suite, …), each
  linking to its official site.
- `wip: true` marks a project that is still being decompiled/built and has no
  playable release (`release.version` is null). The card and ficha show an "In
  development" badge and a notice, so visitors do not expect a download.
- `genre`: `platformer`, `action-adventure`, `rpg`, `racing`, `strategy`,
  `shooter`, `fighting`, `sports`, `simulation`, `open-world`, `puzzle`, `music`.
- `portType`: `decompilation`, `recompilation`, `reimplementation`,
  `source-port`, `runtime-port`.
- `platforms`: `windows`, `linux`, `macos`, `android`, `web`, `ios`.
- `status`: `stable`, `beta`, `alpha`, or `takedown`.
- `notesEs` is required when `notes` exists. `installGuide.stepsEs` must match
  `steps` in length. Both are enforced by `tests/content/`.

Takedown entries keep only `id`, `title` and `rawUrl`; they are validated but
excluded from `ports`, the site and the sitemap.

Hardware profiles (`src/content/hardware`) are public: id, label, kind
(`pc`/`android`), specs, tester and date. Test records reference a known port
and a known profile whose `tester` matches the record's `testerId`.

## Invariants (tests/content)

- Unique kebab ids; every port declares a `genre` and `openSource`.
- `verified: true` ⇒ `release.version` and `verifiedAt` present; `version: null`
  ⇒ `verified: false`.
- Dates never come from the future.
- Every port id has an entry in `originalSystemById`.
- `installGuide.stepsEs` length equals `steps`.

## API: `/api/ports.json`

A static, versioned snapshot emitted at build time
(`src/app/api/ports.json/route.ts` via `src/lib/ports/api-json.ts`). Shape:
`schema`, `version`, `generatedAt`, `site`, `ports[]`, `hardware[]`, `tests[]`.
`ports` excludes `takedown` and includes every `kind` (each port carries its
`kind` field). `sources`/`website`/`docs`/`discord` are always `https:`. The
authoritative zod schema is `catalogApiSchema` in `src/lib/ports/api-json.ts`.

## SEO and listings

- Catalog listings (`/ports`, `/pc`, `/android`) are **server-rendered**: the
  H1, the intro and the first 48 ports are real links in the static HTML. They
  paginate at `/…/page/N/` (`generateStaticParams`, page 1 is the base path),
  with real Previous/Next/number links, one canonical per page, reciprocal
  `hreflang` and a sitemap entry.
- Filters, search and `?sort` are progressive enhancement: the query is read
  after mount (`window.location.search`), never during render, so the subtree
  does not bail out to client-only rendering. The query never enters the
  canonical.
- `/console` lists each console and its ports as real links; `/emulators` lists
  each generation as a real link.
- Ficha meta description comes from `portDescription()` (`lib/ports/description.ts`):
  the localized body text, a localized template fallback, padded to 70–155 chars.
  `portShareImage()` (`lib/ports/share.ts`) uses the cover as `og:image` /
  `twitter:image` when present.

## Build and deploy

```bash
npm ci
npm run validate
npm run typecheck
npm run lint
npm test
npm run build        # static export to out/
```

Build-time env vars:

| Variable                         | Purpose                                         | Default                 |
| -------------------------------- | ----------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Canonical URLs, OG, sitemap (no trailing slash) | `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH`          | Subfolder prefix (subfolder hosting only)       | unset                   |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Donation link on /support                       | unset                   |

## Deploy (Cloudflare Pages)

The site is served from the domain root on Cloudflare Pages. The project is
connected to Pages with Git integration: every push to `main` triggers a build.

- Build command: `npm run build`
- Build output directory: `out`
- Environment variables (Production and Preview):
  - `NODE_VERSION` = `22`
  - `NEXT_PUBLIC_SITE_URL` = `https://openportsgames.com`
  - `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` = the PayPal hosted button URL
  - Leave `NEXT_PUBLIC_BASE_PATH` **unset** (root deployment)

`public/_headers` applies security headers on Cloudflare Pages. Plain file
servers and GitHub Pages ignore custom headers.

Local preview and audit:

```bash
node scripts/serve-static.mjs   # serves ./out on :4173
```

Smoke tests (not in CI): `PLAYWRIGHT_CHANNEL=msedge npx playwright test`.

## Catalog imports

Most of the catalog was imported from community indexes rather than written
entry by entry:

- GameWave (`https://gamewave.digital/ports/catalog.json`, 704 apps): console
  and Android ports.
- PortsDR (`https://portsdr.com/`): console ports without a public repository.

The imports were generated with throwaway Node scripts (`gen-*.cjs`) that wrote
one `src/content/ports/<id>.ts` per entry and wired `index.ts` and `meta.ts`.
Those scripts are not versioned in this repository.

Entries imported this way are `sourceVerified: false` (the schema default): the
team has not checked them against the project's own README or repository.
Entries checked by hand carry `sourceVerified: true`.

## What "verified" means

`sourceVerified: true` means the team checked the entry against the project's
own README or repository (name, platforms, license, status). It is not the same
as `verified: true`, which only means a published release and its date could be
pointed at. Entries imported from indexes default to `sourceVerified: false`.
