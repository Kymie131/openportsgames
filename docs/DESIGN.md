# Design system

How the site looks and the rules that keep it consistent. Every token lives in
`src/app/globals.css`; every component lives under `src/components`.

## Typography

Geist Sans for UI and body, Geist Mono for code, versions and catalog numbers.
Prose is capped at `max-w-2xl`.

## Colors (`src/app/globals.css`)

Dark is the default theme; light lives in `.light`. Tokens are CSS variables
remapped by Tailwind through `@theme inline`.

| Token                       | Dark                              | Light                             |
| --------------------------- | --------------------------------- | --------------------------------- |
| `background`                | `#0a0710`                         | `#f8fafc`                         |
| `surface`                   | `#130d1c`                         | `#ffffff`                         |
| `surface-2`                 | `#1f152e`                         | `#f1f5f9`                         |
| `border`                    | `#2e2045`                         | `#e2e8f0`                         |
| `foreground`                | `#eae5f2`                         | `#0f172a`                         |
| `muted`                     | `#8d839c`                         | `#64748b`                         |
| `accent`                    | `#9333ea`                         | `#059669`                         |
| `accent-contrast`           | `#ffffff`                         | `#ffffff`                         |
| `accent-hover`              | `#a855f7`                         | `#047857`                         |
| `accent-2`                  | `#4ade80`                         | `#7c3aed`                         |
| `accent-3`                  | `#22c55e`                         | `#2563eb`                         |
| `link`                      | `#4ade80`                         | `#059669`                         |
| `ok` / `warning` / `danger` | `#22c55e` / `#f97316` / `#ef4444` | `#16a34a` / `#d97706` / `#dc2626` |

- Accent is for links, badges, buttons, focus rings and active states. Not for
  body text.
- `accent-2` and `accent-3` are secondary highlights (icons, version numbers).
- The body has a faint accent glow and a dotted grid at low opacity.

## Shape and spacing

- Radius: `sm` 4px, `md` 8px, `lg` 12px, `xl` 16px, `2xl` 24px.
- 8px grid. Page capped at `max-w-6xl`.
- 1px low-alpha borders, soft shadows.

## Components

- `ui/*`: Button, Badge, Card, ExternalLink, Input, Select, Switch, Tooltip,
  Dialog.
- `layout/*`: Container, SkipLink, SiteHeader, SiteFooter.
- `platforms/*`: platform, console and source marks, filled with `currentColor`.

### Header

Sticky. Brand on the left, nav (Ports, PC, Android, Emulators, Guides, Testing)
plus a Project menu, search, language and theme on the right. The mobile
hamburger opens a drawer with 44px touch targets.

## Catalog grid and cards

- 1 to 3 columns.
- Card: cover, game name, port title, system badge, platforms and status, source
  link.
- The current page and section use a solid accent background with
  accent-contrast text.
- Hover: slight lift and accent border, disabled under reduced motion.

## Filters and URL state

- Two columns at `lg`, filter panel sticky on the right.
- Multi-select: values inside a section are OR-ed, sections are AND-ed.
- The URL is the source of truth (`?q=`, repeated params, `?page=`).
- Search debounces at 150ms. Filters persist in `localStorage` when the URL is
  clean.

## Theme and locale

- Theme: an inline pre-paint script sets `dark`/`light` from localStorage or
  `prefers-color-scheme`. Dark is the default.
- Locale: an inline script sets `<html lang>`; the provider re-renders strings.
  All copy lives in `src/lib/i18n/dictionaries.ts`.

## Accessibility

- Skip link first in `<body>`, semantic landmarks, visible focus everywhere.
- `prefers-reduced-motion` disables transitions.
- Never rely on color alone: always icon plus label or badge plus text.
- WCAG AA contrast in both themes.
