# Non-game entries report

Scope: `src/content/ports` (1,186 catalog entries).
Type: **report only — no catalog changes in this commit.**
Goal: list entries that are **not a port of a single game** — aggregators/lists,
emulators/generic runtimes, tools, mods and system software — so they can be
classified (add a category tag), separated into another section, or dropped.

The current schema only has `portType` (decompilation / recompilation /
reimplementation / source-port / runtime-port) and the boolean `sourceIsIndex`.
There is no field to say "this is a tool/emulator/mod", which is exactly why
these entries blend in with real ports.

## A. Aggregators / lists (no game of their own)

| id | Title | Evidence | Suggested |
| -- | ----- | -------- | --------- |
| `awesome-open-source-games` | Awesome Open Source Games | A curated GitHub **list** of games, not a game. | Move out of the ports catalog. |
| `buck-bumble-recomp` | Buck Bumble Recompiled | `sourceIsIndex: true`, source is `portsdr.com` (index, no repo). | Keep only if a real repo appears; else tag `unverified-index`. |
| `samurai-shodown-warriors-rage-recomp` | Samurai Shodown: Warriors Rage Recompiled | Same PortsDR index placeholder. | Same as above. |
| `super-mario-all-stars-recomp` | Super Mario All-Stars Recompiled | PortsDR index **and** a multi-game compilation. | Same as above. |
| `timesplitters-2-recomp` | TimeSplitters 2 Recompiled | Same PortsDR index placeholder. | Same as above. |

## B. Emulators / generic runtimes (not one game)

These run **many** games (or arbitrary data), so they are software rather than a
game port:

| id | Title | Runs |
| -- | ----- | ---- |
| `hagi` | Hagi (GameCube/Wii Emulator) | GameCube / Wii discs. Notes already say "It is an emulator". |
| `scummvm` | ScummVM | SCUMM and dozens of adventure engines. |
| `surrealengine` | SurrealEngine | Unreal Engine 1 games. |
| `xoreos` | Xoreos | BioWare Aurora / Infinity / Sonic games. |
| `xash3d-fwgs` | Xash3D FWGS | GoldSrc engine + mods. |
| `dgengine` | DGEngine | Diablo 1 engine. |
| `permafrost-engine` | Permafrost-engine | A generic OpenGL **RTS engine** (no specific game). |
| `omega-engine` | OmegA-engine | OpenArena / Quake 3 engine. |

Single-game engine reimplementations (`rigel-engine`, `twin-e`,
`the-force-engine`, `the-force-engine-vr`, `silent-engine`, `openmw`, `openage`)
do target one game and can stay as ports — but a `kind: "engine"` tag would make
the distinction explicit.

## C. Tools / utilities / launchers / clients

Not games — they support a game:

| id | Title | What it is |
| -- | ----- | ---------- |
| `q2tools-220` | Q2tools-220 | Quake 2 **map compiler tools**. |
| `rerac-launcher` | Rerac launcher | **Launcher** for the ReRAC Ratchet & Clank rewrite. |
| `crash-bandicoot` | Crash Bandicoot Launcher | **Launcher/distributor** for a RecompOne recompilation. |
| `cs16-client` | CS16Client | Standalone **network client** for Counter-Strike 1.6. |
| `tf15-client` | TF15-Client | Standalone **network client** for Team Fortress Classic. |
| `ps2-osdsys` | PS2 OSDSYS | Reimplementation of the **PS2 system menu** (system software). |
| `pokerogue-app` | PokeRogue App | Android **wrapper window** around pokerogue.net; notes say it "is a wrapper". |

## D. Mods, patches and repacks

| id | Title | What it is |
| -- | ----- | ---------- |
| `perfect-dark-dabs-mod` | Dab's Mod | **Mod** of Perfect Dark ("extended mod features"). |
| `uqm-megamod` | UQM MegaMod (Star Control II) | **Repack/mod** of The Ur-Quan Masters with extra content. |
| `doom3-dude` | DUDE | Doom 3 multiplayer **mod** (`github.com/Inkub0/dude`). |
| `madnesspatch` | MadnessPatch | A **patch** mod (source `Wemino/MadnessPatch`). |

## E. Multi-game compilations (one entry, several games)

The entry maps to a bundle, so `game` is a collection rather than a title:

`kirbys-dream-collection-special-edition`, `sonic-1-2-2013`,
`oracle-recompiled` (Oracle of Ages & Seasons), `nelumbo` (Lotus trilogy),
`jet-moto-anthology-recomp`, `die-hard-trilogy-recomp`,
`mortal-kombat-trilogy-recomp`, `dragon-ball-z-budokai-hd` (HD Collection).
(`playstation-all-stars-recomp` is a single crossover game, not a bundle.)

## F. Online game clients / servers (software, not a planted port)

`runescape-2003` (2003scape client) and `world-of-warcraft-1-12-benilla`
(server/client stack). They reimplement an online service rather than port a
console/PC game; verify they belong in a "ports" catalog.

---

## Recommendation

1. Add a `kind` field (e.g. `game | engine | emulator | tool | mod | compilation`)
   and tag the entries above; then the catalog can filter/separate them.
2. Move categories **B (generic)**, **C** and **F** to an `/emulators` or a new
   `/tools` section, or mark them `noindex` if they stay.
3. For **A**, drop `awesome-open-source-games`; keep the PortsDR entries only
   until a real repository exists.
4. For **D** and **E**, keep them but make clear in the UI that they are a mod or
   a bundle, and point `game` at the first/primary game.
