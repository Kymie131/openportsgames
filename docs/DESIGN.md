# Design System

How the site looks and the rules that keep it consistent. Every token here
lives in `src/app/globals.css`; every component lives under `src/components`.

## Identity

The catalog covers games that escaped their original hardware, so the
interface nods at where they came from: terminals, CRT phosphor, arcade
cabinets. Near-black backgrounds, a dimmed green accent, amber and teal as
secondary colors. Body text is always warm neutral — the green highlights,
it doesn't tint paragraphs. No stock photos, no emoji, no gradient soup.
The catalog itself is the star.

## Goals

- Sober and utilitarian. Just a faint terminal glow and scanline texture.
- Accessible (WCAG AA contrast, semantic landmarks, visible focus,
  reduced-motion) and fast (static export, minimal JS).
- Fully bilingual (English default, Spanish) with an on-page switcher.

## Typography

Geist Sans for UI/body, Geist Mono for code and versions. The mono face
matters: versions, hardware specs and catalog numbers read like terminal
output. Small type scale: 12/13/14/16/18/24/30px. Prose capped at
`max-w-2xl` for comfortable reading.

## Colors (`src/app/globals.css`)

Dark is default, light lives in `.light`. Tokens are CSS variables remapped
by Tailwind via `@theme inline`.

| Token | Dark | Light |
|---|---|---|
| `background` | `#0B0D0B` | `#F4F0E4` |
| `surface` | `#121511` | `#FCFAF2` |
| `surface-2` | `#1E231E` | `#EAE5D3` |
| `foreground` | `#E7E8E1` | `#26271F` |
| `muted` | `#A4A89E` | `#5F6258` |
| `border` | `#2A302A` | `#D6D0BB` |
| `accent` | `#56C589` | `#1A6E44` |
| `accent-2` | `#EFB060` (amber) | `#A15E07` |
| `accent-3` | `#4FC3BA` (teal) | `#0F6E6A` |
| `link` | `#7ED0A3` | `#165C35` |
| `ok` / `warning` / `danger` | `#52C687` / `#E3A950` / `#E67F6C` | `#19723F` / `#7E5010` / `#A33428` |

- Accent is dimmed phosphor green — reserved for links, badges, buttons,
  focus rings. Never for body text.
- Amber and teal have jobs: version numbers in teal, stars and icons in
  amber, status badges in amber/green/red.
- Body has a fixed faint green bloom and scanline at very low opacity so
  they never hurt text contrast.

## Shape and spacing

- Radius: 4px for small elements, 6px for cards. Never larger.
- 8px grid. Page capped at `max-w-6xl`.
- 1px low-alpha borders, barely-there shadows.

## Components

- `ui/*`: Button, Badge, Card, ExternalLink, Input, Select, Switch, Tooltip,
  Dialog
- `layout/*`: Container, SkipLink, SiteHeader, SiteFooter
- `platforms/*`: platform, console and source marks. Logos from Simple Icons,
  filled with `currentColor` so they inherit text color.

### Header

Sticky, 56px mobile / 64px desktop. Brand on the left, nav in the middle
(Ports, PC, Android, Guides, Testing), language/theme/support on the right.
Mobile hamburger opens a right drawer with 44px touch targets.

## Catalog grid and cards

- 1–4 columns, 4 max so cards stay legible.
- Card: artwork strip, game name (primary), port title (secondary),
  platforms/status/version (tertiary), source link (footer).
- Badges: status chip + test-status badge, both rounded-full.
- No screenshot? Show the game's first letter on `surface-2`. Typographic
  and neutral.
- Hover: 150ms, slight lift, accent border. Disabled under reduced-motion.

## Filters and URL state

- Two columns at `lg`, filter panel sticky on the right.
- Multi-select everywhere: values within a section are OR-ed, sections are
  AND-ed.
- URL is the source of truth: `?q=` for search, repeated params for filters.
  Shareable URLs, working back button.
- Search debounces at 150ms. Filters persist in `localStorage` when the URL
  is clean.

## Console logos and media

- Transparent PNG logos in `public/logos/console/`, mapped by
  `console-logos.ts`. If no logo exists, fall back to text.
- Never invent artwork.
- Detail pages show `aspect-video` hero: first screenshot or typographic
  initial, with the console badge overlaid.

## Theme and locale

- Theme: inline pre-paint script sets `dark`/`light` from localStorage or
  `prefers-color-scheme`. Dark is default.
- Locale: inline script sets `<html lang>`, provider re-renders strings.
  All copy in `src/lib/i18n/dictionaries.ts`.

## Accessibility

- Skip link first in `<body>`, semantic landmarks, visible focus on every
  interactive element.
- `prefers-reduced-motion` disables transitions.
- Never rely on color alone — always icon + label or badge + text.
- WCAG AA contrast in both themes.

Accessibility isn't a nice-to-have here. It's the floor.
