# Changelog

Notable changes to OpenPortsGames, written like a logbook rather than a
release-notes generator. Versioning follows semver; commits use conventional
prefixes so the history stays greppable, but the words in this file are mine.

## [Unreleased]

### Added

- Home page: live stats, a curated "Featured ports" section and new landing
  sections.
- Brand logo in the site header (transparent/dark variants per theme).
- Console logos: Nintendo 3DS, Game Boy Advance, Nintendo DS.
- Optional donation link on `/support` via `NEXT_PUBLIC_SUPPORT_PAYPAL_URL`.
- Team credits section on the `/about` page.
- First registered test record (Silent Hill: Downpour) and its Tested badge.
- Official project screenshots for Downpour Recompilation, TriAevum,
  Metroid Prime Hunters Recompiled, NxEngine-Evo and PrBoom-Plus RT.
- Official project screenshots for F-Zero SNES Recompiled, OpenTTD,
  EDuke32 and OpenMW.
- Official project screenshots for OpenRA, Daggerfall Unity and OpenXcom.

### Changed

- Repo line endings normalized to LF (`.editorconfig` + Prettier `endOfLine`).
- Vitest configuration loaded as ESM (`vitest.config.mts`).
- `actions/checkout` pinned to a full commit SHA across all workflows.

### Fixed

- Vitest warning about ESM syntax in a CommonJS-loaded config file.
- Catalog search: a query matching nothing returned the full catalog; the
  empty state is now shown. Free-text queries are capped at 200 characters
  (guards MiniSearch against pathological tokens) and the search input enforces
  the same limit.
- OpenXcom source link now points at the canonical repository
  (`OpenXcom/OpenXcom`) instead of the redirecting account.
- Social preview image: the 1200x630 card is now a real PNG served from
  `public/` (`opengraph-image.png`) and every page references it by absolute URL,
  instead of an extensionless generated asset that some hosts served as
  `application/octet-stream`.
- Sitemap: every URL (home, sections and port pages) now ends with a trailing
  slash, matching the static export's `trailingSlash` routing.
- Port pages: long meta descriptions (e.g. full `notes`) are now summarized to
  a 155-character word-boundary snippet for the tag, leaving the on-page copy
  untouched.
- Super Mario Bros. Remastered: the repository publishes versioned releases;
  the entry now lists stable `1.1.0` (2026-09-04). Pokémon Red/Blue
  Disassembly ships no releases, so its note now says builds track the
  repository (same stance as sm64ex).

### Tooling

- New local tooling to preview and audit the static export the way GitHub
  Pages serves it: `npm run serve:pages` (base path, directory redirects,
  `404.html`) and `npm run audit:site` (crawls the sitemap and reports
  FAIL/WARN/INFO). Documented in `docs/DEPLOYMENT.md`.

## [0.1.0] - 2026-09-19

### Added

- Project scaffold: Next.js App Router, TypeScript, Tailwind CSS v4.
- Static export configuration, deployment-ready for any static host.
- Tooling: ESLint, Prettier, Vitest, Playwright.
- GitHub issue templates and pull request template.
- Community files: CONTRIBUTING, CODE_OF_CONDUCT, SECURITY.
- Licenses: MIT for code, CC BY 4.0 for catalog data.
- Bilingual README (English and Spanish).

The site launched with the catalog, design system and editorial pages
finished; the phase checklist that took it there lives in `docs/ROADMAP.md`.
