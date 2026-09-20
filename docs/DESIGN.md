# Design System

This document records the design decisions for the OpenPortsGames interface.
It is a living spec: update it whenever a visual rule changes.

## Goals

- **Sober and utilitarian.** The catalog's content is the protagonist. No decorative
  gradients, no stock imagery, no emoji anywhere.
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

| Token | Dark | Light |
| --- | --- | --- |
| `background` | `#0C1016` | `#F6F7F9` |
| `surface` | `#131A23` | `#FFFFFF` |
| `surface-2` | `#1B242F` | `#ECEEF1` |
| `foreground` | `#E6ECF3` | `#161C22` |
| `muted` | `#9AA8B8` | `#5A6673` |
| `border` | `rgba(148, 163, 184, 0.16)` | `rgba(22, 28, 34, 0.14)` |
| `ring` | `rgba(59, 130, 246, 0.55)` | same |
| `accent` + `accent-contrast` | `#3E7BFA` / `#F6FBFF` | `#2B6AE2` / `#FFFFFF` |

- Single blue accent; surfaces are cold neutral. Semantic variants (success/warning/
  danger) are used only as small badges, never as page color.
- Links use `--link` / `--link-hover`.

## Shape, spacing, elevation

- Radius: 6px (small), 8px (cards, controls). Never larger.
- Grid: 8px base. Page width capped by `Container` (max-w-6xl + 1.5rem padding).
- Borders: 1px, low-alpha; elevation is a barely-there shadow, mostly borders instead.

## Components (`src/components`)

- `ui/*` — primitives: `Button` (primary/secondary/ghost, sm/md/lg), `Badge`
  (neutral/accent/ok/warning/danger), `Card`, `ExternalLink`, `Input`, `Select`,
  `Switch`, `Tooltip`, `Dialog`.
- `layout/*` — `Container`, `SkipLink`, `SiteHeader`, `SiteFooter`.
- `platforms/platform-mark.tsx` — one stroke-weight mark per platform drawn with
  custom SVGs (Windows 4-pane, Linux penguin, Android head+antennae; macOS uses the
  Lucide `Command` glyph so it shares the same 1.6 stroke weight).

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