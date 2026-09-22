# Editorial policy

Rules the catalog follows, on-chain: they are enforced partly by data
validation and partly by human review. The public-facing **Submit** page
(`/submit`) states the acceptance criteria for proposals.

## Core rules

1. **Official sources only.** Every `sources`/`website`/`docs` link must be
   the project's official repository, releases, documentation or website; an
   optional `discord` link must point to the project's official community
   server.
   The site hosts no files and links to no downloads, ROMs or bundles.
2. **Code availability.** Every entry records whether the project's code is
    open source (`openSource`). Ports with closed source are not excluded, but
    they must be listed with `openSource: false`, and the catalog never hides
    or edits around that fact. A fully open source project whose repository is
    verifiable is the norm; the filter and the detail page make the difference
    visible.
 3. **No game-file distribution.** A port must not distribute the original
    game's assets; the player must own the original game.
 4. **Evidence over claims.** A port is marked *verified* only when the team
    published its release (`verifiedAt`). A port shows a **Tested** badge only
    when a registered test exists for it. No test, no badge.
 5. **Tests by the tester.** A test is registered only by the tester that ran
    it, on a declared public hardware profile (`/testing`).
 6. **Honest about removals.** If a project is removed by legal action, its
    entry is marked `takedown`, unlinked and hidden — never silently deleted.
 7. **AI disclosure.** Every entry records whether the project discloses AI
    involvement (`aiDisclosure`); nothing is editorialized beyond the notes field.

## Acceptance criteria (mirrored in `/submit` and the issue templates)

- The port does not distribute the original game's files.
- Platforms, status, version, genre and code availability are explicit and
  verifiable.
- Open source ports link to their official repository. Closed source ports
  are accepted with `openSource: false` and a verifiable official source.
- A test proposal must come from the tester that ran it, on a declared
  hardware profile.

## Corrections and takedowns

- Broken link or wrong data: report via the per-port report link (prefilled
  GitHub issue) or a standard report issue.
- Takedown: rights holders open a takedown issue (`/legal`); valid requests
  are applied quickly as `takedown` records.
- Every change is a public commit in this repository.