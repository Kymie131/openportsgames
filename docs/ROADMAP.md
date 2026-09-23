# Roadmap

Each phase shipped as a stacked pull request (Rebase+merge). Everything in
this list is done as of the v1 release.

- **Phase 1** — Scaffolding: Next.js static export, Tailwind design system
  (dark-first, light variant, blue accent), theming without flash, custom
  client-side EN/ES i18n, header/footer/skip-link page chrome.
- **Phase 2** — Home page and legal/compliance groundwork (design copy,
  takedown-aware philosophy; recorded in `docs/`).
- **Phase 3** — Data layer: zod schemas (ports, platforms, techniques,
  statuses incl. `takedown`, hardware, tests), 26 port files, hardware
  profiles, registry + queries, static `/api/ports.json`, content validation
  in CI, a weekly latest-release checker, `docs/PENDING_VERIFICATION.md`.
- **Phase 4** — Catalog UI: `/ports`, `/pc`, `/android` with MiniSearch,
  platform/status/state filters, sorting, URL state, typographic tiles and
  badges.
- **Phase 5** — Port detail + testing: `/ports/[slug]` (overview, about,
  features, requirements, screenshots, where-to-get, per-test sheets, report
  link), `TestBadge` with stale dimming, `/testing` page, testing data access.
- **Phase 6** — Editorial: `/guides`, `/submit`, `/support`, `/about`,
  `/legal` and a careful 404; GitHub issue templates for port/test proposals;
  optional PayPal support via env var; richer footer navigation.
- **Phase 7** — Polish: per-page SEO/OG/canonical, `sitemap.xml`,
  `robots.txt`, structured data, reduced-motion compliance, versioned catalog
  API + docs, Playwright smoke tests, Vitest coverage for data and
  utilities, and the full docs set (`ARCHITECTURE`, `DATA_MODEL`,
  `EDITORIAL_POLICY`, `TESTING_METHODOLOGY`, `DEPLOYMENT`, `DESIGN`).

## Beyond v1 (ideas, not commitments)

- Screenshots sourced from official project assets.
- An RSS/JSON feed of catalog changes.
- Per-locale `alternate` hreflang links once canonical ES URLs exist.
