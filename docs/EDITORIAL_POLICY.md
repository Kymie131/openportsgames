# Editorial policy

These are the rules this catalog lives by. Some are enforced by data
validation, the rest by human review — meaning by me, before something is
allowed in. The public-facing **Submit** page (`/submit`) states the same
acceptance criteria in plain language.

The rules come from a simple place: I grew up on forums where half the links
were dead and the other half was malware dressed as an "ISO pack". A catalog
that links to crap is not a catalog, it is a problem. So the rules exist to
keep this list useful, safe and honest, in that order.

## Core rules

1. **Official sources only.** Every `sources`/`website`/`docs` link must be
   the project's own repository, releases page, documentation or website; an
   optional `discord` link must point to the project's official community
   server.
   The site hosts no files and links to no downloads, ROMs or bundles —
   ever.

   The reason is both legal and practical. Legally, those projects exist in a
   gray area that lives or dies by the goodwill of the rights holders, and a
   site that redistributes files puts the whole hobby at risk. Practically, a
   re-uploaded or auto-built binary is a classic malware vector, and a URL
   pointing at an unofficial mirror can disappear overnight. If we only link
   the project's own channel, the link is as stable as the project is.

2. **Code availability.** Every entry records whether the project's code is
   open source (`openSource`). Closed-source ports are not banned — some great
   projects are not open, and hiding that would be dishonest. They are listed
   with `openSource: false` and the difference is visible in the filters and
   on the detail page. The norm is fully open and verifiable; the rest are
   listed, not laundered.

3. **No game-file distribution.** A port must not ship the original game's
   assets. The whole deal with these projects is that you bring your own
   copy: you own the cartridge or the digital release, you extract the data,
   you run the port. That is what keeps native ports legal and why the guides
   page insists on it.

4. **Evidence over claims.** A port is marked _verified_ only when the team
   published a release we can actually point at (`verifiedAt`). A port gets a
   **Tested** badge only when a registered test exists for it. No test, no
   badge — there is no manual "tested" switch anywhere, so a stale claim
   cannot survive a rebuild.

5. **Tests by the tester.** A test is registered only by the person who ran
   it, on a hardware profile they publicly declared (`/testing`). If I
   verified a port on my PC, the record says so. Nobody can claim a machine
   they don't own.

6. **Honest about removals.** If a project is taken down by legal action, its
   entry becomes a `takedown` record: marked, unlinked, hidden from the
   catalog and search engines, but never silently deleted. A removal is a
   fact in the project's history, not something to scrub.

7. **AI disclosure.** Every entry records whether the project discloses AI
   involvement (`aiDisclosure`). We record the fact and do not editorialize
   beyond the notes field — but the fact is there for people who care.

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
  GitHub issue) or a standard report issue. If the report is right, it gets
  fixed; the project has no pride to protect, only data to keep accurate.
- Takedown: rights holders open a takedown issue (`/legal`); valid requests
  are applied quickly as `takedown` records.
- Every change is a public commit in this repository. You can always see what
  was added, corrected or removed, and why.
