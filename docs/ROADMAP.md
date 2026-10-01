# Roadmap

A short list. Everything already shipped is in the git history, not here.

## Priority rule

When there is time for exactly one thing, expand the systems that currently
have the thinnest coverage in the catalog grid, not the ones that are already
dense. Check the per-system counts before choosing.

## Pending

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
