# Duplicate ports report

Scope: `src/content/ports` (1,186 catalog entries, takedowns excluded).
Type: **report only — no catalog changes in this commit.**
Method: parsed `id`, `title`, `game`, `portType`, `originalSystem`, `developers`
and the `sources[]` array of every port entry, then grouped by (a) shared source
URL and (b) slugs that are equal once a known suffix is removed.

## Summary

- **Same source repository:** 5 groups, all **intentional** (multi-game repos or
  the PortsDR index); 4 of them are already allow-listed in
  `tests/content/ports.test.ts`. No accidental duplicate repos found.
- **Suffix-only slug pairs:** 13 pairs. Most are **not** duplicates (the suffix
  is a sequel number or a different porting technique). **10 pairs/groups are
  candidate duplicates** and need a merge / `noindex` decision.

---

## 1. Same source repository

| Source | Ports | Verdict |
| ------ | ----- | ------- |
| `github.com/dxx-rebirth/dxx-rebirth` | `d1x-rebirth`, `dxx-rebirth` | Intentional: one engine covering Descent 1 and 2. |
| `github.com/spacestate1/namco22-decompile` | `namco-system-22-dirt-dash`, `-prop-cycle`, `-rave-racer`, `-tokyo-wars` | Intentional: one decompilation covering 4 Namco System 22 boards. |
| `github.com/elliotttate/DKC2Recomp` | `dkc-recompiled`, `dkc2-recomp` | `dkc-recompiled` ("DKC 1/2/3 Recompiled") deliberately aggregates the per-game repos. |
| `github.com/elliotttate/DKC3Recomp` | `dkc-recompiled`, `dkc3-recomp` | Same aggregator as above. |
| `portsdr.com/` | `buck-bumble-recomp`, `samurai-shodown-warriors-rage-recomp`, `super-mario-all-stars-recomp`, `timesplitters-2-recomp` | Placeholder: PortsDR is an index, no per-game link exists yet. Replace with real repos when available. |

> `dkc-recompiled` shares **two** source URLs (DKC2 and DKC3 repos). Verify the
> intent: it is currently the only entry that does so.

---

## 2. Slugs that differ only by a suffix

### 2.1 Sequel / edition numbers — **not duplicates**

The trailing `2 / 3 / ii` is a different game in the same series:

`five-nights-at-freddys` vs `-2`, `new-play-control-pikmin` vs `-2`,
`shining-force` vs `-ii`, `ssx` vs `ssx-3`.

### 2.2 Different porting technique — **not duplicates**

The base entry is a decompilation; the suffixed entry is a recompilation,
runtime port or Android fork built by a different developer from a different
repo:

`pokemon-emerald` / `pokemon-firered` / `pokemon-ruby` (`pret` decompilations)
vs their `-recomp` entries (`mstan` recompilations). `pokemon-platinum-recomp`
is also a `pret`-style decompilation but from `cybervisi0n`, so still a distinct
project. `openmw` vs `openmw-android`, `strikers` vs `strikers-android`,
`shadow-of-the-colossus-pc` vs `sotc` (runtime port vs decompilation),
`resident-evil-code-veronica` (Dreamcast) vs `-x` (Code: Veronica X).

### 2.3 Candidate duplicates — **decide merge or `noindex`**

| Pair / group | Evidence | Suggested action |
| ------------ | -------- | ---------------- |
| `pokemon-snap` & `pokemon-snap-recomp` | Both recompilations of Pokémon Snap (N64); repos `dreamsailing59-ops/Snapshot` vs `JackandBeans/Snap64Recomp`. | Keep the more maintained repo; `noindex` the other or merge. |
| `resident-evil-code-veronica-decomp` & `resident-evil-code-veronica-x` | Both "Code Veronica X" decompilations; repos `AshfordFamily/recvx-decomp` vs `fmil95/recvx-gc-decomp`. | Same game, two teams → merge or `noindex` one. |
| `fire-emblem-the-sacred-stones-fireemblem` & `fire-emblem-the-sacred-stones` | Identical game; both forks of `fireemblem8u` (`FireEmblemUniverse` vs `laqieer`). **Source that stays: `FireEmblemUniverse/fireemblem8u` (upstream).** | Likely one fork → merge into `fire-emblem-the-sacred-stones` (upstream source). |
| `need-for-speed-carbon-codepdbh` & `need-for-speed-carbon` | Same game, two recompilation repos (`codepdbh` vs `Sampreeth004`). | Duplicate → pick one, `noindex`/merge the other. |
| `kings-field-recomp` (`verdite1`) & `verdite2` | Same developer (`Voicedrew11`), same game (King's Field); `verdite1`/`verdite2` are two parts. | Merge into one King's Field entry; also fix the `verdite`-style titles. |
| `unleashed-recompiled` & `unleashedrecomp-nx` | Same project; `-nx` is the Switch port of `hedge-dev/UnleashedRecomp` by another dev. | Treat the NX build as a variant of one entry, not a separate port. |
| `blue-droid` & `reblue` | Two recompilations of Blue Dragon by different devs. | Duplicate-ish → review. |
| `skate-3-mobile` & `skate-3-recomp` | Two recompilations of Skate 3 by different devs. | Duplicate-ish → review. |
| `bloodborne-android` & `bloodborne-pc` | Two runtime ports of Bloodborne, different platforms. | Platform variants; keep both or mark one `noindex`. |
| `the-force-engine` & `the-force-engine-vr` | VR fork of the same engine. | Variant; keep both or merge. |

---

## 3. Same game, independent projects (informational)

Several games intentionally have multiple unrelated ports (one entry each).
These are **not** duplicates — do not merge:

- **Doom:** `chocolate-doom`, `crispy-doom`, `doomretro`, `dsda-doom`,
  `eternity-engine`, `gzdoom`, `nugget-doom`, `odamex`, `woof`.
- **Quake:** `darkplaces`, `ironwail`, `quakespasm`, `vkquake`.
- **Quake II / Doom 3:** `quake-ii-recomp` vs `yamagi-quake2`;
  `dhewm3` vs `doom3-dude`.
- **Ocarina of Time:** `oot-gc-decomp`, `oot-psp`, `ship-of-harkinian`.
- **Super Mario 64 / World:** `sm64ex`, `ghostship`, `infinite-mario-64-ever`,
  `smw-rev`, `super-mario-world-recomp`.
- **Cave Story:** `doukutsu-rs`, `nxengine-evo`.

## Recommended decisions checklist

1. Confirm the two shared-source edge cases in §1 (`dkc-recompiled`, PortsDR placeholders).
2. Review the 10 rows in §2.3; for each choose **merge**, **variant**, or **`noindex`**.
3. Once decided, add a `noindex` flag (or a `duplicateOf` field) and update
   `tests/content/ports.test.ts` so the decision is enforced.

## Temporary code marker

`tests/content/ports.test.ts` allow-lists `https://github.com/FireEmblemUniverse/fireemblem8u`
(`fire-emblem-the-sacred-stones` + `fire-emblem-the-sacred-stones-fireemblem`) **only**
so the shared-source invariant passes while both entries coexist. This allow-list entry
is **temporary** and must be removed in the same change that fuses
`fire-emblem-the-sacred-stones-fireemblem` into `fire-emblem-the-sacred-stones` (301).
