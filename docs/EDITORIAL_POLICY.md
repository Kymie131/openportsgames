# Editorial policy

Rules the catalog follows, on-chain: they are enforced partly by data
validation and partly by human review. The public-facing **Submit** page
(`/submit`) states the acceptance criteria for proposals.

## Core rules

1. **Official sources only.** Every `sources`/`website`/`docs` link must be
   the project's official repository, releases, documentation or website.
   The site hosts no files and links to no downloads, ROMs or bundles.
2. **Open source.** A port is listed only if its project is open source and
   its official repository is verifiable.
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
   involvement; nothing is editorialized beyond the notes field.

## Acceptance criteria (mirrored in `/submit` and the issue templates)

- The project is open source and links to an official repository.
- The port does not distribute the original game's files.
- Platforms, status and version are explicit and verifiable.
- A test proposal must come from the tester that ran it, on a declared
  hardware profile.

## Corrections and takedowns

- Broken link or wrong data: report via the per-port report link (prefilled
  GitHub issue) or a standard report issue.
- Takedown: rights holders open a takedown issue (`/legal`); valid requests
  are applied quickly as `takedown` records.
- Every change is a public commit in this repository.