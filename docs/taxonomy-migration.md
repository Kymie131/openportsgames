# Fase 3b — Taxonomía + `type` (revisión; sin reescritura)

> **Nota (integración con `main`):** la rama se fusionó con `origin/main`, que ya
> traía el campo **`kind`** (`game | system | tool`). Se **descartó nuestro `type`**:
> `playable-port`/`decomp-in-progress` ↔ `kind:"game"`, y `tool` ↔ `kind:"tool"`.
> Se conserva lo demás de esta nota (multi-valor `originalSystems`, `Unknown`,
> mapeos de sistemas). Las secciones que hablan de `type` quedan como histórico.

Generado desde `src/content/ports/` y la API de GitHub (solo lectura). **Nada reescrito.**

## A. `type`

- Total: 1193 · `playable-port`: 5 · `tool`: 6 · `decomp-in-progress`: 32 · **sin `type`: 1150**.
- Decidido: `scummvm`, `xoreos`, `openomf`, `surrealengine`, `dgengine` → `playable-port`; **`freedoom` sin `type`** (pack de assets, a revisión).

### A.1 Sin `type` (1150) — reparto por datos de la ficha (sin mirar el slug)

- con `release.version` (candidato `playable-port`): **120**
- sin versión y `portType: decompilation` (candidato `decomp-in-progress`): **359**
- sin versión y otro `portType` (candidato a revisar): **671**
- sin fuente GitHub: **11**
- (Estos son conteos por campos; el README se usa en el batch de abajo solo para los `Other`.)

## B. Sistemas originales de los `Other` (

380
)
Evidencia = frase exacta del README o la descripción del repo. Sin plataformas destino. Sin adivinar por nombre.

- **Confirmados: 21**
- **Dudosos: 7**
- **Unknown: 352** (incluye 1 sin repo GitHub)

### B.1 Confirmados (21)

| id                                     | Sistema original   | Cita                                                                                                                                                                                                                         |
| -------------------------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1oom                                   | MS-DOS             | 1oom aims to accurately reproduce the original DOS version of Master of Orion (1993) in a form that can be run on modern computers.                                                                                          |
| alex-kidd-in-miracle-world             | Sega Master System | This project aims to understand and document the disasssembly of the game [Alex Kidd in Miracle World](https://wikipedia.org/wiki/Alex_Kidd_in_Miracle_World) released in 1986 for the Sega Master System.                   |
| betrayal-at-krondor                    | MS-DOS             | This is a reconstruction of the original _Betrayal at Krondor_ source, recovered by reverse-engineering the DOS binaries.                                                                                                    |
| bio-menace                             | MS-DOS             | This is a work in progress decompilation/source code reconstruction of the game BioMenace, released by Apogee Software in 1993 for MS-DOS.                                                                                   |
| catacombgl                             | MS-DOS             | These games were originally developed for MS-DOS.                                                                                                                                                                            |
| chocolate-quake                        | MS-DOS             | Chocolate Quake is a minimalist source port of Quake focused on preserving the original experience of version 1.09 and earlier DOS releases.                                                                                 |
| chrono-cross                           | PlayStation        | **Use [decomp.me](https://decomp.me)** to collaboratively match the function - Platform: PlayStation 1 - Compiler: `gcc 2.8.1-psx + maspsx` - Flags: `-Wall -Wa,--aspsx-version=2.79,--expand-div -g3 -O2 -G0` - Source ASM  |
| cosmos-cosmic-adventure                | MS-DOS             | **Cosmore** is a reconstruction of the source code of _Cosmo's Cosmic Adventure_ version 1.20, using the original DOS compiler and toolchain.                                                                                |
| gt-advance-3-pro-concept-racing        | Game Boy Advance   | Reconstruction of _GT Advance 3: Pro Concept Racing_ (GBA, MTO/THQ).                                                                                                                                                         |
| jetpac                                 | ZX Spectrum        | An unofficial disassembly of JETPAC, the classic 8-bit computer game released in 1983 for the 16K ZX Spectrum home computer.                                                                                                 |
| kirby-nightmare-in-dream-land          | Game Boy Advance   | / / / / --- / --- / / Built file / `knidl.gba` (8 MiB) / / Internal title / `AGB KIRBY DX` / / Game code / `A7KE` (USA) / / Maker code / `01` (Nintendo) / / Version / `0` (Rev 0, no other retail revision exists) / / SHA- |
| kuon-mulberry                          | PlayStation 2      | This project requires a custom PS2-specific version of binutils to assemble the extracted MIPS assembly.                                                                                                                     |
| lionheart-remake                       | Amiga              | Java remake of Lionheart amiga game                                                                                                                                                                                          |
| mr-boom                                | Atari              | It can also be compiled as a stand-alone version using SDL1.2 (for the Atari Falcon version) or SDL2.                                                                                                                        |
| sheep-dog-n-wolf-rewooled              | PlayStation        | --- ### How to use - **You need to provide your own files from the original game version, this project does not include any assets** - **Although it is supported, PSX files are still not fully tested and there are quirks |
| super-mario-land-3-wario-land          | Game Boy           | A modern recompilation project for **Super Mario Land 3: Wario Land**, originally released for the Nintendo Game Boy.                                                                                                        |
| the-great-escape-in-c                  | ZX Spectrum        | ## Running the Game The port is an exact recreation of the ZX Spectrum version of The Great Escape including the input device selection menu.                                                                                |
| syndicate-wars                         | MS-DOS             | **Syndicate Wars Fan Expansion** is a port of the 1996 DOS game [Syndicate Wars](https://en.wikipedia.org/wiki/Syndicate_Wars) to modern operating systems.                                                                  |
| tails-adventure-tails-adventure-remake | Game Gear          | Tails Adventure is a Sonic the Hedgehog spin-off game, released for Game Gear and featuring Tails in a solo role.                                                                                                            |
| unity-underground                      | MS-DOS             | GoG is the version it is tested with; the original DOS version should work too.                                                                                                                                              |
| war1                                   | MS-DOS             | You will need a copy of the original Warcraft: Orcs & Humans MS-DOS (or shareware) version be able to play War1.                                                                                                             |

### B.2 Dudosos (7)

| id                            | Propuesta                           | Razón                                            | Cita                                                                                                                                                                                                            |
| ----------------------------- | ----------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| outpost-kaloki-x              | Xbox 360, Xbox, Arcade, PlayStation | varias plataformas citadas                       | **60 fps and beyond**<br> The Xbox 360 version ran at 30 fps.                                                                                                                                                   |
| rerac-launcher                | PlayStation 2, PlayStation          | varias plataformas citadas                       | You need your own, legally obtained PlayStation 2 disc of Ratchet & Clank (NTSC-U, SCUS-97199, version 1.00).                                                                                                   |
| resident-evil-code-veronica-x | GameCube, PlayStation 2             | varias plataformas citadas                       | A work-in-progress decompilation of Resident Evil - Code: Veronica X for the GameCube, meant to be complementary to the [decompilation of the PS2 version](https://github.com/fmil95/recvx-decomp) of the game. |
| black                         | Nintendo DS                         | cita no concluyente / posible mención incidental | **pokeblack.us.nds** `sha1: 26ad0b9967aa279c4a266ee69f52b9b2332399a5` (Version 1.0 USA/EUR NDSi Enhanced)                                                                                                       |
| earthbound-mother-2           | Virtual Boy                         | cita no concluyente / posible mención incidental | - [ ] Alternatively, attempt to recreate that version using the version of VUCC released with the Virtual Boy SDK - [ ] Decompile C code.                                                                       |
| emperorreborn                 | PlayStation                         | cita no concluyente / posible mención incidental | `powershell powershell -ExecutionPolicy Bypass -File .\package.ps1 -Version 2.0 `                                                                                                                               |
| resident-evil-code-veronica   | PlayStation 2                       | cita no concluyente / posible mención incidental | Check the [PS2 version decompile](https://github.com/fmil95/recvx-decomp) to see the overall progress on the reverse-engineering of the game code.                                                              |

### B.3 Unknown (352)

alien-vs-predator-2, 3d-maze, age-of-speed-2, amazing-island, ambermoon, amplitude, animal-forest, ancient-empires, 1080-snowboarding, another-mind, animal-forest-e, antares, ar-tonelico-ii-melody-of-metafalica, arkanoid, ares, armored-unit, barnyard, awesome-open-source-games, barrett, battlefield-2, betterspades, black-and-white, blast-corps, blasterball-revolution-2, bloons-td-5, boss-rally, bounce, brave-frontier, bstone, btbuilder, bubsy-3d-furbitten-planet, burnout-paradise, c-dogs-sdl, burnout-paradise-b5-decomp, carnage3d, call-of-duty-future-warfare, chasm-reverse, chibi-robo, chernobyl-neighbor-clown-gang, chikis-chase, club-penguin-waddle-forever, costume-quest, creatures-2, crimsonland, custom-robo-gx, ctw-native, cut-the-rope, cut-the-rope-cut-the-rope-dx, dance-central-3, dance-dance-revolution-1st-mix, dark-rift, de-blob, defenders-and-dragons, deltarune, dgengine, diamond-rush, disney-piglets-big-game, dogs-life, doma-days, digimon-digital-card-battle, doom64-ex-plus-enhanced, dr-brain-action-reaction, dragon-warrior-monsters, dragon-ball-z-budokai-2, dsda-doom-dsda-org, duck-game, duke-nukem-64, earthbound-beginnings, earthbound-phase-distorter, dxx-redux, edge-classic, eternal-darkness-sanitys-requiem, excite-truck, fate-extella, fire-emblem-seima-no-kouseki, final-fantasy-iv-3d-remake, final-fantasy-xiv-1-0, ezquake, fire-emblem-shadow-dragon, fire-emblem-the-binding-blade, fire-emblem-the-blazing-blade, fire-emblem-the-sacred-stones, five-nights-at-freddys, five-nights-at-freddys-2, flame, flappy-bird, flatout-2, ford-racing, flatout-ultimate-carnage, fortune-street, freeciv, freeft, freedom-fighters, freedoom, freeserf-net, fuel, geometry-dash, generalsgamecode, geometry-wars-retro-evolved-2, gex-64-enter-the-gecko, glover, glkeeper, glsmac, green-farm-3, froggers-adventures-temple-of-the-frog, gsrecomp, harry-potter-and-the-half-blood-prince, happy-wheels, halo-reach, harvest-massive-encounter, hazard-1998, harvest-moon-friends-of-mineral-town, heretic2r, heavymetal, heretic2, hopmon, homeworld-2, hybrid-heaven, idle-office-tycoon, insaniquarium-deluxe, idtech4a-harmattan-edition, johnny-herberts-grand-prix-championship-1998, jet-force-gemini, jfsw, jftekwar, jfwhaven, keeperrl, kid-chameleon, kirby-air-ride, kingdom-hearts-re-coded, kirby-and-the-amazing-mirror, kirbys-dream-collection-special-edition, komputerowa-gratka-3d-magiczna-kula-papatki, kirbys-pinball-land, klonoa-empire-of-dreams, kirbys-epic-yarn, lba2-classic-community, lego-batman-the-videogame, lego-city-undercover, lego-creator-knights-kingdom, lego-racers, lilium-voyager, lemmings-paintball, luigis-mansion, machines, mafia-the-city-of-lost-heaven, madnesspatch, manic-miner, maniac-mansion, legoland, mario-and-luigi-partners-in-time, mario-party-1, mario-party-6, mario-party-5, mario-party-7, mario-party-2, mario-party-9, mario-party-8, mario-sport-mix, mario-superstar-baseball, maxr, mario-teaches-typing-3, mc2, megaglest, meleepc, megaman-zero-3, meridian-59, mint-arena, mixels-rush, monster-hunter-portable-2nd-g, mega-man-battle-network-6, mortal-kombat-deadly-alliance, mortal-kombat-vs-dc-universe, nelumbo, mother-1-2-japan, navyfield-2000-pc, need-for-speed-1-6, new-play-control-pikmin, nearchuckle, new-play-control-pikmin-2, nhl-legacy-edition, nocturne, oddworld-1-2, okami-hd, omega-engine, onegai-monsters, open-annihilation, openciv3, openkrush, opene2140, openmb, openomf, openreliant, opentie, openxvt, openttd-openttd-patches, opentpw, opensc2k, openxw, openxwa, oregon-trail-ii, ophd, oracle-of-ages-and-seasons, panzer-dragoon-saga, parabellum, permafrost-engine, pizza-tower, phoenix-wright-ace-attorney-justice-for-all, playstunts, pokemon-black-2-and-white-2, pokemon-colosseum, pokemon-crystal, pokemon-diamond, peggle-deluxe, pokemon-battle-revolution, pokemon-emerald-3d-pokeemerald-3d, pokemon-emerald, pokemon-gold, pokemon-firered, pokemon-gold-spaceworld-demo, pokemon-heartgold, pokemon-md-red, pokemon-md-sky, pokemon-moon, pokemon-pinball-ruby-and-sapphire, pokemon-puzzle-challenge, pokemon-platinum, pokemon-pinball, pokemon-puzzle-league, pokemon-ruby, pokemon-stadium-1, pokemon-stadium-2, pokemon-sword, pokemon-tcg-1, pokemon-tcg-2, pokemon-yellow, prince-monogame, princess-maker-4, q2tools-220, quake3e, qfusion, q2rtxperimental, radio-helicopter, race-into-space, quakeforge, rebellion2, ratchet-and-clank-usa, ratchet-and-clank-going-commando-usa-v1-01, remc2, resident-evil-2, rhythm-heaven-fever, rockstar-games-presents-table-tennis, romanovs-vengeance, roller, rotp-fusion, runescape-2003, ryzom-core, serioussamalpharemake, scummvm, samurai-vs-zombies, serioussamclassic-vk, sfall, sexy-parodius, shadow-the-hedgehog, shattered-paradise, shaun-palmers-pro-snowboarder, sheep-dog-n-wolf, shin-bokura-no-taiyou-gyakushuu-no-sabata, shining-force-ii, shortline-railroad, shining-force, sheep-dog-n-wolf-sheep-raider, skies-of-arcadia-legends, simutrans, snail-mail, sonic-06-demo, sonic-advance-3, sonic-and-knuckles, sopwith-sdl-sopwith, space-rangers, space-rangers-hd-a-war-apart, space-station-14, spearmint, speed-academy, splatterhouse, spongebob-moves-in, ssx, ssx-3, star-ocean-blue-sphere, star-wars-episode-1-racer, summoner, starflight, summoner-a-goddess-reborn, super-mario-3d-land, super-ghouls-n-ghosts, super-mario-3d-world-bowsers-fury, super-mario-odyssey, taradino, surrealengine, the-binding-of-isaac-repentance, the-journeyman-project-turbo, the-italian-job, the-lord-of-the-rings-return-of-the-king, the-operative-no-one-lives-forever-nolfsrc, the-spongebob-squarepants-movie, the-oregon-trail-windows-95, the-sims-2, thief-deadly-shadows, the-sims-2-castaway, thinker, thirdeye, touhou-08-imperishable-night, touhou-koumakyou-the-embodiment-of-scarlet-devil, tribal-trouble, triplea, transformers-mystery-of-convoy, touhou-youyoumu-perfect-cherry-blossom, ty-the-tasmanian-tiger, ultimate-mk3-ios, ultima-7-decomp, undertale-yellow, tyrquake, underworld-exhumed, twinbee-paradise-in-donburi-shima, underworldgodot, vagrant-story, unvanquished, vange-rs, vangers, virtua-racing, vera20k, vorpalfix, vf1-recomp, wario-land-3, wc2-re, wc1-re, wolfenstein-rpg-re, wario-land-shake-it, wonder-project-j2-josette-of-the-corlo-forest, world-of-warcraft-1-12-benilla, world-of-goo, xenoblade, yakuza, xoreos, ys-vi, zelda-no-densetsu-kamigami-no-triforce, zeldawwhdrecompandroid, zone-of-the-enders-1, zero-hour-reforged, zero-k, zone-of-the-enders-2, zone-of-the-enders-3-guy-savage-from-metal-gear-solid-3

## C. Plan (sin ejecutar)

- Rama `content/taxonomy-multivalue`, 1 commit por paso; slugs/URLs/canonicals intactos; snapshot de `out/api/ports.json` y diff final solo de sistema/`type`.
- Display: ficha = un badge por sistema; tile = primer sistema; filtro = OR.


## D. Segunda pasada — sistema original "MS-DOS" vs "Windows (PC)" (preparada, sin aplicar)

Criterio (el README/descripcion del **propio proyecto** lo dice):
- MS-DOS: cita `original DOS`, `MS-DOS game`, `DOS programs/data`. NO Windows.
- Windows (PC): cita `original Windows version`, `PC game`, `Windows version`, `PC port of the ... game` cuando el juego original ES de PC.
- **NO** cuenta la plataforma destino (`port to Android`, builds Linux) ni un `PC port of the <consola> game` (el original es la consola -> `Otro`).
- Sin frase de origen clara -> `review` (revision manual).

### D.1 MS-DOS (9)
| id | Cita |
| --- | --- |
| freeserf-net | To play the game you will therefore need the original DOS or Amiga data files. |
| openomf | the original DOS game from 1994 uses IPX networking |
| sopwith-sdl-sopwith | port of the game "Sopwith", which was originally by BMB Compuscience Canada |
| underworld-exhumed | Ultima Underworld (1992) and II (1993), dug out of their original DOS programs. |
| wc1-re | partial support for the original DOS game data |
| wc2-re | partial support for the original DOS game data |
| jfsw | Port of the 3D Realms game "Shadow Warrior" (1997, MS-DOS) |
| jftekwar | Port of the Capstone Software game "TekWar" (1995, MS-DOS) |
| jfwhaven | Port of the Capstone Software game "Witchaven" (1995, MS-DOS) |

### D.2 Windows (PC) (8)
| id | Cita |
| --- | --- |
| snail-mail | Reverse-engineering workspace for the original Windows version of Snail Mail. |
| sheep-dog-n-wolf | A decompilation of the 2001 PC game *Sheep, Dog 'n' Wolf* |
| thief-deadly-shadows | It fixes the PC version's display problems |
| speed-academy | Source port of the singleplayer of Star Wars Jedi Knight: Jedi Academy (Windows, 2003) |
| touhou-koumakyou-the-embodiment-of-scarlet-devil | For a functioning port of the game to other platforms (Linux, modern Windows, etc) |
| touhou-youyoumu-perfect-cherry-blossom | For a desktop cross-platform port of the game |
| space-rangers-hd-a-war-apart | reference Free Pascal port of the recovered source (Space Rangers, Windows 2002) |
| open-annihilation | Open Source port of the Total Annihilation & TA: Kingdoms engines (Windows, 1997) |

### D.3 Otro / descartar (7) — el original NO es MS-DOS ni Windows
| id | Motivo |
| --- | --- |
| ctw-native | GTA: Chinatown Wars as a native Windows game (original: PSP/NDS) -> Otro |
| mortal-kombat-vs-dc-universe | An unofficial PC port of the Xbox 360 game -> Otro (Xbox 360) |
| outpost-kaloki-x | Native PC port of the XBLA game -> Otro (Xbox 360) |
| vf1-recomp | Virtua Fighter (SEGA, arcade, Model 1, 1993) as a native PC game -> Otro (Arcade) |
| cut-the-rope | enhancement of the PC version of Cut the Rope -> Otro (original: movil/iOS) |
| cut-the-rope-cut-the-rope-dx | enhancement of the PC version of Cut the Rope -> Otro (original: movil/iOS) |
| awesome-open-source-games | lista de proyectos, no una ficha -> descartar |

### D.4 Revisar (4)
| id | Motivo |
| --- | --- |
| lemmings-paintball | the original Windows executable lacks debugging symbols (recompilacion, no dice plataforma original) |
| lba2-classic-community | source port of the original Little Big Adventure 2 engine (LBA2: MS-DOS/Win, sin cita directa) |
| boss-rally | The PC game ships two renderer DLLs (Boss Rally: arcade/PS1, sin cita de origen) |
| btbuilder | SDL_ttf is optional and not built in the windows version (sin cita de plataforma original) |

Nota: `underworld-exhumed`, `wc1-re` y `wc2-re` ("original DOS ...") van a **MS-DOS**, no Windows.
