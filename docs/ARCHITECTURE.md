# Architecture

Static export: no server, no build-time backend, no accounts, no database.
Next.js compiles the catalog to plain HTML, CSS and JS, plus a copy of
`/api/ports.json`.

## Where things live

```
src/
  app/                Routes. Server components that read validated data.
  components/         Client UI (catalog, ports, docs, header/footer, theme, i18n).
  content/            The catalog as code: ports/*.ts, hardware, tests, meta.
  lib/
    ports/            Data layer: schemas (zod), registry, queries, API builder.
    i18n/             Dictionaries and the client-side locale store.
    site.ts           Site name, description, URL helpers.
    seo.ts            Per-page metadata helper.
    dates.ts          Date utilities.
scripts/              check-latest-releases (catalog freshness), serve-static.
tests/
  unit/               Vitest - pure utilities and data-layer behavior.
  content/            Vitest - validates the catalog data invariants.
  e2e/                Playwright smoke tests over the static export.
docs/                 Design, data model, policy, methodology, deployment.
```

## How the data flows

1. `src/content/ports/*.ts`: one typed object per port, plus
   `src/content/hardware`, `src/content/tests` and `src/content/ports/meta.ts`.
2. `src/lib/ports/schema.ts`: zod schemas. `portSchema` excludes `takedown`
   entries from the public catalog; a removal record is kept but never renders.
3. `src/lib/ports/index.ts`: parses and validates everything, and exposes the
   registry plus query helpers (`getPort`, `getPorts`, `getTestsForPort`,
   `getTestStatuses`, `originalSystemOf`, ...).
4. Server components read only from that registry and pass validated objects to
   client components. No component reads a content file directly.

Keeping `content/` separate from the UI means the data source can be swapped
later without touching components.

## Rendering model

- Every route is static (`output: "export"`). Port detail pages are generated at
  build time from the registry via `generateStaticParams`.
- i18n is client-side: `LocaleScript` bakes a safe default, `LocaleProvider`
  swaps dictionaries, and every locale read goes through `useSyncExternalStore`.
- Theme: `ThemeScript` sets a class on `<html>`.

## SEO

- `src/lib/seo.ts` (`pageMeta`) produces per-page title, description, canonical,
  Open Graph and Twitter card.
- `sitemap.xml` covers every route and every port; `robots.txt`; a static
  `public/opengraph-image.png`; JSON-LD (`WebSite` on the home page,
  `VideoGame` on each port detail page).
- `NEXT_PUBLIC_SITE_URL` feeds every canonical URL. Without it, the localhost
  fallback is used.
