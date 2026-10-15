# Deployment

The site is a fully static Next.js export (`output: "export"`) served from the
domain root on **Cloudflare Pages**. `npm run build` writes `out/`.

## Build settings (Cloudflare Pages)

| Setting            | Value                          |
| ------------------ | ------------------------------ |
| Build command      | `npm run build`                |
| Build output       | `out`                          |
| Root directory     | _(empty)_                      |
| `NODE_VERSION`     | `22`                           |
| `NEXT_PUBLIC_SITE_URL` | `https://openportsgames.com` |
| `NEXT_PUBLIC_SUPPORT_PAYPAL_URL` | PayPal hosted button URL |
| `NEXT_PUBLIC_BASE_PATH` | **unset** (domain root)     |

`public/_headers` applies the security headers.

## Internationalized URLs

Routes live under `app/[lang]` and are generated for `en` and `es`:

- `/en/…` and `/es/…` for every page, including `/en/ports/<slug>/`.
- `/` is a static language chooser (visible links plus a `navigator.language`
  redirect); it canonicalizes to `/en/` and is not listed in the sitemap.
- `/api/ports.json`, `/sitemap.xml`, `/robots.txt` stay at the root and are
  language-neutral.
- Every page sets a self-referential `canonical` and reciprocal
  `hreflang` (`en`, `es`, `x-default -> /en/`). `x-default` always points to the
  **English** URL of the same page — a crawlable page listed in the sitemap — so
  the alternates never cross hreflang clusters. The sitemap lists both locales
  and repeats the same three alternates on every `<url>`.

## Legacy URLs (301)

The pre-i18n site served English (and the same pages) at the root:
`/ports/`, `/pc/`, `/ports/<slug>/`, … Those paths no longer exist, so they must
**301 to the `/en/…` equivalent** to keep the accumulated SEO. Redirects live in
Cloudflare (a static export cannot emit them).

### Plan A — one wildcard Redirect Rule per section (recommended)

Create **Rules → Redirect Rules** and add one **Single Redirect** per section.
Set *Status* to `301` and the *destination* to a **Dynamic** expression:

| Match (Wildcard)                     | Dynamic destination                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------- |
| `openportsgames.com/ports/*`         | `wildcard_replace(http.request.uri, "openportsgames.com/ports/*", "https://openportsgames.com/en/ports/${1}")` |
| `openportsgames.com/pc/*`            | `wildcard_replace(http.request.uri, "openportsgames.com/pc/*", "https://openportsgames.com/en/pc/${1}")` |
| `openportsgames.com/android/*`       | `wildcard_replace(http.request.uri, "openportsgames.com/android/*", "https://openportsgames.com/en/android/${1}")` |
| `openportsgames.com/console/*`       | `wildcard_replace(http.request.uri, "openportsgames.com/console/*", "https://openportsgames.com/en/console/${1}")` |
| `openportsgames.com/emulators/*`     | `wildcard_replace(http.request.uri, "openportsgames.com/emulators/*", "https://openportsgames.com/en/emulators/${1}")` |
| `openportsgames.com/guides/*`        | `wildcard_replace(http.request.uri, "openportsgames.com/guides/*", "https://openportsgames.com/en/guides/${1}")` |
| `openportsgames.com/testing/*`       | `wildcard_replace(http.request.uri, "openportsgames.com/testing/*", "https://openportsgames.com/en/testing/${1}")` |
| `openportsgames.com/submit/*`        | `wildcard_replace(http.request.uri, "openportsgames.com/submit/*", "https://openportsgames.com/en/submit/${1}")` |
| `openportsgames.com/support/*`       | `wildcard_replace(http.request.uri, "openportsgames.com/support/*", "https://openportsgames.com/en/support/${1}")` |
| `openportsgames.com/about/*`         | `wildcard_replace(http.request.uri, "openportsgames.com/about/*", "https://openportsgames.com/en/about/${1}")` |
| `openportsgames.com/legal/*`         | `wildcard_replace(http.request.uri, "openportsgames.com/legal/*", "https://openportsgames.com/en/legal/${1}")` |

> The `*` also covers the trailing-slash root (`/ports/` → `/en/ports/`).
> For the rare slash-less form (`/ports`), add one extra rule per section:
> `openportsgames.com/ports` → `https://openportsgames.com/en/ports/`.

Do **not** redirect `/` (it is the language chooser). Leave `/api/*`,
`/sitemap.xml` and `/robots.txt` untouched. Rules are evaluated top-down, so
keep these redirects above any catch-all.

### Plan B — Bulk Redirects list (CSV)

`docs/redirects-301.csv` holds every mapping explicitly (1.197 rows: 11 sections
plus every port). Regenerate it after catalog changes:

```bash
node scripts/gen-redirects.mjs
```

Upload it under **Rules → Bulk Redirects** as a list with columns
`source_url,target_url,status`.

### Slug renames (301) — `docs/redirects-slugs.csv`

Slugs are built with `slugify()` in `src/lib/ports/slug.ts`, which decomposes
Unicode (NFD) and drops diacritics **before** collapsing to a kebab slug. Older
imports skipped that step, so accented letters became stray hyphens
(`Pokémon` → `pok-mon`, `Fūrai` → `f-rai`, `Ōkamiden` → `kamiden`). Those slugs
were regenerated; `docs/redirects-slugs.csv` maps every old URL to its new one
for the three source forms that can appear in the wild:

```
https://openportsgames.com/ports/<old>/      ->  .../en/ports/<new>/
https://openportsgames.com/en/ports/<old>/   ->  .../en/ports/<new>/
https://openportsgames.com/es/ports/<old>/   ->  .../es/ports/<new>/
```

(The legacy root form is included so it does not chain through
`/en/ports/<old>/`.) Regenerate it after editing the rename table:

```bash
node scripts/gen-slug-redirects.mjs
```

Upload it under **Rules → Bulk Redirects** with the same
`source_url,target_url,status` columns, above any catch-all.

## Cutover order (important)

A static export cannot redirect, and the redirect targets only exist after the
new build is live. To avoid a window where either the old URLs 404 or they
redirect into a 404:

1. **Preview first.** Deploy the `feature/i18n-urls` branch to a Cloudflare Pages
   *preview* deployment. Verify `/en/`, `/es/`, `/es/ports/<slug>/`, the language
   switcher (URL changes), reciprocal `hreflang` and the 404.
2. **Enable at the same time.** Promote the build to production **and** enable the
   redirect rules in the same change window. Do not enable the redirects before
   the new build is live, and do not leave them disabled after it is.
3. **Verify.** `curl -I https://openportsgames.com/ports/sm64ex/` must return
   `301` with `location: https://openportsgames.com/en/ports/sm64ex/`. Then submit
   the updated sitemap in Google Search Console / Bing.
