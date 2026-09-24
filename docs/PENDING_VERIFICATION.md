# Pending verification

Candidates whose official data (latest release, license, or a stable
distribution channel) I could not confirm when the catalog was last audited
on **2026-09-22**. These entries are either kept with `verified: false` or
excluded outright — "I couldn't confirm it" is recorded here instead of
pretended away.

This file is the paper trail of the homework: every row is a case I actually
sat down and checked, not a list of vibes.

## Kept in the catalog (verified: false)

| Port                        | Reason                                                                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| sm64ex                      | No numbered releases; builds track the repository.                                                                                   |
| OpenLara                    | No numbered releases; rolling repository builds.                                                                                     |
| Xash3D FWGS                 | Distribution uses rolling `continuous` releases (marked prerelease).                                                                 |
| OpenJK                      | Distribution uses a rolling `latest` release.                                                                                        |
| EDuke32                     | Distributed as rolling builds from eduke32.com; no versioned release metadata.                                                       |
| OpenXcom                    | Only tagged release is `v1.0` (2014); current builds are distributed via openxcom.org.                                               |
| pikmin                      | Decompilation with no tagged releases; builds track the repository.                                                                  |
| petari                      | Work-in-progress Super Mario Galaxy decompilation with no releases.                                                                  |
| ctr-native                  | Distributed as `beta-*` prerelease playtest tags.                                                                                    |
| pokered                     | Disassembly without release metadata; builds the original Game Boy ROM.                                                              |
| super-mario-bros-remastered | Remake reusing Nintendo-owned assets; now ships versioned releases (`1.1.0-stable`, Sep 2026) but stays unverified on asset grounds. |
| symphony-recomp             | Open beta (`v0.5.xb`) releases; no stable version yet.                                                                               |
| minish-cap                  | Research decompilation with no released binary.                                                                                      |
| marathon-recomp             | No tagged releases; builds track the repository.                                                                                     |

These ports are shown in the catalog with a visible "not verified" marker —
not because I doubt them, but because a catalog that marks everything
"verified" would be lying. The weekly `catalog-update` action will flag them
as soon as versioned releases exist.

## Excluded from the catalog

The following candidates from the original backlog could not be included for
data integrity reasons. If a verifiable official source appears, reopen the
related proposal.

- **re3 / reVC (GTA III / Vice City)** — the canonical mirrors at
  `GTAModding/re3` and `GTAModding/reVC` return HTTP 451 (removed by GitHub for
  legal reasons). No official distribution remains available.
- **OpenRW (GTA San Andreas)** — project is stalled and its repository is no
  longer reachable under its canonical owner.
- **Mario Party 3 port** — no credible first-party port project with an official
  release channel could be located.
- **Banjo-Kazooie / Perfect Dark recompilations** — these ship via personal
  recompilation releases without a stable official source URL to link to.

None of these rows means the project doesn't exist or isn't good. It means I
could not, in good faith, point the catalog at an official link that would
still be there next week.

## Candidates checked on 2026-09-22

Audited against `distrobox-gaming/docs/sources.md` (recompilation / native
port backlog). The follow-up candidates were **included** and are listed in the
catalog: Starship, SpaghettiKart, Lighthouse, GoldenEye 007 Recompiled, DK64
Recompiled, Wave Race 64 Recompiled, Road Rash 64 Recompiled, F-Zero SNES
Recompiled, DKC 1/2/3 Recompiled, Metroid Prime Hunters Recompiled, Dab's Mod,
TriAevum, PrBoom-Plus RT and DUDE.

Still **excluded**, with rationale:

- **Render96ex (Render96 N64-exclusive branch)** — first tagged release is
  still pending; until a versioned release exists there is no `verified`
  entry to audit.
- **Sonic '06 (Sonic Project '06)** — a fan-made closed-source remake built
  with Unity, not a native port of the original game; falls outside the
  catalog's definition (`genre`/`portType` model). The separate native
  recompilation **MarathonRecomp** (sonicnext-dev) is a different project and is
  listed in the catalog as `verified: false`.
- **Midnight Club LA (Xbox360-Native-Ports collection)** — the repository is a
  multi-game dump of several Xbox 360 native ports, which breaks the
  one-port-per-entry model and the weekly release comparison; because its tag
  space is shared, a per-game entry cannot be kept `verified` reliably.

The guiding line for every decision here is in the editorial policy: we only
list projects with an official source we can link to, and we never link to
unofficial or re-uploaded binaries.
