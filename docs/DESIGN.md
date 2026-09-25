# Design System

This document records how OpenPortsGames looks and why. It is a living spec:
every page and every token is described here, and when a visual rule changes,
this file changes with it.

## The identity in one paragraph

I catalog games that refused to die, so the interface is a nod to the
hardware they escaped from: terminals, CRT phosphor, vector arcade cabinets.
Deep, near-black backgrounds with a single phosphor-green pulse (the accent),
an amber secondary and a teal tertiary straight out of a vector display. The
green is a _dimmed_ phosphor, not neon: bright enough to read as the fruits of
a real CRT, subdued enough for long sessions of browsing the catalog. Body
text is always a warm neutral; the green never tints paragraphs, only
highlights. No gradient soup, no stock photos, no emoji, no rounded-squircle
SaaS energy. The design is sober and utilitarian by choice: the catalog is the
protagonist, and the machine the reader is using to browse it is also the
machine the games run on. It should feel like opening a good file manager, not
like entering a marketing funnel.

The rest of this file exists to keep it that way.

## Goals

- **Sober and utilitarian.** The catalog's content is the protagonist. No
  decorations beyond a faint terminal glow and scanline texture; no stock
  imagery, no emoji anywhere.
- **Accessible** (WCAG AA contrast, semantic landmarks, visible focus,
  reduced-motion support) and **fast** (static export, no runtime CSS
  framework, minimal JS).
- **Fully bilingual** (English default, Spanish) with an on-page switcher.
  Design must hold in both languages with no layout glue.

## Typography

- Geist Sans (UI/body) and Geist Mono (code, versions) via `next/font`.
  The mono face is doing real work, not dressing: versions, hardware specs
  and catalogue numbers read like terminal output, which is exactly the vibe.
- Type scale is intentionally small: 12/13/14/16/18/24/30px. Headings are
  `font-semibold`, tight tracking, no heavy weights.
- Line length capped (max-w-2xl for prose) for comfortable reading in both
  languages.

## Color tokens (`src/app/globals.css`)

Dark is the default theme (`:root`); light lives in the `.light` class block
declared after it in the CSS. Tokens are real CSS variables remapped by
Tailwind via `@theme inline`. `@custom-variant dark` keeps `dark:` utilities
working.

| Token                        | Dark (phosphor CRT)               | Light (terminal paper)            |
| ---------------------------- | --------------------------------- | --------------------------------- |
| `background`                 | `#0B0D0B`                         | `#F4F0E4`                         |
| `surface`                    | `#121511`                         | `#FCFAF2`                         |
| `surface-2`                  | `#1E231E`                         | `#EAE5D3`                         |
| `foreground`                 | `#E7E8E1`                         | `#26271F`                         |
| `muted`                      | `#A4A89E`                         | `#5F6258`                         |
| `border`                     | `#2A302A`                         | `#D6D0BB`                         |
| `ring`                       | `#56C589`                         | `#1A6E44`                         |
| `accent` / `accent-contrast` | `#56C589` / `#0A0F0C`             | `#1A6E44` / `#F4FAF6`             |
| `accent-hover`               | `#6ED7A0`                         | `#155C38`                         |
| `accent-2`                   | `#EFB060` (amber)                 | `#A15E07`                         |
| `accent-3`                   | `#4FC3BA` (teal)                  | `#0F6E6A`                         |
| `link` / `link-hover`        | `#7ED0A3` / `#A2E0BE`             | `#165C35` / `#0F4F2C`             |
| `ok` / `warning` / `danger`  | `#52C687` / `#E3A950` / `#E67F6C` | `#19723F` / `#7E5010` / `#A33428` |

- Dark is a near-black CRT with only a whisper of green in the blacks. The
  warmth that keeps it from reading as "hacker green" comes from the amber and
  the warm neutral text, not from tinting every surface green.
- The single pulse of the design is `--accent`: a **dimmed phosphor** (about
  half the chroma of a raw neon green, `#3FDE8D` → `#56C589`). It is reserved
  for accents: links, status badges, active nav, buttons, focus. Amber and
  teal are not decoration; they surface regularly across the catalog
  (version numbers in teal, the star ratings and home-section icons in amber,
  beta/stable/alpha badges in amber/green/red). That keeps the UI from feeling
  monochromatic without crowding the green out.
- The body carries a fixed, faint treatment instead of a colored wash: a
  slight green bloom at the top corner and a barely-there horizontal
  scanline. It never animates and it is a background, not a UI element. Both
  sit at single-digit opacity so they can never push small text (badges,
  metadata, footer) below the contrast line.
- `.text-gradient` (green→teal, like a vector display sweep) is reserved for
  the brand and the home heading.
- Links use `--link` / `--link-hover`. Semantic variants (success/warning/
  danger) are used only as small badges, never as page color.

### Why this palette (decision note)

The first release of the theme used a saturated neon green (`#3FDE8D`) as the
accent and green-tinted neutrals (`#DFE9E1` foreground, `#93A89B` muted) for
all body text. The result read as "hacker terminal": every paragraph carried a
green cast and the accent kept shouting. The goal of the adjustment was not to
abandon the CRT identity (the scanlines, the bloom, the mono numbers and the
green pulse are what make the site feel like the hardware the catalog's games
escaped from), but to make the palette _warmer_ and the green _quieter_:

- Neutrals moved from cool green-tinted to warm gray. Body text is now a warm
  off-white `#E7E8E1` (never green), and secondary text a warm gray `#A4A89E`.
  Long-reading comfort went up because the eye no longer has to stare into a
  green wash for every paragraph.
- The accent was desaturated and pulled back (`#3FDE8D` ≈ 71% s → `#56C589` ≈
  49% s). Same hue family, same CRT character, but at lower chroma, so it reads as
  backlit phosphor instead of LED harshness.
- Amber and teal were given real jobs (versions, stars, section icons,
  statuses) instead of being "sparing" accents, so the UI reads as three-color
  CRT rather than green-on-green.
- Every text/background combination was recomputed against WCAG. Dark theme is
  AAA for body and secondary text and ≥4.5AA for every badge; the light theme
  passes AA (≥4.5) for all text, including the small status chips. See the
  ratio matrix below; the axe sweep over the built site reports no
  color-contrast violations in either theme.

#### Measured contrast (worst-case pair per role)

| Role                                  | Dark | Light |
| ------------------------------------- | ---- | ----- |
| Body text on background               | 15.8 | 13.2  |
| Secondary (`muted`) on background     | 8.1  | 5.5   |
| Link on background                    | 10.6 | 7.0   |
| Accent text on accent chip (`/15` bg) | 6.6  | 4.8   |
| Status chips (ok/warning/danger)      | ≥5.4 | ≥4.6  |
| Accent button text on accent fill     | 9.0  | 5.9   |
| Amber / teal on card surface          | ≥8.6 | ≥4.9  |

All small-text pairs ≥4.5 (AA); body and secondary text additionally clear 7
in the dark theme. The scanline and bloom textures are not computed here;
they live on the body _background_ layer at single-digit alpha, behind every
opaque surface, so they never sit under text.

## Shape, spacing, elevation

- Radius: 4px (small/chips), 6px (cards, controls). Never larger. CRT-era
  hardware had no rounded corners to spare; neither do we.
- Grid: 8px base. Page width capped by `Container` (max-w-6xl + 1.5rem padding).
- Borders: 1px, low-alpha; elevation is a barely-there shadow, mostly borders
  instead.

## Components (`src/components`)

- `ui/*`: primitives (`Button` (primary/secondary/ghost, sm/md/lg), `Badge`
  (neutral/accent/ok/warning/danger), `Card`, `ExternalLink`, `Input`,
  `Select`, `Switch`, `Tooltip`, `Dialog`).
- `layout/*`: `Container`, `SkipLink`, `SiteHeader`, `SiteFooter`.

### Header and navigation (`layout/site-header.tsx`)

- Sticky, ~56px on mobile / ~64px on desktop; neutral at rest and a hairline
  border + faint shadow only after scrolling past 8px, so the header separates
  from content without weight.
- Left: the brand logo linking to `/`. Primary nav (Ports, PC, Android,
  Guides, Testing) uses a single active state: an accent-tinted pill with
  `aria-current="page"` (matched by prefix, so `/ports/[slug]` keeps Ports
  active). No duplicate underline.
- Secondary group (right, 8px gap): language switcher, theme toggle and the
  discreet "Support" text link (`t.nav.support`).
- The drop-down is labeled "Project" (Submit / Support / About / Legal). The
  label tells the user what is inside instead of hiding it.
- Mobile: the hamburger opens a full-height right drawer (Radix Dialog, focus
  trapped, Escape closes, focus returns to the trigger) with 44px touch
  targets, the support CTA near the top of the list and language/theme pinned
  at the bottom. Drawer opening slides in 160ms under
  `prefers-reduced-motion: no-preference` (`.opg-drawer-content`).
- `platforms/platform-mark.tsx`: platform glyphs from **Simple Icons** (CC0
  1.0 artwork, see `platform-glyphs.ts`). Glyphs are filled with
  `currentColor` so they inherit the surrounding text/link color and never
  carry a brand tint or gradient; the logos are trademarks of their owners and
  are used only to identify each platform (Simple Icons source slugs are kept
  next to each path).

## Catalog grid and cards (`catalog/`)

- **Grid**: responsive 1 → 2 → 3 → 4 columns (`grid-cols-1 sm:grid-cols-2
lg:grid-cols-3 xl:grid-cols-4`), 4 columns is the hard maximum so cards never
  get too small. `gap-4`, cards stretch to a consistent per-row height.
- **Card anatomy**: fixed-artwork strip (`h-14`), then game name as the
  primary, prominent title (2-line clamp), port title smaller beneath (1-line
  truncate), metadata (platform glyphs / status / version) as the tertiary
  row, footer with the official source. Equal heights because every text zone
  is clamped to a fixed number of lines.
- **Badges**: a single consistent pair: status chip (stable/beta/alpha) and
  test-status badge, both `rounded-full` and same font size.
- **Fallback artwork**: the tile has no screenshot; the strip shows the game's
  first letter on `surface-2`: typographic, neutral, no gradient.
- **Micro-interaction**: `150ms` hover (within the 120–180ms budget) with a
  subtle lift (`-translate-y-0.5`), accent border and faint shadow. Disabled
  under `prefers-reduced-motion`.
- **Empty state**: icon + message + did-you-mean hint + "clear filters"
  action; no bare one-line message.
- **Loading**: `PortTileSkeleton` cards with `aria-label` during route loads
  (`/ports/loading.tsx`), matching the real tile layout.
- **Takedown ports**: removed entries keep a detail page that renders a
  neutral takedown notice and is excluded from lists, sitemap and search
  engines (`robots: noindex`) automatically. They are never served as a plain
  404 so the takedown is documented at its original URL.

## Catalog filters and URL state (`catalog/`)

- **Layout**: the catalog is a two-column grid at `lg` (≥1024px):
  `lg:grid-cols-[minmax(0,1fr)_18rem]`. The results column holds the search
  box, the count/sort row and the grid; the filter panel is the right column,
  sticky (`lg:sticky lg:top-24`) below the header. The tile grid is capped at
  three columns inside the results column (`sm:grid-cols-2 xl:grid-cols-3`).
  On mobile the panel is a full-height right-hand drawer (Radix `Dialog`) whose
  footer button "See N results" closes it; filters apply live.
- **Multi-select semantics**: every filter section is a multi-select. Values
  within a section are OR-ed, sections are AND-ed (Steam-style), and the state
  is expressed as arrays in `CatalogState`. Sections: platform, original
  system, technique, status + verification, genre, source, features (presence
  of `port.features`), AI disclosure, test status.
- **Scope**: on `/pc` the platform section only offers PC platforms
  (Windows/Linux/macOS); on `/android` the platform section is hidden. Filters
  are never masked or clamped by the scope; a selected platform outside the
  view simply intersects (e.g. `android` on `/pc` keeps dual-platform ports).
- **URL state, not component state**: the query lives in `?q=`; every filter
  is a repeated param (`?platform=windows&platform=linux`). Filtering never
  happens in the client as a component state, so the URL is shareable and the
  back button works. The search box debounces (`150ms`) and resets the sort to
  relevance while typing.
- **Persistence**: with the URL clean and no active filters, a previously
  stored filter set is restored from `localStorage` (`opg-catalog-filters`)
  and written to the URL. Filters are never stored when the user already has a
  URL: the URL is the source of truth and is copied to `localStorage` instead.
  The free-text query is never persisted. "Clear" wipes both the URL and the
  stored set.
- **Panel affordances**: the panel title shows a live count when any filter is
  active (`Filtros (N)`), and "Clear filters" appears only then. Chips are
  `aria-pressed` toggles; sections collapse with `aria-expanded`. Platform and
  original-system sections default to open, the rest collapsed.

## Console logo badges and media

- **Artwork (`public/logos/console/`)**: real transparent logo PNGs owned by
  this repo, in kebab-case slugs (`n64.png`, `gamecube.png`, `xbox-360.png`,
  `ms-dos.png`, ...). `src/content/ports/console-logos.ts` maps each
  `originalSystem` label to a slug and keeps an explicit `consoleLogoSlugs`
  availability list; `consoleLogoForSystem` returns `null` when no artwork
  exists so a badge can never render a broken image. The list is verified
  against the folder by `tests/content/console-logos.test.ts`.
- **Never invent artwork**: systems without a real logo keep the textual
  `SystemMark` fallback. The `.jpg` and duplicate-size submissions were
  discarded (jpg has no alpha; duplicates add no resolution).
- **Badge**: the logo sits on a frosted chip (`bg-white/80` +
  `backdrop-blur-sm`) at the **bottom-right** of the media area, with an
  `aria-label` of the system name. On catalog tiles it is the centered artwork
  of the `h-14` strip (replacing the initial + `SystemMark` combo).
- **Detail media**: every port shows an `aspect-video` hero: the first
  screenshot when `port.screenshots` exist, otherwise the typographic game
  initial fallback, with the badge overlaid. When a port has more than one
  screenshot, a horizontal thumbnail strip below it swaps the hero image
  (`aria-pressed` on the active thumb). Screenshots are official project
  assets referenced by URL; ports without them fall back to the typographic
  initial.

## Theme & locale behavior

- Theme: inline pre-paint script in `<body>` sets `dark`/`light` class and
  `data-theme` from `localStorage` (`opg-theme`) or `prefers-color-scheme`; a
  `useSyncExternalStore` store exposes it; the toggle swaps and persists. Dark
  is the default.
- Locale: inline script sets `<html lang>` from `opg-locale` or
  `navigator.language` (Spanish if the browser asks for it, else English); a
  context provider re-renders strings; the switcher persists the choice. All
  copy lives in `src/lib/i18n/dictionaries.ts` under shape `{ en, es }`.

## Accessibility promise

- Skip link (first element in `<body>`), `#main` landmark, semantic
  header/footer/nav.
- Focus ring on every interactive element; `prefers-reduced-motion` disables
  transitions; `prefers-color-scheme: light` starts light only on first visit.
- Interactive affordances never rely on color alone (icons + label, badge +
  text).
- The theme must hold WCAG AA contrast in both light and dark; the scanline
  and glow textures are at single-digit opacity on purpose so they can never
  push text below the contrast line.

Last note, the important one: nothing here is decoration for its own sake.
The retro look is a wink at the hardware the catalog's games escaped from;
accessibility is not the price the style pays, it is the floor the style
stands on.
