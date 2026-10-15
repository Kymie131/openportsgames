# Sitemap strategy: single file vs sitemap index

Type: **evaluation (decision doc). No code changes in this commit.**
Question: should `/sitemap.xml` be split into `sitemap-pages.xml`,
`sitemap-ports-en.xml` and `sitemap-ports-es.xml` behind a sitemap index?

## Current state (measured from `npm run build`)

| Metric | Value |
| ------ | ----- |
| Sitemap file | single `/sitemap.xml` (`app/sitemap.ts`) |
| `<loc>` entries | **2,392** (12 static pages + 1,184 ports, × 2 locales) |
| File size | **≈ 942 KB** (localhost URLs, uncompressed) |

Search-engine limits per sitemap file: **50,000 URLs** and **50 MB
uncompressed**. A sitemap index only raises the URL ceiling (50,000 files ×
50,000 URLs); it does not change anything else.

## Options

| Option | URLs per file | Naming | Notes |
| ------ | ------------- | ------ | ----- |
| **A. Single sitemap (current)** | 2,392 | `/sitemap.xml` | Far below limits. Simplest; already consumed by `robots.ts`, `scripts/site-audit.mjs` and Search Console. |
| **B. `generateSitemaps` with 3 ids** | pages / ports-en / ports-es | `/sitemap/pages.xml`, `/sitemap/ports-en.xml`, `/sitemap/ports-es.xml` | Idiomatic Next.js; but the files live under `/sitemap/…`, **not** root-level `sitemap-pages.xml`, and Next emits **no index** — one still has to be authored at `/sitemap.xml`. |
| **C. Custom route handlers + index** | pages / ports-en / ports-es | exact `sitemap-pages.xml`, … | Only way to match the requested names. Requires hand-writing the `<urlset>` and `<sitemapindex>` XML (escaping, `xmlns:xhtml`), and replacing `app/sitemap.ts`. |

## Impact of splitting

- `robots.ts` points crawlers at `/sitemap.xml`; with B or C that URL becomes a
  **sitemap index**, not a `urlset`.
- `scripts/site-audit.mjs` reads `<loc>` from `/sitemap.xml` and then fetches
  each one as an HTML page. A sitemap index would feed it `<sitemap><loc>`
  entries and break the audit — it must be updated to recurse into the index.
- The three files would still each need the full `en/es/x-default` alternates on
  every `<url>` (the en file links to the es file's URLs and vice versa).
- Search Console would show **separate** coverage reports per file — the only
  real benefit.

## Recommendation

**Keep the single sitemap (Option A) for now.** At 2,392 URLs (≈ 5 % of the
50,000 limit) there is no technical or crawl-budget reason to split, and
splitting adds a moving part (index generation) plus audit/tooling changes for a
reporting-only benefit.

Revisit when either is true:

1. the catalog grows past ~20,000 ports (≈ 40,000 URLs), or
2. Search Console section-level reporting becomes a requirement.

If/when that happens, use **Option C** (custom route handlers) to keep the exact
`sitemap-pages.xml` / `sitemap-ports-en.xml` / `sitemap-ports-es.xml` names and a
`<sitemapindex>` at `/sitemap.xml`, and update `robots.ts`, `site-audit.mjs` and
the sitemap tests in the same change. Option B is acceptable too, but the files
would be `/sitemap/pages.xml` rather than the requested root-level names.
