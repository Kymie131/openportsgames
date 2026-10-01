# Deployment

The project builds a fully static export to `out/`. Any static host works. The
following is the documented procedure to build and publish it without depending
on local trial and error.

## Build once

```bash
npm ci
npm run validate
npm run typecheck
npm run lint
npm run test
npm run build   # writes the site to out/
npx playwright test  # optional smoke tests
```

`validate` runs first because there is no point building a catalog that does not
pass its own data checks.

## Environment variables

All variables are **build-time only** (next-inlined). Set them before `next build`.

| Variable                         | Purpose                                                                             | Default                 |
| -------------------------------- | ----------------------------------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Absolute origin used for canonical URLs, OG, sitemap and robots. No trailing slash. | `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH`          | Subfolder prefix, e.g. `/openportsgames` for GitHub Pages.                          | unset (domain root)     |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Optional donation link on `/support`. Unset hides the button.                       | unset                   |

Example (production):

```bash
NEXT_PUBLIC_SITE_URL=https://openportsgames.example
NEXT_PUBLIC_SUPPORT_PAYPAL_URL=https://www.paypal.com/paypalme/openportsgames
```

## Cloudflare Pages

1. Connect the repository; build command: `npm run build && npm run validate`.
2. Output directory: `out`.
3. Set the environment variables above for Preview and Production.
4. Assign a custom domain in the Pages project.

## Vercel

Set the environment variables in the project. The static export is emitted to
`out/` and the platform serves it. Configure the domain under Settings → Domains.

## GitHub Pages

GitHub Pages cannot run a build server, so the export is built by
`.github/workflows/pages.yml` and uploaded with `actions/upload-pages-artifact`
(build: `npm ci && npm run build && npm run validate`, upload: `out/`).

Serving from a subfolder requires the base path:

```bash
NEXT_PUBLIC_SITE_URL=https://<user>.github.io/openportsgames
NEXT_PUBLIC_BASE_PATH=/openportsgames
```

`next.config.ts` enables `basePath` when this variable is set. Links and routes
are prefixed automatically. URLs pointing into `public/` that are used in raw
`<img>` tags must be prefixed explicitly (see `assetPath()` in
`src/lib/utils.ts`).

## Security headers

`public/_headers` is consumed by Cloudflare Pages. Vercel supports the same
directives per project. GitHub Pages does **not** serve custom headers or HSTS,
so use Cloudflare Pages or Vercel (ideally in front of a custom domain) when
those headers must be enforced.

CSP is deliberately tight: all assets are same-origin, fonts are self-hosted
through `next/font`, images may be remote (`img-src https:`), and Next.js static
exports require `'unsafe-inline'` for its hydration bootstrap because no nonce
can be applied at build time. There are no third-party scripts, analytics or
trackers.

| Host             | Headers as configured                | HSTS                                                                            |
| ---------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| Cloudflare Pages | via `public/_headers`                | enabled when proxied through a custom domain (Cloudflare adds it automatically) |
| Vercel           | via project headers/`headers` config | auto-enabled on custom domains                                                  |
| GitHub Pages     | none, `_headers` ignored             | not available (pages.github.io only)                                            |

If you move hosts, note that `script-src 'self' 'unsafe-inline'` is required for
the inline hydration bootstrap Next emits on a static export.

## Domain hardening checklist

For the production domain:

- [ ] Registrar account protected with 2FA and a strong, unique password.
- [ ] Domain locked against transfer unless a transfer is in progress.
- [ ] WHOIS privacy/redaction enabled.
- [ ] DNSSEC enabled where registrar and authoritative DNS support it (and its
      DNSKEY rolled over; do not let the key pair expire).
- [ ] CAA record restricting certificate issuance to the CAs actually used, e.g.
      `openportsgames.example. IN CAA 0 issue "letsencrypt.org"`.
- [ ] HSTS enforced at the host for a custom domain (see table above).
- [ ] SPF/DMARC records set for any mail-sending subdomain if mail is used
      (this site sends none).
- [ ] CSP from the table above is served and retested after any host change.
- [ ] The CNAME target in DNS matches the exact Pages/Vercel endpoint (not a
      personal CNAME) so subdomains cannot be taken over.

## Security of the pipeline

- All checkout artifacts and dependencies are installed with `npm ci` (frozen
  lockfile) and audited in CI: `npm audit --audit-level=high` fails the build
  on any high or critical advisory.
- Every third-party GitHub Action is pinned to a full commit SHA with a comment
  naming its release (never a moving tag).
- `catalog-update` uses the built-in `github.token` with the minimum job
  permissions (`issues: write`, `contents: write`), not a personal access
  token.

## Local preview of the export

```bash
node scripts/serve-static.mjs   # serves ./out on http://localhost:4173
```

## Local audit (GitHub Pages-like)

To mimic the subfolder environment GitHub Pages uses:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:4174/openportsgames \
NEXT_PUBLIC_BASE_PATH=/openportsgames \
npm run build

npm run serve:pages   # serves ./out like GitHub Pages on http://localhost:4174/openportsgames
                      # (subfolder prefix, directory redirects, 404.html)

npm run audit:site -- http://localhost:4174/openportsgames/
```

`audit:site` runs `scripts/site-audit.mjs` and crawls the sitemap, reporting
`FAIL`/`WARN`/`INFO` lines for HTTP status and content types, social preview
images, sitemap trailing slashes, meta description length, exactly one `<h1>`
per page, content with JavaScript disabled, and stable ports that ship no
versioned release. The exit code is non-zero if anything `FAIL`s.

`scripts/serve-pages-like.mjs` reads `PORT` and `NEXT_PUBLIC_BASE_PATH` (default
`4174` and `/openportsgames`); set `NEXT_PUBLIC_BASE_PATH=/` to serve at the
domain root instead.

## Smoke tests (optional)

Playwright runs against the static export (`playwright.config.ts`). If the
Chromium binary is not installed locally, specify a channel, e.g.:

```bash
PLAYWRIGHT_CHANNEL=msedge npx playwright test
```

These specs are not part of CI; CI runs validate, typecheck, lint, unit tests
and build.
