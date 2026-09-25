# Data model

The catalog is data living in this repository, and zod validates it before
anything is built. This document is the reference for that data: what the
entities are, which invariants the content tests enforce, and what the public
API payload looks like.

Why model the catalog as code instead of a spreadsheet? Because then every
entry goes through the same review as a patch, every constraint is tested
instead of trusted, and the whole thing is diffable. When I update a version
number, you can see the diff; when somebody proposes a port, the fields they
fill in are the exact contract we validate against.

## Entities

### Port

A native port entry. `src/lib/ports/schema.ts` defines the shape:

| Field             | Type                          | Notes                                                                                                                                                                                                        |
| ----------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`              | string                        | kebab-case slug, unique, used in the URL                                                                                                                                                                     |
| `title`           | string                        | project name as used by the project itself                                                                                                                                                                   |
| `game`            | string                        | the original game the port recreates                                                                                                                                                                         |
| `developers`      | string[]                      | 1–6 developer/team names                                                                                                                                                                                     |
| `publisher`       | string                        |                                                                                                                                                                                                              |
| `originalYear`    | number                        | 1970–2099                                                                                                                                                                                                    |
| `genre`           | enum                          | `platformer`, `action-adventure`, `rpg`, `racing`, `strategy`, `shooter`, `fighting`, `sports`, `simulation`, `open-world`                                                                                   |
| `openSource`      | boolean                       | whether the project's code is open source                                                                                                                                                                    |
| `portType`        | enum                          | `decompilation`, `recompilation`, `reimplementation`, `source-port`                                                                                                                                          |
| `platforms`       | enum[]                        | `windows`, `linux`, `macos`, `android`                                                                                                                                                                       |
| `status`          | enum                          | `stable`, `beta`, `alpha`, or `takedown`                                                                                                                                                                     |
| `release`         | `{ version?, date? }`         | nullable both; version must be X.Y/X.Y.Z (+suffix)                                                                                                                                                           |
| `sources`         | https URL[]                   | official repositories/releases/websites (minimum 1)                                                                                                                                                          |
| `website`, `docs` | https URL?                    | official project website / documentation                                                                                                                                                                     |
| `discord`         | https URL?                    | official community server (Discord) of the project                                                                                                                                                           |
| `license`         | `{ spdx, note? }`             | SPDX identifier                                                                                                                                                                                              |
| `aiDisclosure`    | boolean                       | project discloses AI involvement                                                                                                                                                                             |
| `verified`        | boolean                       | release verified by the team                                                                                                                                                                                 |
| `verifiedAt`      | date?                         | required predicate (see below)                                                                                                                                                                               |
| `notes`           | string?                       | short editorial description                                                                                                                                                                                  |
| `originalSystem`  | string?                       | original console/system                                                                                                                                                                                      |
| `features`        | string[]?                     | notable features (max 20)                                                                                                                                                                                    |
| `requirements`    | `{ minimum?, recommended? }`? | free text                                                                                                                                                                                                    |
| `screenshots`     | array?                        | `{ src, alt, credit }`, https, max 12                                                                                                                                                                        |
| `installGuide`    | object?                       | `{ title?, steps, stepsEs? }`; `steps` runs 1–20 of 3–300 chars; optional `title`; `stepsEs` is the hand-written Spanish mirror of `steps`; when present, its length equals `steps` (content-test invariant) |

Some notes on why the fields are shaped this way:

- `verified` is not an editorial opinion. It is `true` only when we can point
  at a release the project published and the date we confirmed it. Claims you
  cannot reproduce are exactly the kind of thing this catalog exists to avoid.
- `aiDisclosure` records what the project itself says. We record data; we do
  not editorialize beyond the `notes` field. If a project is open about it,
  that is worth knowing. If it is not, that is also worth knowing.
- `installGuide.stepsEs` must mirror `steps` one-to-one. The Spanish guide is
  a real translation a human wrote and reviewed, not machine output, and the
  test keeps the two from drifting out of sync.

### Catalog state

`src/lib/ports/catalog.ts` defines the query state shared by the three catalog
pages. A URL round-trips through `parseCatalogState`/`catalogStateToParams`;
empty values and `all` filters are dropped from the URL. When the catalog is
sorted by GitHub stars, `src/content/github-stars.ts` maps each port id to its
count; the map is refreshed by `scripts/check-latest-releases.mjs` on the
weekly catalog workflow.

### Takedown variant

`status: "takedown"` keeps only `id`, `title` and `rawUrl` (the offending
artifact before removal). Takedown entries are validated but **excluded** from
`ports`, the site and the sitemap. They are a removal record, not content. If
rights holders ask us to take something down, the response is a transparent
commit, never a silent deletion.

### Hardware profile

| Field       | Type                                                      |
| ----------- | --------------------------------------------------------- |
| `id`        | slug                                                      |
| `label`     | string                                                    |
| `kind`      | `pc` \| `android`                                         |
| `specs`     | cpu, gpu, ram, os (required); storage, display (optional) |
| `tester`    | GitHub username                                           |
| `updatedAt` | date                                                      |

Why does hardware matter this much? Because "it works on my machine" is only
useful if the machine is described. The whole testing story of this site is
built on reproducible, public hardware. The details are in
`docs/TESTING_METHODOLOGY.md`; the reasoning lives in the /testing page.

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

The `tester`/`hardwareId` tie is on purpose: nobody can run a test on a
machine they haven't declared, which is the whole credibility of the badge.

## Invariants enforced by content tests

- Unique ids across each collection; ids are lowercase kebab slugs.
- Every port declares a valid `genre` and a boolean `openSource`.
- `verified: true` ⇒ `release.version != null` and `verifiedAt` is present;
  `version == null` ⇒ `verified: false`.
- Versions match the relaxed semantic version (X.Y, X.Y.Z, optional suffix).
- Hardware and test dates never come from the future.
- Tests reference known ports and hardware; hardware tester matches
  `testerId`.
- Every port id has an entry in the `originalSystemById` meta map.
- Detail-field invariants: features/requirements/screenshots constraints;
  `installGuide.stepsEs` length must equal `steps`.

These live in `tests/content/` and run in CI. A port that violates one of them
does not build, and a build that does not validate cannot deploy. That is the
difference between "we hope this is right" and "the data cannot be wrong without
someone noticing."

## Public API: `/api/ports.json`

A versioned snapshot of the full catalog, including tests and hardware. See
`docs/API.md` for the schema and examples. The builder is
`src/lib/ports/api-json.ts`; the file is the same artifact CI validates.
