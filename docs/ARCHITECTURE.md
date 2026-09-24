# Architecture

I built this site to be a static export and nothing more. There is no server,
no database, no accounts, no build-time backend. Next.js compiles the catalog
once, out comes plain HTML, CSS and JS, and a copy of `/api/ports.json` — a
single JSON file that any script or tool can read.

That choice is not a technical fashion statement. It means the whole product
is a folder you can download, open without a browser, and that cannot die when
a service shuts down. A preservationist catalog should not depend on
infrastructure that can be turned off. The site has no moving parts,
which also keeps the attack surface pretty close to zero.

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
  unit/               Vitest — pure utilities and data-layer behavior.
  content/            Vitest — validates the catalog data invariants.
  e2e/                Playwright smoke tests over the static export.
docs/                 Design, data model, policy, methodology, deployment.
```

## How the data flows

1. `src/content/ports/*.ts` — one plain typed object per port, plus
   `src/content/hardware`, `src/content/tests` and `src/content/ports/meta.ts`.
2. `src/lib/ports/schema.ts` — zod schemas. The discriminated union in
   `portSchema` silently **excludes** `takedown` entries from the public
   catalog: a removal record is kept for honesty, but it never renders.
3. `src/lib/ports/index.ts` — parses everything, validates it, and exposes a
   single registry plus query helpers (`getPort`, `getPorts`,
   `getTestsForPort`, `getTestStatuses`, `originalSystemOf`, …).
4. Server components read only from that registry and pass serializable,
   already-validated objects down to client components. No component ever reads
   a content file directly.

The point of the wall between `content/` and the UI is simple: if one day the
catalog outgrows TypeScript files, I can swap the data source (a database, a
JSON dump, whatever) without touching a single component. The degree of
isolation is the insurance.

## Rendering model

- Every route is static (`output: "export"`). Port detail pages are generated
  at build time from the registry via `generateStaticParams`.
- The interface is localized client-side: `LocaleScript` bakes a safe default,
  `LocaleProvider` swaps dictionaries, and every locale read goes through
  `useSyncExternalStore` so the static HTML never mismatches hydration.
- The theme works the same way (`ThemeScript` sets a class on `<html>`).

## SEO

- `src/lib/seo.ts` (`pageMeta`) produces per-page title, description, canonical,
  Open Graph and Twitter card.
- `sitemap.xml` covers every route and every port; there is a `robots.txt`, a
  generated `opengraph-image`, and JSON-LD (`WebSite` on the home page,
  `VideoGame` on each port detail page).
- `NEXT_PUBLIC_SITE_URL` feeds every canonical URL. Without it, the localhost
  fallback is used — which is exactly what should happen when someone forks the
  repo to poke around.

## Why static, spelled out

- The catalog is versioned in the repository itself. Every change, correction
  or removal is a public commit, which is the whole editorial stance of the
  project.
- No infrastructure means no surprise bills, no credentials, no maintenance
  tax on a hobby project.
- The data layer is isolated so the catalog could move anywhere later without
  touching the UI. That is the one decision I treat as an investment.
