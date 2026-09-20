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

| Token | Dark | Light |
| --- | --- | --- |
| `background` | `#0B1120` | `#F4F6FB` |
| `surface` | `#121A2C` | `#FFFFFF` |
| `surface-2` | `#1A2440` | `#E9EEF8` |
| `foreground` | `#EAF0FB` | `#1C2436` |
| `muted` | `#A6B3C9` | `#566172` |
| `border` | `#2C3A5C` | `#D3DCEF` |
| `ring` | `#5B9DFF` | `#2F6FE0` |
| `accent` / `accent-contrast` | `#5B9DFF` / `#0B1120` | `#1F63E0` / `#FFFFFF` |
| `accent-2` | `#3EC7F4` (cyan) | `#0E9CD8` |
| `accent-3` | `#A78BFA` (violet) | `#7C5CE0` |
| `link` / `link-hover` | `#8FB9FF` / `#AAC9FF` | `#1C5BD0` / `#123AA0` |
| `ok` / `warning` / `danger` | `#45C47E` / `#E2B34F` / `#F2786F` | `#1C8A4E` / `#92600C` / `#B3291F` |

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