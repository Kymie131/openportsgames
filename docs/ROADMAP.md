# Roadmap

A short list. Everything already shipped is in the git history, not here.

## Priority rule

When there is time for exactly one thing, expand the systems that currently
have the thinnest coverage in the catalog grid, not the ones that are already
dense. Check the per-system counts before choosing.

## Pending

- **Bloodborne (reviewed 2026-10-03, no native port).** As of this review there
  is no native port, decompilation or static recompilation of Bloodborne (PS4).
  It runs on PC only through the shadPS4 emulator, which is out of scope for
  this catalog (it lists native ports, not emulators). Re-check next cycle.
- **Screenshot coverage.** After the first passes, 114 ports still have no
  project capture. 66 of them now show official box art via the `cover` field;
  the rest fall back to the console logo. Do not hotlink badges, logos or fan
  art; prefer the project's own `docs/`, `screenshots/` or `media/` folder.
- **Atari systems (reviewed 2026-10-03, no results).** No native port,
  decompilation or static recompilation of Atari consoles was found in the
  primary lists (Recompendium, PCGamingWiki _List of unofficial ports_, GitHub
  `decompilation` / `static-recompilation` topics). Re-check next cycle; do not
  invent entries.
- **Sixth-generation systems** (PS2, Dreamcast). The catalog has few and the home
  page does not treat them as first-class sections yet. Verify each candidate
  against its official source first: most decompilations of these systems build
  a disc image, not a runnable port, so they are not eligible.
- **More Android coverage per hardware target.** A test asserts at least one
  Android port per hardware target; several targets still have exactly one.
- **Console logo artwork.** Systems without real artwork fall back to the
  textual `SystemMark`. Only transparent PNGs owned by this repo are added; see
  `src/content/ports/console-logos.ts` and its test.

## Not planned

- Store-ripped application packages, and decompilations that only build a
  console ROM. See `docs/PENDING_VERIFICATION.md` for the reasoning.
- Ports of ports: an entry is either an independent implementation or it is
  listed as a mod, never both.
