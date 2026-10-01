# Design System

How OpenPortsGames looks, and the rules that keep it looking that way. Every
token named here exists in `src/app/globals.css`; every component named here
exists under `src/components`.

## Identity

The catalog covers games that refused to die, so the interface nods at the
hardware they escaped from: terminals, CRT phosphor, vector arcade cabinets.
Near-black backgrounds, a single dimmed phosphor-green accent, an amber
secondary and a teal tertiary. Body text is always a warm neutral; the green
never tints paragraphs, it highlights. No stock imagery, no emoji, no gradient
soup. The catalog is the protagonist.

## Goals

- **Sober and utilitarian.** No decoration beyond a faint terminal glow and a
  scanline texture.
- **Accessible** (WCAG AA contrast, semantic landmarks, visible focus,
  reduced-motion) and **fast** (static export, minimal JS).
- **Fully bilingual** (English default, Spanish) with an on-page switcher, and
  the layout must hold in both languages without glue.

## Typography

- Geist Sans (UI/body) and Geist Mono (code, versions) via `next/font`. The mono
  face is load-bearing: versions, hardware specs and catalog numbers read like
  terminal output.
- Type scale is small: 12/13/14/16/18/24/30px. Headings are `font-semibold` with
  tight tracking.
- Prose is capped at `max-w-2xl` for comfortable reading in both languages.

## Color tokens (`src/app/globals.css`)

Dark is the default (`:root`); light lives in the `.light` block declared after
it. Tokens are CSS variables remapped by Tailwind through `@theme inline`, and
`@custom-variant dark` keeps `dark:` utilities working.

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

- The accent is a dimmed phosphor, roughly half the chroma of a raw neon green.
  It is reserved for accents: links, status badges, active nav, buttons, focus.
- Amber and teal have real jobs rather than being decorative: version numbers in
  teal, stars and home-section icons in amber, stable/beta/alpha badges in
  amber/green/red.
- The body carries a fixed, non-animating treatment: a faint green bloom at the
  top corner and a barely-there horizontal scanline, both at single-digit opacity
  so they can never push small text below the contrast line.
- `.text-gradient` (green to teal) is reserved for the brand and the home heading.
- Links use `--link` / `--link-hover`. Semantic variants appear only as small
  badges, never as page color.

### Measured contrast (worst-case pair per role)

| Role                                  | Dark | Light |
| ------------------------------------- | ---- | ----- |
| Body text on background               | 15.8 | 13.2  |
| Secondary (`muted`) on background     | 8.1  | 5.5   |
| Link on background                    | 10.6 | 7.0   |
| Accent text on accent chip (`/15` bg) | 6.6  | 4.8   |
| Status chips (ok/warning/danger)      | ≥5.4 | ≥4.6  |
| Accent button text on accent fill     | 9.0  | 5.9   |
| Amber / teal on card surface          | ≥8.6 | ≥4.9  |

All small-text pairs clear 4.5 (AA); body and secondary text clear 7 in the
dark theme. The scanline and bloom sit on the body background at single-digit
alpha, behind every opaque surface, so they never sit under text.

## Shape, spacing, elevation

- Radius: 4px for small elements and chips, 6px for cards and controls. Never
  larger.
- Grid: 8px base. Page width capped by `Container` (`max-w-6xl` + 1.5rem).
- Borders are 1px and low-alpha; elevation is a barely-there shadow, mostly
  borders instead.

## Components

- `ui/*`: `Button` (primary/secondary/ghost, sm/md/lg), `Badge`
  (neutral/accent/ok/warning/danger), `Card`, `ExternalLink`, `Input`, `Select`,
  `Switch`, `Tooltip`, `Dialog`.
- `layout/*`: `Container`, `SkipLink`, `SiteHeader`, `SiteFooter`.
- `platforms/*`: platform, console and source marks. Platform glyphs come from
  Simple Icons (CC0 artwork, slugs kept in `platform-glyphs.ts`) and are filled
  with `currentColor` so they inherit the surrounding text color and never carry
  a brand tint. The logos are trademarks of their owners, used only to identify
  the thing they name.

### Header and navigation (`layout/site-header.tsx`)

- Sticky, about 56px on mobile and 64px on desktop; neutral at rest, with a
  hairline border and faint shadow only after scrolling past 8px.
- Left: brand logo linking to `/`. Primary nav (Ports, PC, Android, Guides,
  Testing) uses one active state, an accent-tinted pill with
  `aria-current="page"`, matched by prefix so `/ports/[slug]` keeps Ports
  active. No duplicate underline.
- Right: language switcher, theme toggle, and the "Support" text link.
- The dropdown is labeled "Project" (Submit, Support, About, Legal) rather than
  hiding its contents behind an unlabeled affordance.
- Mobile: the hamburger opens a full-height right drawer (Radix `Dialog`, focus
  trapped, Escape closes, focus returns to the trigger) with 44px touch targets.
  It slides in over 160ms under `prefers-reduced-motion: no-preference`
  (`.opg-drawer-content`).

## Catalog grid and cards (`catalog/`)

- **Grid**: 1 to 4 columns, 4 as the hard maximum so cards stay legible, with
  `gap-4` and cards stretched to a consistent per-row height.
- **Card anatomy**: fixed-artwork strip (`h-14`), then the game name as the
  primary two-line-clamped title, the port title smaller beneath it, and
  platform glyphs, status and version as the tertiary row, with the official
  source in the footer.
- **Badges**: one consistent pair, a status chip and a test-status badge, both
  `rounded-full` and the same size.
- **Fallback artwork**: the tile has no screenshot, so the strip shows the game's
  first letter on `surface-2`. Typographic and neutral.
- **Micro-interaction**: 150ms hover with a slight lift, accent border and faint
  shadow, disabled under `prefers-reduced-motion`.
- **Empty state**: icon, message, a did-you-mean hint and a "clear filters"
  action, never a bare one-line message.
- **Loading**: `PortTileSkeleton` cards carrying an `aria-label`, matching the
  real tile layout.
- **Takedown ports**: keep a detail page that renders a neutral takedown notice
  and is excluded from lists, sitemap and search engines (`robots: noindex`).
  They are never served as a plain 404, so the takedown stays documented at its
  original URL.

## Catalog filters and URL state (`catalog/`)

- **Layout**: two columns at `lg`, `lg:grid-cols-[minmax(0,1fr)_18rem]`. The
  results column holds search, the count/sort row and the grid, capped at three
  tile columns inside it; the filter panel is the right column, sticky below the
  header. On mobile the panel is a full-height right drawer whose "See N
  results" button closes it, and filters apply live.
- **Multi-select semantics**: every section is a multi-select. Values inside a
  section are OR-ed, sections are AND-ed, and the state is arrays in
  `CatalogState`. Sections: platform, original system, technique, status plus
  verification, genre, source, features, AI disclosure, test status.
- **Scope**: on `/pc` the platform section offers only PC platforms; on
  `/android` it is hidden. Filters are never masked by the scope, a selected
  platform outside the view simply intersects.
- **URL state, not component state**: the query lives in `?q=` and every filter
  is a repeated param, so URLs are shareable and the back button works. Search
  debounces at 150ms and resets sorting to relevance while typing.
- **Persistence**: with a clean URL and no active filters, a previously stored
  filter set is restored from `localStorage` (`opg-catalog-filters`) and written
  to the URL. When the user already has a URL, that URL is the source of truth
  and it is copied to storage instead. The free-text query is never persisted.
- **Panel affordances**: the title shows a live count when any filter is active
  and "Clear filters" appears only then. Chips are `aria-pressed` toggles;
  sections collapse with `aria-expanded`. Platform and original-system sections
  default to open.

## Console logo badges and media

- **Artwork (`public/logos/console/`)**: transparent logo PNGs owned by this
  repo in kebab-case slugs. `src/content/ports/console-logos.ts` maps each
  `originalSystem` label to a slug and keeps an explicit availability list;
  `consoleLogoForSystem` returns `null` when no artwork exists, so a badge can
  never render a broken image. `tests/content/console-logos.test.ts` verifies
  the list against the folder.
- **Never invent artwork**: systems without a real logo keep the textual
  `SystemMark` fallback.
- **Badge**: the logo sits on a frosted chip (`bg-white/80` + `backdrop-blur-sm`)
  at the bottom-right of the media area with an `aria-label` naming the system.
  On catalog tiles it is the centered artwork of the `h-14` strip.
- **Detail media**: each port shows an `aspect-video` hero, the first screenshot
  when `port.screenshots` exist and the typographic initial otherwise, with the
  badge overlaid. More than one screenshot adds a horizontal thumbnail strip
  that swaps the hero. Screenshots are official project assets referenced by
  URL.

## Theme and locale behavior

- Theme: an inline pre-paint script in `<body>` sets the `dark`/`light` class
  and `data-theme` from `localStorage` (`opg-theme`) or `prefers-color-scheme`;
  a `useSyncExternalStore` store exposes it. Dark is the default.
- Locale: an inline script sets `<html lang>` from `opg-locale` or
  `navigator.language`, a provider re-renders strings, and the switcher
  persists the choice. All copy lives in `src/lib/i18n/dictionaries.ts` under
  the shape `{ en, es }`.

## Accessibility promise

- Skip link as the first element in `<body>`, `#main` landmark, semantic
  header/footer/nav.
- Focus ring on every interactive element; `prefers-reduced-motion` disables
  transitions; `prefers-color-scheme: light` starts light only on first visit.
- Affordances never rely on color alone, always icon plus label or badge plus
  text.
- The theme holds WCAG AA contrast in both light and dark. The scanline and glow
  textures are at single-digit opacity on purpose so they can never push text
  below the contrast line.

Accessibility is not the price this style pays. It is the floor it stands on.
