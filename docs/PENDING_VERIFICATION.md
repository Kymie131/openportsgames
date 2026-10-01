# Pending verification

`verified: false` does not mean "this project is bad" or "the port is broken".
It means one specific thing: **no release has been confirmed against the source
declared by that entry**, so the catalog does not vouch for its version.

The flag is a review queue, and it is deliberately independent from the version
field. An entry may carry a documented `release.version` and still sit at
`verified: false` when that version has not been re-checked against the source,
or when the entry is held on editorial grounds (asset provenance, licensing,
or a source that is not the project's own). Only the reverse is forbidden:
`verified: true` requires both a version and a `verifiedAt`.

## The invariant

`tests/content/ports.test.ts` enforces the following, so the data cannot drift
into a half-verified state:

| Condition                 | Requirement                                |
| ------------------------- | ------------------------------------------ |
| `verified: true`          | `release.version` and `verifiedAt` present |
| `verified: false`         | `verifiedAt` absent                        |
| `release.version: null`   | `release.date: null` and `verified: false` |
| `release.version` present | `release.date` is a valid ISO date         |

Release dates are additionally checked to never be in the future.

## The queue is derived, not hand-maintained

There is deliberately **no table of unverified entries in this file**. A
hand-kept list of this kind goes stale the moment a port is added, and a stale
list is worse than none: it looks authoritative while being wrong.

The current queue is whatever the data says. To see it:

```bash
npm run validate   # runs the content tests, including the invariant above
npm run check:updates  # compares declared versions against upstream releases
```

`check:updates` runs `scripts/check-latest-releases.mjs`, which fetches the
latest release for every port that declares one, and writes a report to
`catalog-check-report.md`. The `catalog-update` workflow runs it on a schedule,
reads that report, and opens or updates an issue listing the entries whose
upstream release is newer than the catalog. The report is generated and
git-ignored, so it is never a source of truth.

## Promoting an entry to verified

1. Read the report (locally via `npm run check:updates`, or from the
   `catalog-update` issue) and pick an entry.
2. Open the entry's declared official source and confirm the release yourself.
   Do not trust the report's version string on its own: check the tag, the
   release date, and that the release is for the project the entry claims.
3. Reject the candidate when the source is a third-party build, when the
   "release" is a nightly or continuous artifact, or when the entry is held for
   editorial reasons. In that case leave `verified: false` and say why in the
   entry's `notes`; a rejected candidate needs no documentation anywhere else.
4. When the release is confirmed, set `release.version`, `release.date`,
   `verified: true` and `verifiedAt` to the date of the confirmation.
5. Run `npm run validate` before committing. The tests enforce the invariants
   above, so a partial edit fails the build.

## Editorial exclusions

Some projects are deliberately never promoted, because cataloguing them would
misrepresent what they are. These are decisions, not pending work:

- **Decompilations whose only build target is a console ROM.** The repository
  builds a `.n64`/`.bin`, not a runnable port on a supported platform. This
  applies to the retail-decomp projects behind entries such as
  `perfect-dark-port`, and to the Castlevania, N64 and SNES ROM decompilations
  the catalog references in `notes`.
- **Mods that redistribute retail assets.** A mod is listed as a mod with its
  upstream credited, and is never presented as a clean port. `perfect-dark-dabs-mod`
  is the reference example: it is a community decompilation with mod features,
  and its `notes` state that.
- **Store-ripped application packages.** Repacked APK/IPA builds are not
  catalogued as ports; a rescue-style project that distributes repackaged
  binaries is out of scope for the same reason.
- **Projects with no usable official source.** If the canonical mirror is gone,
  the entry is removed rather than pointed at a mirror of unknown provenance.
  `re3` and `reVC` are the reference case: their canonical GitHub mirrors
  return `404`, and no verified source is claimed for them.

## Keeping this file honest

- Prefer deleting a claim to softening it. If a statement here cannot be
  checked against the code, the data or an upstream project, it does not
  belong in this file.
- Counts and lists belong to the code and the generated report, not to prose.
  Anything that would need updating when a port is added is the wrong place to
  keep it.
