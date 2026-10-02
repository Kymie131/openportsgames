# Deployment

The project builds a static export to `out/`. Any static host works. Here's
how to build and publish it.

## Build

```bash
npm ci
npm run validate
npm run typecheck
npm run lint
npm run test
npm run build   # writes to out/
npx playwright test  # optional smoke tests
```

Run `validate` first — no point building a catalog that fails its own checks.

## Env vars

All build-time only. Set before `next build`.

| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, OG, sitemap. No trailing slash. | `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH` | Subfolder prefix for GitHub Pages | unset |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Donation link on /support | unset |

## Cloudflare Pages

Connect the repo, build command `npm run build && npm run validate`, output
directory `out`. Set env vars for Preview and Production. Assign a custom
domain.

## Vercel

Set env vars in the project settings. Static export goes to `out/`. Configure
the domain under Settings → Domains.

## GitHub Pages

Pages can't run a build server, so `.github/workflows/pages.yml` builds and
uploads. For subfolder deploys:

```bash
NEXT_PUBLIC_SITE_URL=https://<user>.github.io/openportsgames
NEXT_PUBLIC_BASE_PATH=/openportsgames
```

## Security headers

`public/_headers` works on Cloudflare Pages. Vercel supports the same via
project config. GitHub Pages ignores custom headers — use Cloudflare or
Vercel in front of a custom domain if you need them.

CSP is tight: same-origin assets, self-hosted fonts, no third-party scripts
or analytics. `'unsafe-inline'` is required for Next.js hydration bootstrap
on static exports (no nonce at build time).

## Domain hardening

- Registrar account with 2FA
- Domain locked against transfer
- WHOIS privacy enabled
- DNSSEC where supported
- CAA record limiting certificate issuance
- HSTS enforced at the host
- CNAME target matches the exact Pages/Vercel endpoint

## Pipeline security

- `npm ci` (frozen lockfile) + `npm audit --audit-level=high` in CI
- Third-party GitHub Actions pinned to commit SHAs, not tags
- `catalog-update` uses the built-in `github.token` with minimal permissions

## Local preview

```bash
node scripts/serve-static.mjs   # serves ./out on http://localhost:4173
```

## Local audit (GitHub Pages-like)

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:4174/openportsgames \
NEXT_PUBLIC_BASE_PATH=/openportsgames \
npm run build
npm run serve:pages
npm run audit:site -- http://localhost:4174/openportsgames/
```

`audit:site` crawls the sitemap and reports FAIL/WARN/INFO for HTTP status,
social preview images, meta descriptions, `<h1>` count, and more.

## Smoke tests

```bash
PLAYWRIGHT_CHANNEL=msedge npx playwright test
```

Not part of CI — CI runs validate, typecheck, lint, unit tests and build.
