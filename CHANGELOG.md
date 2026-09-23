# Changelog

All notable changes to this project are documented in this file.

The format is based on Keep a Changelog (https://keepachangelog.com/en/1.1.0/)
and this project adheres to SemVer (https://semver.org/). Commits follow
Conventional Commits.

## [Unreleased]

### Added

- Home page: redesigned with live stats, a curated "Featured ports" section and
  new landing sections.
- Brand logo in the site header (transparent/dark variants per theme).
- Console logos: Nintendo 3DS, Game Boy Advance, Nintendo DS.
- Optional donation link on `/support` via `NEXT_PUBLIC_SUPPORT_PAYPAL_URL`.
- Team credits section on the `/about` page.
- First registered test record (Silent Hill: Downpour) and its Tested badge.
- Official project screenshots for Downpour Recompilation, TriAevum,
  Metroid Prime Hunters Recompiled, NxEngine-Evo and PrBoom-Plus RT.

### Changed

- Repo line endings normalized to LF (`.editorconfig` + Prettier `endOfLine`).
- Vitest configuration loaded as ESM (`vitest.config.mts`).
- `actions/checkout` pinned to a full commit SHA across all workflows.

### Fixed

- Vitest warning about ESM syntax in a CommonJS-loaded config file.

## [0.1.0] - 2026-09-19

### Added

- Project scaffold: Next.js App Router, TypeScript, Tailwind CSS v4.
- Static export configuration, deployment-ready for any static host.
- Tooling: ESLint, Prettier, Vitest, Playwright.
- GitHub issue templates and pull request template.
- Community files: CONTRIBUTING, CODE_OF_CONDUCT, SECURITY.
- Licenses: MIT for code, CC BY 4.0 for catalog data.
- Bilingual README (English and Spanish).

Project still in development. The catalog, design system and editorial pages
are scheduled for the following phases.
