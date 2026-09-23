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

| Variable                         | Purpose                                                                             | Default                 |
| -------------------------------- | ----------------------------------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL`           | Absolute origin used for canonical URLs, OG, sitemap and robots. No trailing slash. | `http://localhost:3000` |
| `NEXT_PUBLIC_BASE_PATH`          | Subfolder prefix, e.g. `/openportsgames` for GitHub Pages.                          | unset (domain root)     |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | Optional donation link on `/support`. Unset hides the button.                       | unset                   |

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

`next.config.ts` turns on `basePath` when the variable is set; links and
routes are prefixed automatically. URLs pointing into `public/` that are used
in raw `<img>` tags must be prefixed explicitly (see `assetPath()` in
`src/lib/utils.ts`).

## Security headers

The site ships a `public/_headers` file consumed by Cloudflare Pages; Vercel
supports the same directives per project. GitHub Pages does **not** serve
custom headers or HSTS, so use Cloudflare Pages or Vercel (ideally in front of
a custom domain) when you want the headers below enforced.

CSP is deliberately tight and matches the site's real origins: all assets are
same-origin, fonts are self-hosted through `next/font`, images may be remote
(`img-src https:`), and Next.js static exports require `'unsafe-inline'` for
its hydration bootstrap because no nonce can be applied at build time. There
are no third-party scripts, analytics or trackers.

| Host             | Headers as configured                | HSTS                                                                            |
| ---------------- | ------------------------------------ | ------------------------------------------------------------------------------- |
| Cloudflare Pages | via `public/_headers`                | enabled when proxied through a custom domain (Cloudflare adds it automatically) |
| Vercel           | via project headers/`headers` config | auto-enabled on custom domains                                                  |
| GitHub Pages     | none, `_headers` ignored             | not available (pages.github.io only)                                            |

If you move hosts, keep CSP building-block behavior in mind: `script-src 'self'
'unsafe-inline'` is required for the inline hydration bootstrap Next emits on
`next export`.

## Domain hardening checklist

Do this once for the production domain (whatever registrar/host you settle on):

- [ ] Registrar account protected with 2FA and a strong, unique password.
- [ ] Domain locked against transfer (registrar transfer lock) unless a transfer is actually in progress.
- [ ] WHOIS privacy/redaction enabled so the registrant details are not public.
- [ ] DNSSEC enabled where the registrar and authoritative DNS support it (and its DNSKEY rolled over; do **not** let the crypto key pair expire).
- [ ] CAA record restricting certificate issuance to the CA(s) actually used, e.g.:
  ```
  openportsgames.example. IN CAA 0 issue "letsencrypt.org"
  ```
- [ ] HSTS enforced at the host (Cloudflare Pages / Vercel) for a custom domain — see the table above.
- [ ] SPF/DMARC records set for any mail-sending subdomain if mail is used (this site sends none).
- [ ] Content Security Policy from the table above is served and retested after any host change.
- [ ] The CNAME target in DNS matches the exact Pages/Vercel endpoint (not a personal CNAME) so subdomains cannot be taken over.

## Security of the pipeline

- All checkout artifacts and dependencies are installed with `npm ci` (frozen
  lockfile) and audited in CI: `npm audit --audit-level=high` fails the build
  on any high or critical advisory.
- Every third-party GitHub Action is pinned to a full commit SHA with a comment
  naming its release (e.g. `# v5`), never to a moving tag.
- `catalog-update` uses the built-in `github.token` with the minimum job
  permissions (`issues: write`, `contents: write`) — no personal access token.

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
