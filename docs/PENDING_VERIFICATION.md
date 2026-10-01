# Pending verification

Candidates whose official data (latest release, license, or a stable
distribution channel) I could not confirm when the catalog was last audited
on **2026-09-22**. These entries are either kept with `verified: false` or
excluded outright. "I couldn't confirm it" is recorded here instead of
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
| ecwolf                      | Distributed from maniacsvault.net rather than GitHub releases, so the weekly release check cannot track it.                          |
| perfect-dark-port           | Rolling `ci-dev-build` tag instead of versioned releases.                                                                            |
| psprecomp                   | No tagged releases; the Vice City Stories profile builds from the repository.                                                        |
| re-lcs                      | Hosted on Gitea with builds from a branch, no tagged releases and no license file, so the weekly release check cannot track it.      |

These ports are shown in the catalog with a visible "not verified" marker,
not because I doubt them. A catalog that marks everything "verified" would be
lying. The weekly `catalog-update` action will flag them as soon as versioned
releases exist.

## Excluded from the catalog

The following candidates from the original backlog could not be included for
data integrity reasons. If a verifiable official source appears, reopen the
related proposal.

- **re3 / reVC (GTA III / Vice City)**: the canonical mirrors at
  `GTAModding/re3` and `GTAModding/reVC` return HTTP 451 (removed by GitHub for
  legal reasons). No official distribution remains available.
- **OpenRW (GTA San Andreas)**: project is stalled and its repository is no
  longer reachable under its canonical owner.
- **Mario Party 3 port**: no credible first-party port project with an official
  release channel could be located.
- **Banjo-Kazooie / Perfect Dark recompilations**: these ship via personal
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

- **Render96ex (Render96 N64-exclusive branch)**: first tagged release is
  still pending; until a versioned release exists there is no `verified`
  entry to audit.
- **Sonic '06 (Sonic Project '06)**: a fan-made closed-source remake built
  with Unity, not a native port of the original game; falls outside the
  catalog's definition (`genre`/`portType` model). The separate native
  recompilation **MarathonRecomp** (sonicnext-dev) is a different project and is
  listed in the catalog as `verified: false`.
- **Midnight Club LA (Xbox360-Native-Ports collection)**: the repository is a
  multi-game dump of several Xbox 360 native ports, which breaks the
  one-port-per-entry model and the weekly release comparison; because its tag
  space is shared, a per-game entry cannot be kept `verified` reliably.

The guiding line for every decision here is in the editorial policy: we only
list projects with an official source we can link to, and we never link to
unofficial or re-uploaded binaries.

## Candidates checked on 2026-09-30

A reader-supplied backlog of fifty names was audited against the catalog.
Fourteen were **added**: OpenGOAL, REDRIVER2, WipeOut Phantom Edition, the
Sonic CD decompilation, KeeperFX, ECWolf, the Perfect Dark PC port, LCS Recomp,
PSPRecomp, the four Namco System 22 games and reLCS.

Still **excluded**, with rationale:

- **reLCS (GTA Liberty City Stories decompilation)**: listed above. The
  `GTAModding` mirrors are gone, but `gitea.com/initdream/relcs` is a separate
  and working native port, so it is in the catalog on its own. LCS Recomp is a
  third, unrelated project.
- **Silent Hill (shdecompilations)**: the README states the project "is not,
  and will not, produce a port". It is a decompilation with no PC target, so
  there is nothing to run.
- **Smash Remix**: a Brawl mod that reuses retail assets. Mods are out of
  scope for the catalog, and this one is not a recompilation of anything.
- **Silent Hill 2: Enhanced Edition**: enhancement packages that patch the
  retail PC binary through a `d3d8` shim. It is not a decompilation, a
  recompilation, a reimplementation or a source port, so none of the
  `portType` values fit.
- **Perfect Dark decompilation (n64decomp)**: the upstream matching
  decompilation builds a N64 ROM, not a PC build. The separate PC port is the
  entry we list.
- **Namco System 22 (Prop Cycle, Rave Racer, Tokyo Wars, Dirt Dash)**: no
  native port project exists. Searches only turn up MAME and forks of it, and
  an emulator is not a port. Worth revisiting if someone starts one.
- **Breath of the Wild and Metroid Prime decompilations**: engine research
  with no playable build and no release channel.
- **Descent-Mobile**: Descent is already listed twice, under D1X-Rebirth and
  DXX-Rebirth. An Android build of the same engine is not new information.
- **FTE Quake World**: Quake is already listed under vkQuake. QuakeWorld is a
  separate codebase from a separate team and is not a port of the retail
  release.
- **Simpsons: Hit & Run native port and the 2007 Simpsons Game PC port**:
  both are community builds of leaked source, with no first-party repository
  to link to.
- **Sonic R**: forum repacks only. No project with an official release channel
  could be located.
- **PortMaster rescues (Mass Effect Infiltrator, Modern Combat 3, N.O.V.A 3,
  Real Racing 3)**: these need an APK ripped from a store download. There is
  no official source to point at and nothing to verify, so they stay out.

## Correction to the 2026-09-30 audit

The Namco System 22 line above was wrong. `spacestate1/namco22-decompile`
does exist, is MIT licensed, and all four games are playable with sound, with
Windows and Linux packages on its releases page. All four are now in the
catalog.

The mistake was trusting a candidate list that labelled a project `PC`
without reading what the project actually builds. Reading the READMEs turned
up a second rule worth writing down, because it decides several borderline
cases:

**A project that rebuilds the original console binary is not a PC port.** A
matching decompilation that outputs a `.n64` or `.bin` runs on an emulator, not
on the reader's machine. The catalog lists the native counterpart instead, so
these stay out even when the game is a good fit:

- **DOOM64-RE** (`Erick194/DOOM64-RE`, GPL-3.0): reverse engineering of Doom
  64 that compiles back to a N64 ROM through `MAKE_ROM.bat`, and needs the N64
  SDK on Windows XP. There is no Doom 64 entry in the catalog because no
  native one exists yet, not because this fills the gap.
- **sotn-decomp** (`Xeeynamo/sotn-decomp`, AGPL-3.0): compiles byte-for-byte to
  the original PSX, PSP and Saturn binaries, and its release only ships
  Allegrex and MIPS toolchains. The PC counterpart is SymphonyRecomp, already
  in the catalog.
- **n64decomp/banjo-kazooie** (CC0-1.0): 100% matched, but it builds a
  `baserom.*.z64`. The PC counterpart is BanjoRecomp, already in the catalog.
  The GitHub repository is also only a mirror; the canonical source is
  `gitlab.com/banjo.decomp/banjo-kazooie`.
- **PaperBoat** (`pmret/papermario`, 1619 stars, `papermar.io`): the site
  reports 100% on the US, PAL and iQue releases, which are N64 ROMs verified
  against SHA-1 hashes. The PC counterpart is star-rod, already in the
  catalog.
- **RSDKv5 Decompilation** (`Rubberduckycooly/RSDKv5-Decompilation`): a
  decompilation of the Retro Engine v5 and v5U themselves, not of a game. Its
  own README points Sonic Mania players at RSDKModding's Sonic Mania
  Decompilation, which the catalog already lists.

Two notes on the candidates that did make it in. reLCS is hosted on Gitea at
`gitea.com/initdream/relcs` and builds from the `lcs` branch, so it is listed
with `verified: false`: no tagged releases, no license file, and no stars yet.
And `wothke/wipeout-phantom-edition` moved to an organisation of the same name,
so the entry points at `wipeout-phantom-edition/wipeout-phantom-edition`; the
old owner URL now 404s.

Two notes for whoever picks this up next. REDRIVER2 tags its newest build as a
pre-release, so the catalog lists `7.4-rc2` from February 2022; move it to
`8.0` once that release goes final. And WipeOut Phantom Edition publishes
binaries only, no source and no license file, which is why it carries
`openSource: false`.
