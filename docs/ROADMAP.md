# Roadmap

A short list. Everything already shipped is in the git history, not here.

## Priority rule

When there is time for exactly one thing, expand the systems that currently
have the thinnest coverage in the catalog grid, not the ones that are already
dense. Check the per-system counts before choosing.

## Pending

- **Bloodborne (updated 2026-10-07).** An unofficial native runtime port now
  exists: `deadinside28/bloodborne_pc` ("bbport", GPL-2.0), which runs the PS4
  x86-64 executable natively with no emulation, a custom runtime replacing the
  PS4 libraries and graphics translated to Vulkan through a shadPS4-derived
  renderer. It is listed in the catalog as a `runtime-port`; it is not a
  decompilation and still needs your own decrypted dump. The official remaster
  or PC port remains unannounced, and a Bluepoint remake pitch was reportedly
  blocked by FromSoftware (Bloomberg, Feb 2026).
- **Generations reviewed (2026-10-03).** Gen 1-2 (Atari 2600/5200/7800, Channel
  F, Intellivision, ColecoVision, Odyssey): only emulators, no native port.
  Gen 3-7 are covered; Gen 8-10 (PS4, Xbox One, Wii U, 3DS, Vita, Switch,
  PS5, Xbox Series) have no eligible native port yet beyond emulation.
- **Box-art fallbacks.** Xbox 360 has only 12 box arts on libretro-thumbnails,
  so several 360 ports still fall back to the console logo. Sources with a
  clear reuse basis are preferred; do not hotlink fan art.
- **Screenshot coverage.** 77 ports ship project screenshots and 108 ship box
  art; the remainder are new recomp repos whose READMEs ship no images yet.
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
