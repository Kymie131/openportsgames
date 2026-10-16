# Data model

The catalog is code: one typed object per port in `src/content/ports/*.ts`, validated
by zod in `src/lib/ports/schema.ts`. The registry (`src/lib/ports/index.ts`) parses
everything at build time and exposes query helpers.

## Port fields (schema)

Required: `schema`, `id`, `title`, `game`, `developers`, `publisher`, `originalYear`,
`portType`, `genre`, `openSource`, `platforms`, `status`, `release`, `sources`, `license`,
`verified`.

Optional: `website`, `docs`, `discord`, `verifiedAt`, `originalGameLicense`,
`noOriginalGameRequired`, `notes`, `notesEs`, `features`, `featuresEs`, `aiDisclosure`,
`sourceVerified`, `sourceIsIndex`, `sourceDead`, `noindex`, `warning`, `warningEs`,
`installGuide`, `requirements`, `screenshots`, `cover`, `originalSystems`, `region`,
`kind`.

### `originalSystems` (string[])

The original platform(s) the game ran on. A port can carry several values (e.g.
`["MS-DOS", "Windows"]`). Values are canonical labels resolved by
`src/content/systems.ts` (`resolveSystem`). When the original platform could not be
confirmed from the project's own README or description, the value is the sentinel
`"Unknown"`.

- Display: one badge per known system; `"Unknown"` never shows a badge, console pill,
  title, description or JSON-LD.
- Filter: matches a port when any of its systems is selected; `"Unknown"` is listed last.
- Helpers: `originalSystemsOf(id)` (array) and `originalSystemOf(id)` (first known, or
  `undefined`).

### `kind`

Optional classification used by the listings and the `/tools` section (defaults to
`"game"`):

- `game` — a playable port of a game (default).
- `system` — system software (e.g. the Wii menu, the Xbox 360 kernel).
- `tool` — emulator, engine, launcher, SDK or index.

Read it through `portKind(port)` (applies the default) rather than the raw field.

### `region`

Optional region of the original release when regional variants exist (e.g. `"Japan"`,
`"USA"`).

## Systems registry

`src/content/systems.ts` maps exact system labels to a canonical slug with a localized
name and brand colors. Add a slug there when a new system appears.

## Invariants (tests/content)

- Unique kebab ids and titles; every port declares `genre`, `openSource` and at least one
  `originalSystems` value.
- Every non-`Unknown` system resolves to a registry entry.
- `verified: true` ⇒ `release.version` and `verifiedAt`; `version: null` ⇒ `verified: false`.
- Dates never come from the future; `installGuide.stepsEs` length equals `steps`.
