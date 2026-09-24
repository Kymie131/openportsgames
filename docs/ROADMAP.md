# Roadmap

This used to be a phase-by-phase checklist and the checklist is done — every
phase below shipped as part of the v1 release. So this file is now two
things: a record of how the site came together, and a short list of ideas
that are still on the shelf. It is honest about both.

## What shipped

The project was built in seven passes, each one a reviewable chunk of work.

- **Base** — Next.js static export, the Tailwind design system (dark-first,
  light variant), theming without flash, custom client-side EN/ES i18n, and
  the header/footer/skip-link page chrome.
- **Home + stance** — the landing page and the legal/compliance groundwork:
  the takedown-aware philosophy, written down in `docs/` before any content
  was added.
- **Data layer** — zod schemas for ports, platforms, techniques, statuses
  (including `takedown`), hardware and tests; the initial set of port files;
  the query registry; the static `/api/ports.json`; content validation in CI;
  the weekly latest-release checker; and `docs/PENDING_VERIFICATION.md`.
- **Catalog UI** — `/ports`, `/pc` and `/android` with client-side search,
  platform/status/state filters, sorting, URL state, typographic tiles and
  badges.
- **Detail + testing** — `/ports/[slug]` (overview, about, features,
  requirements, screenshots, where-to-get, per-test sheets, report link), the
  `TestBadge` with stale-version dimming, the `/testing` page, and the
  testing data access.
- **Editorial** — `/guides`, `/submit`, `/support`, `/about`, `/legal` and a
  careful 404; GitHub issue templates for port/test proposals; optional
  PayPal support via env var; a deeper footer.
- **Polish** — per-page SEO/OG/canonical, `sitemap.xml`, `robots.txt`,
  structured data, reduced-motion compliance, the versioned catalog API +
  docs, Playwright smoke tests, Vitest coverage for data and utilities, and
  the docs set you're reading.

## On the shelf (ideas, not commitments)

- A catalog backup strategy that is not just "the repo" — offline archives,
  screenshot archival before links rot.
- An RSS/JSON feed of catalog changes.
- Per-locale `alternate` hreflang links once canonical ES URLs exist.
- More hardware profiles so the testing section can represent machines other
  than my two.

The order is not sacred. The one standing priority is the same since day one:
keep the data honest and the links official. Everything else can wait.
