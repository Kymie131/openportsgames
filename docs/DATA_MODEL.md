# Data model

The catalog is data in this repository, validated by zod before anything is
built. This is the reference for that data: the entities, the invariants the
content tests enforce, and the public API payload.

## Entities

### Port

A native port entry. `src/lib/ports/schema.ts` defines the shape:

| Field                 | Type                          | Notes                                                                                                                                                                          |
| --------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                  | string                        | kebab-case slug, unique, used in the URL                                                                                                                                       |
| `title`               | string                        | project name as used by the project itself                                                                                                                                     |
| `game`                | string                        | the original game the port recreates                                                                                                                                           |
| `developers`          | string[]                      | 1–6 developer/team names                                                                                                                                                       |
| `publisher`           | string                        |                                                                                                                                                                                |
| `originalYear`        | number                        | 1970–2099                                                                                                                                                                      |
| `genre`               | enum                          | `platformer`, `action-adventure`, `rpg`, `racing`, `strategy`, `shooter`, `fighting`, `sports`, `simulation`, `open-world`, `puzzle`, `music`                                  |
| `openSource`          | boolean                       | whether the project's code is open source                                                                                                                                      |
| `originalGameLicense` | enum?                         | `proprietary` \| `freeware` \| `open`; describes the original game when `openSource` only covers the port's code                                                               |
| `portType`            | enum                          | `decompilation`, `recompilation`, `reimplementation`, `source-port`, `runtime-port`                                                                                            |
| `platforms`           | enum[]                        | `windows`, `linux`, `macos`, `android`, `web`, `ios`                                                                                                                           |
| `status`              | enum                          | `stable`, `beta`, `alpha`, or `takedown`                                                                                                                                       |
| `release`             | `{ version?, date? }`         | nullable both; version must be X.Y/X.Y.Z (+suffix)                                                                                                                             |
| `sources`             | https URL[]                   | official repositories/releases/websites (minimum 1)                                                                                                                            |
| `website`, `docs`     | https URL?                    | official project website / documentation                                                                                                                                       |
| `discord`             | https URL?                    | official community server (Discord) of the project                                                                                                                             |
| `license`             | `{ spdx, note? }`             | SPDX identifier                                                                                                                                                                |
| `verified`            | boolean                       | release verified by the team                                                                                                                                                   |
| `verifiedAt`          | date?                         | required predicate (see below)                                                                                                                                                 |
| `notes`               | string?                       | short editorial description                                                                                                                                                    |
| `notesEs`             | string?                       | Spanish mirror of `notes`; required whenever `notes` exists (content-test invariant)                                                                                           |
| `originalSystem`      | string?                       | original console/system                                                                                                                                                        |
| `features`            | string[]?                     | notable features (max 20)                                                                                                                                                      |
| `featuresEs`          | string[]?                     | Spanish mirror of `features`; when present, its length equals `features`                                                                                                       |
| `requirements`        | `{ minimum?, recommended? }`? | free text                                                                                                                                                                      |
| `screenshots`         | array?                        | `{ src, alt, credit, width?, height? }`, https, max 12; `width`/`height` are optional layout hints                                                                             |
| `cover`               | object?                       | `{ src, alt, credit }`; box art shown on cards and detail pages                                                                                                                |
| `installGuide`        | object?                       | `{ title?, steps, stepsEs? }`; `steps` runs 1–20 of 3–300 chars; optional `title`; `stepsEs` mirrors `steps`; when present, its length equals `steps` (content-test invariant) |

Notes:

- `verified` is `true` only when a project-published release and its date can be
  pointed at.
- `installGuide.stepsEs` must mirror `steps` one-to-one.
- `notesEs` is required as soon as a port has `notes`, so the "About this port"
  section never falls back to English. `tests/content/localization.test.ts`
  enforces it.

### Catalog state

`src/lib/ports/catalog.ts` defines the query state shared by the three catalog
pages. A URL round-trips through `parseCatalogState`/`catalogStateToParams`;
empty values and `all` filters are dropped. When sorted by GitHub stars,
`src/content/github-stars.ts` maps each port id to its count; the map is
refreshed by `scripts/check-latest-releases.mjs` on the weekly catalog workflow.

### Takedown variant

`status: "takedown"` keeps only `id`, `title` and `rawUrl`. Takedown entries are
validated but excluded from `ports`, the site and the sitemap.

### Hardware profile

| Field       | Type                                                      |
| ----------- | --------------------------------------------------------- |
| `id`        | slug                                                      |
| `label`     | string                                                    |
| `kind`      | `pc` \| `android`                                         |
| `specs`     | cpu, gpu, ram, os (required); storage, display (optional) |
| `tester`    | GitHub username                                           |
| `updatedAt` | date                                                      |

Details in `docs/TESTING_METHODOLOGY.md`.

### Test record

| Field        | Type                                                               |
| ------------ | ------------------------------------------------------------------ |
| `id`         | slug                                                               |
| `portId`     | must reference a known port                                        |
| `testerId`   | GitHub username                                                    |
| `hardwareId` | must reference a known profile; its `tester` must equal `testerId` |
| `date`       | date                                                               |
| `version`    | semantic version                                                   |
| `result`     | `pass` \| `fail`                                                   |
| `notes`      | string?                                                            |

## Invariants enforced by content tests

- Unique ids across each collection; ids are lowercase kebab slugs.
- Every port declares a valid `genre` and a boolean `openSource`.
- `verified: true` ⇒ `release.version != null` and `verifiedAt` is present;
  `version == null` ⇒ `verified: false`.
- Versions match the relaxed semantic version (X.Y, X.Y.Z, optional suffix).
- Hardware and test dates never come from the future.
- Tests reference known ports and hardware; hardware tester matches `testerId`.
- Every port id has an entry in the `originalSystemById` meta map.
- Detail-field invariants: features/requirements/screenshots constraints;
  `installGuide.stepsEs` length must equal `steps`.

These live in `tests/content/` and run in CI.

## Public API: `/api/ports.json`

A versioned snapshot of the full catalog, including tests and hardware. See
`docs/API.md`. The builder is `src/lib/ports/api-json.ts`.
