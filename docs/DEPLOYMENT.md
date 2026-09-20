# Deployment

The project builds a fully static export. Any static host works; these are
the documented targets.

## Build once

```bash
npm ci          # or npm install (Linux: use --omit=optional if you hit glibc issues)
npm run validate
npm run typecheck
npm run lint
npm run test
npm run build   # writes the site to out/
npx playwright test  # optional smoke tests (see below)
```

## Environment variables

All are **build-time only** (next-inlined). Set them before `next build` in
the target platform's environment settings.

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute origin used for canonical URLs, OG, sitemap and robots. No trailing slash. | `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH` | Subfolder prefix, e.g. `/openportsgames` for GitHub Pages. | unset (domain root) |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Optional donation link on `/support`. Unset hides the button. | unset |

Example (production):

```
NEXT_PUBLIC_SITE_URL=https://openportsgames.example
NEXT_PUBLIC_SUPPORT_PAYPAL_URL=https://www.paypal.com/paypalme/openportsgames
```

## Cloudflare Pages

1. Connect the repository; build command `npm run build && npm run validate`.
2. Output directory: `out`.
3. Set the env vars above in **Preview/Production** settings.
4. Assign `*.example.com` or a custom domain in the Pages project.

## Vercel

Works automatically for Next.js. Set the env vars in the project’s
**Environment Variables**; the static export is emitted to `out`, and the
platform serves it with caching. Configure the domain under **Settings →
Domains**.

## GitHub Pages

GitHub Pages cannot run a build server, so the export is committed to a
branch (commonly `gh-pages`) or pushed with a workflow using `actions/upload-pages-artifact` (build command `npm ci && npm run build && npm run validate`, upload `out/`).

Serving from a subfolder requires the base path:

```
NEXT_PUBLIC_SITE_URL=https://<user>.github.io/openportsgames
NEXT_PUBLIC_BASE_PATH=/openportsgames
```

`next.config.ts` turns on `basePath` when the variable is set; all links,
assets and routes are prefixed automatically.

## Local preview of the export

```bash
node scripts/serve-static.mjs   # serves ./out on http://localhost:4173
```

## Smoke tests (optional)

Playwright runs against the static export (see `playwright.config.ts`). Since
Playwright’s chromium may not be installed, specify a channel locally:

```bash
PLAYWRIGHT_CHANNEL=msedge npx playwright test
```

These specs are not part of CI; CI runs validate, typecheck, lint, unit and
build.