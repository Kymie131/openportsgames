# Roadmap

A short list. Everything already shipped is in the git history, not here.

## Priority rule

When there is time for exactly one thing, expand the systems that currently
have the thinnest coverage in the catalog grid, not the ones that are already
dense. Check the per-system counts before choosing.

## Pending

- **Screenshot coverage.** After the first passes, 97 ports still have no
  official capture (mostly very new recompilation repos whose READMEs ship no
  images yet). Each candidate needs a per-repo `docs/`, `screenshots/` or
  `media/` check; do not hotlink badges, logos or fan art.
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
