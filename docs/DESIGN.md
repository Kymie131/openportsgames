# Design System

This document records the design decisions for the OpenPortsGames interface.
It is a living spec: update it whenever a visual rule changes.

## Goals

- **Sober and utilitarian.** The catalog's content is the protagonist. No decorations
  beyond a subtle ambient color wash; no stock imagery, no emoji anywhere.
- **Accessible** (WCAG AA contrast, semantic landmarks, visible focus, reduced-motion
  support) and **fast** (static export, no runtime CSS framework, minimal JS).
- **Fully bilingual** (English default, Spanish) with an on-page switcher. Design must
  hold in both languages with no layout glue.

## Typography

- Geist Sans (UI/body) and Geist Mono (code, versions) via `next/font`.
- Type scale is intentionally small: 12/13/14/16/18/24/30px. Headings are `font-semibold`,
  tight tracking, no heavy weights.
- Line length capped (max-w-2xl for prose) for comfortable reading in both languages.

## Color tokens (`src/app/globals.css`)

Dark is the default theme (`:root`); light lives in the `.light` class block declared
after it in the CSS. Tokens are real CSS variables remapped by Tailwind via
`@theme inline`. `@custom-variant dark` keeps `dark:` utilities working.

| Token                        | Dark                              | Light                             |
| ---------------------------- | --------------------------------- | --------------------------------- |
| `background`                 | `#0B1120`                         | `#F4F6FB`                         |
| `surface`                    | `#121A2C`                         | `#FFFFFF`                         |
| `surface-2`                  | `#1A2440`                         | `#E9EEF8`                         |
| `foreground`                 | `#EAF0FB`                         | `#1C2436`                         |
| `muted`                      | `#A6B3C9`                         | `#566172`                         |
| `border`                     | `#2C3A5C`                         | `#D3DCEF`                         |
| `ring`                       | `#5B9DFF`                         | `#2F6FE0`                         |
| `accent` / `accent-contrast` | `#5B9DFF` / `#0B1120`             | `#1F63E0` / `#FFFFFF`             |
| `accent-2`                   | `#3EC7F4` (cyan)                  | `#0E9CD8`                         |
| `accent-3`                   | `#A78BFA` (violet)                | `#7C5CE0`                         |
| `link` / `link-hover`        | `#8FB9FF` / `#AAC9FF`             | `#1C5BD0` / `#123AA0`             |
| `ok` / `warning` / `danger`  | `#45C47E` / `#E2B34F` / `#F2786F` | `#1C8A4E` / `#92600C` / `#B3291F` |

- Dark is a deep blue-slate with a blue/cyan/violet accent triad instead of a single
  accent. `body` carries a fixed, faint radial-gradient wash (the "aurora") that never
  animates and is invisible under `prefers-reduced-motion` by design (it is static).
- `.text-gradient` (blue→cyan→violet) is reserved for the brand and the home heading.
- Links use `--link` / `--link-hover`. Semantic variants (success/warning/danger) are
  used only as small badges, never as page color.

## Shape, spacing, elevation

- Radius: 6px (small), 8px (cards, controls). Never larger.
- Grid: 8px base. Page width capped by `Container` (max-w-6xl + 1.5rem padding).
- Borders: 1px, low-alpha; elevation is a barely-there shadow, mostly borders instead.

## Components (`src/components`)

- `ui/*` — primitives: `Button` (primary/secondary/ghost, sm/md/lg), `Badge`
  (neutral/accent/ok/warning/danger), `Card`, `ExternalLink`, `Input`, `Select`,
  `Switch`, `Tooltip`, `Dialog`.
- `layout/*` — `Container`, `SkipLink`, `SiteHeader`, `SiteFooter`.

### Header and navigation (`layout/site-header.tsx`)

- Sticky, ~56px on mobile / ~64px on desktop; neutral at rest and a hairline
  border + faint shadow only after scrolling past 8px, so the header separates
  from content without weight.
- Left: typographic wordmark (`.text-gradient`) linking to `/`. Primary nav
  (Ports, PC, Android, Guides, Testing) uses a single active state: an accent
  pill with `aria-current="page"` (matched by prefix, so `/ports/[slug]` keeps
  Ports active). No duplicate underline.
- Secondary group (right, 8px gap): language switcher, theme toggle and the
  discreet "Support" text link (`t.nav.support`).
- The old "More" dropdown is "Project" (Submit / Support / About / Legal) —
  the label tells the user what is inside instead of hiding it.
- Mobile: the hamburger opens a full-height right drawer (Radix Dialog, focus
  trapped, Escape closes, focus returns to the trigger) with 44px touch
  targets, the support CTA near the top of the list and language/theme pinned
  at the bottom. Drawer opening slides in 160ms under
  `prefers-reduced-motion: no-preference` (`.opg-drawer-content`).
- `platforms/platform-mark.tsx` — platform glyphs from **Simple Icons** (CC0
  1.0 artwork, see `platform-glyphs.ts`). Glyphs are filled with `currentColor`
  so they inherit the surrounding text/link color and never carry a brand tint
  or gradient; the logos are trademarks of their owners and are used only to
  identify each platform (Simple Icons source slugs are kept next to each path).

## Catalog grid and cards (`catalog/`)

- **Grid**: responsive 1 → 2 → 3 → 4 columns (`grid-cols-1 sm:grid-cols-2
lg:grid-cols-3 xl:grid-cols-4`), 4 columns is the hard maximum so cards never
  get too small. `gap-4`, cards stretch to a consistent per-row height.
- **Card anatomy (B1/B2)**: fixed-artwork strip (`h-14`), then game name as the
  primary, prominent title (2-line clamp), port title smaller beneath (1-line
  truncate), metadata (platform glyphs / status / version) as the tertiary row,
  footer with the official source. Equal heights because every text zone is
  clamped to a fixed number of lines.
- **Badges (B3)**: a single consistent pair — status chip (stable/beta/alpha)
  and test-status badge, both `rounded-full` and same font size.
- **Fallback artwork (B4)**: the tile has no screenshot; the strip shows the
  game's first letter on `surface-2` — typographic, neutral, no gradient.
- **Micro-interaction (B5)**: `150ms` hover (within the 120–180ms budget) with
  a subtle lift (`-translate-y-0.5`), accent border and faint shadow. Disabled
  under `prefers-reduced-motion`.
- **Empty state (B6)**: icon + message + did-you-mean hint + "clear filters"
  action; no bare one-line message.
- **Loading (B7)**: `PortTileSkeleton` cards with `aria-label` during route
  loads (`/ports/loading.tsx`), matching the real tile layout.
- **Takedown ports (A4)**: removed entries keep a detail page that renders a
  neutral takedown notice and is excluded from lists, sitemap and search
  engines (`robots: noindex`) automatically — they are never served as a plain
  404 so the takedown is documented at its original URL.

## Catalog filters and URL state (`catalog/`)

- **Layout**: the catalog is a two-column grid at `lg` (≥1024px):
  `lg:grid-cols-[minmax(0,1fr)_18rem]`. The results column holds the search
  box, the count/sort row and the grid; the filter panel is the right column,
  sticky (`lg:sticky lg:top-24`) below the header. The tile grid is capped at
  three columns inside the results column (`sm:grid-cols-2 xl:grid-cols-3`).
  On mobile the panel is a full-height right-hand drawer (Radix `Dialog`) whose
  footer button "See N results" closes it — filters apply live.
- **Multi-select semantics**: every filter section is a multi-select. Values
  within a section are OR-ed, sections are AND-ed (Steam-style), and the state
  is expressed as arrays in `CatalogState`. Sections: platform, original
  system, technique, status + verification, genre, source, features
  (presence of `port.features`), AI disclosure, test status.
- **Scope**: on `/pc` the platform section only offers PC platforms
  (Windows/Linux/macOS); on `/android` the platform section is hidden. Filters
  are never masked or clamped by the scope — a selected platform outside the
  view simply intersects (e.g. `android` on `/pc` keeps dual-platform ports).
- **URL state, not component state**: the query lives in `?q=`; every filter is
  a repeated params (`?platform=windows&platform=linux`). Filtering never
  happens in the client as a component state, so the URL is shareable and the
  back button works. The search box debounces (`150ms`) and resets the sort to
  relevance while typing.
- **Persistence (10.2)**: with the URL clean and no active filters, a
  previously stored filter set is restored from `localStorage`
  (`opg-catalog-filters`) and written to the URL. Filters are never stored when
  the user already has a URL: the URL is the source of truth and is copied to
  `localStorage` instead. The free-text query is never persisted. "Clear"
  wipes both the URL and the stored set.
- **Panel affordances**: the panel title shows a live count when any filter is
  active (`Filtros (N)`), and "Clear filters" appears only then. Chips are
  `aria-pressed` toggles; sections collapse with `aria-expanded`. Platform and
  original-system sections default to open, the rest collapsed.

## Theme & locale behavior

- Theme: inline pre-paint script in `<body>` sets `dark`/`light` class and
  `data-theme` from `localStorage` (`opg-theme`) or `prefers-color-scheme`; a
  `useSyncExternalStore` store exposes it; the toggle swaps and persists. Dark is
  the default.
- Locale: inline script sets `<html lang>` from `opg-locale` or `navigator.language`
  (Spanish if the browser asks for it, else English); a context provider re-renders
  strings; the switcher persists the choice. All copy lives in
  `src/lib/i18n/dictionaries.ts` under shape `{ en, es }`.

## Accessibility promise

- Skip link (first element in `<body>`), `#main` landmark, semantic header/footer/nav.
- Focus ring on every interactive element; `prefers-reduced-motion` disables
  transitions; `prefers-color-scheme: light` starts light only on first visit.
- Interactive affordances never rely on color alone (icons + label, badge + text).
