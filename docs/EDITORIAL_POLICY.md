# Editorial policy

Rules for what enters the catalog. Some are enforced by data validation, the
rest by review. The public **Submit** page (`/submit`) states the same
acceptance criteria.

## Core rules

1. **Official sources only.** Every `sources`/`website`/`docs` link must be the
   project's own repository, releases page, documentation or website; an
   optional `discord` link must point to the project's official community
   server. The site hosts no files and links to no downloads, ROMs or bundles.

2. **Code availability.** Every entry records whether the project's code is open
   source (`openSource`). Closed-source ports are listed with
   `openSource: false`; the difference is visible in the filters and on the
   detail page. `openSource` describes the code of the port, never the original
   game. When the original game is proprietary, `originalGameLicense:
"proprietary"` and the "Proprietary game" badge say so, separately from the
   "Closed source" badge.

3. **No game-file distribution.** A port must not ship the original game's
   assets. You bring your own copy: you own the cartridge or digital release,
   you extract the data, you run the port.

4. **Evidence over claims.** A port is marked _verified_ only when the team
   published a release that can be pointed at (`verifiedAt`). A port gets a
   **Tested** badge only when a registered test exists for it. There is no
   manual "tested" switch.

5. **Tests by the tester.** A test is registered only by the person who ran it,
   on a hardware profile they declared (`/testing`). Nobody can claim a machine
   they do not own.

6. **Honest about removals.** If a project is taken down by legal action, its
   entry becomes a `takedown` record: marked, unlinked, hidden from the catalog
   and search engines, but not deleted.

## Acceptance criteria (mirrored in `/submit` and the issue templates)

- The port does not distribute the original game's files.
- Platforms, status, version, genre and code availability are explicit and
  verifiable.
- Open source ports link to their official repository. Closed source ports are
  accepted with `openSource: false` and a verifiable official source.
- A test proposal must come from the tester that ran it, on a declared hardware
  profile.

## Corrections and takedowns

- Broken link or wrong data: report via the per-port report link (prefilled
  GitHub issue) or a standard report issue.
- Takedown: rights holders open a takedown issue (`/legal`); valid requests are
  applied as `takedown` records.
- Every change is a public commit in this repository.
