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

`src/lib/ports/schema.ts` is the reference. Fields: `id`, `title`, `game`,
`developers`, `publisher`, `originalYear`, `genre`, `openSource`,
`originalGameLicense`, `portType`, `platforms`, `status`, `release`, `sources`,
`website`, `docs`, `discord`, `license`, `verified`, `verifiedAt`, `notes`,
`notesEs`, `originalSystem`, `features`, `featuresEs`, `requirements`,
`screenshots`, `cover`, `installGuide`.

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
`ports` excludes `takedown`. `sources`/`website`/`docs`/`discord` are always
`https:`. The authoritative zod schema is `catalogApiSchema` in
`src/lib/ports/api-json.ts`.

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
| `NEXT_PUBLIC_BASE_PATH`          | Subfolder prefix for GitHub Pages               | unset                   |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Donation link on /support                       | unset                   |

Static export works on any host. GitHub Pages builds via
`.github/workflows/pages.yml`. `public/_headers` applies security headers on
Cloudflare Pages and Vercel; GitHub Pages ignores custom headers.

Local preview and audit:

```bash
node scripts/serve-static.mjs   # serves ./out on :4173
```

Smoke tests (not in CI): `PLAYWRIGHT_CHANNEL=msedge npx playwright test`.
