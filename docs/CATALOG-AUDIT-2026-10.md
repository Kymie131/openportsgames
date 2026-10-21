# Auditoria del catalogo — 2026-10-18 (tarea 1c)

Pasada sobre **1.306 fichas / 1.298 repositorios** unicos, cruzando cada URL de repo del catalogo
con la API de GitHub (`archived`, `disabled`, `license`, `pushed_at`, `full_name` y ultimo release).
Reproducible con `node scripts/audit-catalog.mjs` (requiere `gh` autenticado).

## Resumen

| Hallazgo | Casos | Accion |
| --- | --- | --- |
| Repositorios que ya no existen (404) | 14 | URL corregida cuando hay sucesor verificado; si no, `sourceDead: true` y nota visible |
| Repositorios renombrados o transferidos | 19 | URL actualizada al nombre actual |
| Repositorios archivados (solo lectura) | 6 | Nota visible en la ficha |
| Licencia distinta a la del repo | 5 | SPDX corregido en 3 fichas (2 eran equivalentes) |
| Releases: la ficha no apunta al ultimo tag | 99 | **Sin cambio**: se listan abajo para revision manual |
| Sin push desde hace mas de un ano | 105 | **Sin cambio**: se listan abajo para revision manual |
| Repositorios sin ninguna release publicada | 552 | Esperado en decompilaciones y proyectos WIP |

## Correcciones aplicadas

### Repositorios renombrados o transferidos

- `1080-snowboarding`: `bigyoshi51/1080-decomp` -> `djsaunde/1080-decomp`
- `2ship2harkinian`: `HarbourMasters/2ship2harkinian` -> `2ship2harkinian/2ship2harkinian`
- `crash-twinsanity-recomp`: `menaman123/Ps2Recomp` -> `menaman123/NativeEE`
- `doaxbv-re`: `NoRain211/doaxbv-re` -> `NoRain211/doaxvb-re`
- `dsda-doom`: `kraflab/dsda-doom` -> `dsda-org/dsda-doom`
- `forecast-channel`: `GuestDreemurr/forecast` -> `doldecomp/forecast`
- `halo-ce-universal`: `cybersecurity/halo-ce-universal` -> `OpenCommunityEdition/OpenCE`
- `mario-strikers-charged-recomp`: `yannicksuter/mscharged-port` -> `previouslevelgames/recharged`
- `nblood`: `nukeykt/NBlood` -> `NBlood/NBlood`
- `open-nectar`: `SSunnKing/Open-Nectar---Pikmin-Native-PC-Port` -> `SSunnKing/Open-Nectar---Pikmin-Native-PC-Mobile-Port`
- `opensc2k`: `nicholas-ochoa/OpenSC2K` -> `OpenSC2K/OpenSC2K`
- `pokemon-battle-revolution`: `bgsamm/pbr-dtk` -> `pbr-ret/pbr-decomp`
- `pokewilds-android`: `TryTheSauceBoss/Pokewilds-Android` -> `TryTheSauceBoss/Pokewilds-Godot`
- `smb-vanilla-port`: `nukep/smb-vanilla-port` -> `nukep/SMB-Vanilla`
- `syphon-filter-2-recompiled`: `Alexbeav/syphon-filter-2-recompiled` -> `alexbeavs-ps1-ports/syphon-filter-2-recomp`
- `the-force-engine`: `luciusDXL/TheForceEngine` -> `TheForceEngine/TheForceEngine`
- `twinbee-paradise-in-donburi-shima`: `Jhuyghue/donburi-decomp` -> `Jhuyghue/donburi-recomp`
- `ultimate-mk3-ios`: `MaryNCRT/Ultimate-Mortal-Kombat-3-iOS-Recomp` -> `MaryNCRT/Ultimate-Mortal-Kombat-3-iOS-Decompiled`
- `yakuza-dead-souls-recomp`: `canersaka/Yakuza-Dead-Souls-EX` -> `canersaka/Yakuza-Dead-Souls-Recompiled`

### Repositorios desaparecidos

- Con sucesor verificado (URL actualizada y se retiro `sourceDead`):
  - `fire-emblem-seima-no-kouseki`: `laqieer/fireemblem8j` -> `curiosity-led-me-here/fireemblem8j`
  - `pepsiman-recompiled`: `kem0x/RepsiMan` -> `FermataRest/RepsiMan`
  - `ratatouille`: `ZounaModding/RatDecomp` -> `Mhanna112-code/RatDecomp`
  - `starfox-enhanced`: `kandowontu/starfox-enhanced` -> `kandowontu2/starfox-enhanced`
  - `ufc-undisputed-3-recomp`: `paulogaab21/ufc3recomp` -> `Shadowww9858/Ufc3recomp`
- Marcados `sourceDead: true` con nota (sin sucesor confirmado):
  - `crash-team-racing-nitro-fueled`: `T3CHNOLOG1C/SacredFire`
  - `dantes-inferno-android`: `WINDROID-EMU/Dantes-inferno-Android` (ya estaba marcado)
  - `johnny-herberts-grand-prix-championship-1998`: `danvratil/jhgpc98decomp`
  - `kuon-mulberry`: `weirdbeardgame/Mulberry`
  - `ninja-gaiden-2-recomp`: `TheSaltTrader/Ninja-s-Dawn---A-Ninja-Gaiden-2-Recompilation-Project` (ya estaba marcado)
  - `nxe-dashboard-9199`: `MVEALNG/NXE-Dashboard-Recomp`
  - `pokemon-snap`: `dreamsailing59-ops/Snapshot`
  - `rayman-2-n64-recomp`: `danielgomesvieira2000/rayman-2-the-great-escape-recomp`
  - `superman-64-recomp`: `gcsmith/Superman64Recomp`

### Licencias corregidas

- `costume-quest`: ficha `Apache-2.0` / API `BSD-2-Clause` (Costume-Quest-Modding/CostumeQuest-Decomp) � corregido
- `doom3-dude`: ficha `GPL-3.0-only` / API `GPL-3.0` (Inkub0/dude) � sin cambio: ambos identifican la misma licencia
- `mega-man-x4-recomp`: ficha `PolyForm-Noncommercial-1.0.0` / API `MIT` (mstan/MegaManX4Recomp) � corregido
- `stretch-panic`: ficha `MIT` / API `CC0-1.0` (Harskov/stretch-panic-usa) � corregido
- `triaevum`: ficha `GPL-3.0-or-later` / API `GPL-3.0` (coccofresco/TriAevum) � sin cambio: ambos identifican la misma licencia

### Repositorios archivados

- `cnc-renegade`: electronicarts/CnC_Renegade (ultimo push 2025-03-03)
- `doom64-ex-plus`: atsb/Doom64EX-Plus (ultimo push 2025-11-05)
- `librelancer`: Librelancer/Librelancer (ultimo push 2026-10-10)
- `pokemon-stadium-recomp`: mstan/PokemonStadiumRecomp (ultimo push 2026-08-15)
- `unleashedrecomp-nx`: NaGaa95/UnleashedRecomp-NX (ultimo push 2026-07-30)
- `uqm-megamod`: JHGuitarFreak/UQM-MegaMod-Archived (ultimo push 2019-09-27)

## Falsos positivos del barrido (excluidos)

El extractor de URLs tambien captura enlaces que no son la fuente del port: imagenes de
`github.com/user-attachments/assets/...` y URLs citadas dentro de la prosa de las notas (con un punto
final). No son repositorios y se excluyen del informe:

- conker-bad-fur-day-recomp: user-attachments/assets
- crash-bandicoot: user-attachments/assets
- devilutionx: user-attachments/assets
- dkr-r: user-attachments/assets
- fire-emblem-the-binding-blade: FireEmblemUniverse/fireemblem6j.
- marathon-recomp: user-attachments/assets
- minecraft-psp: user-attachments/assets
- nblood: user-attachments/assets
- openrct2: user-attachments/assets
- serioussamalpharemake: icculus/Serious-Engine.
- serioussamalpharemake: GrlPwr-Zdzichu/SeriousSamAlphaRemake-Legacy.
- serioussamclassic-vk: icculus/Serious-Engine.
- starship: user-attachments/assets
- super-mario-bros-remastered: user-attachments/assets
- wiicompiled: user-attachments/assets


Fichas con version declarada que ya no coincide con el ultimo tag del repositorio. No se tocaron
porque la ficha puede estar fijada a proposito (por ejemplo cuando el autor retira la ultima release).

- `aleph-one`: ficha 1.11.1 / ultimo tag release-20260930 (Aleph-One-Marathon/alephone)
- `banjo-kazooie-recomp`: ficha 1.0.2 / ultimo tag v1.0.2 (BanjoRecomp/BanjoRecomp)
- `beetle-adventure-racing-recomp`: ficha 0.4.2-alpha / ultimo tag v0.4.2-alpha (danielgomesvieira2000/beetle-adventure-racing-recomp)
- `bomberman-64-recomp`: ficha 1.0.0 / ultimo tag v1.0.0 (RevoSucks/BM64Recomp)
- `castlevania-lod-recomp`: ficha 0.2.27 / ultimo tag v0.2.27 (fliperama86/cvlod_recomp)
- `chocolate-doom`: ficha 3.1.1 / ultimo tag chocolate-doom-3.1.1 (chocolate-doom/chocolate-doom)
- `conker-bad-fur-day-recomp`: ficha 0.1.6 / ultimo tag V0.1.6 (sciaschi/CBFD-Recompiled)
- `corsixth`: ficha 0.70.1 / ultimo tag v0.70.1 (CorsixTH/CorsixTH)
- `crispy-doom`: ficha 7.2 / ultimo tag crispy-doom-7.2 (fabiangreffrath/crispy-doom)
- `daggerfall-unity`: ficha 1.1.1-cve-2025 / ultimo tag v1.1.1-cve-2025 (Interkarma/daggerfall-unity)
- `dinosaur-planet-recomp`: ficha 0.3.0 / ultimo tag v0.3.0 (DinosaurPlanetRecomp/dino-recomp)
- `dk64-recompiled`: ficha 1.0.3 / ultimo tag v1.0.3 (Rainchus/Donkey-Kong-64-Recompiled)
- `dkc-recompiled`: ficha 0.0.17 / ultimo tag v0.0.17 (elliotttate/DKC1Recomp)
- `dkc-recompiled`: ficha 0.0.17 / ultimo tag v0.0.8 (elliotttate/DKC2Recomp)
- `dkc-recompiled`: ficha 0.0.17 / ultimo tag v0.0.6 (elliotttate/DKC3Recomp)
- `dkr-r`: ficha 1.0.6 / ultimo tag Version1.0.6 (ThatGuyMcd/DKR-R)
- `doom3-dude`: ficha 0.9.5 / ultimo tag v0.9.5 (Inkub0/dude)
- `doomretro`: ficha 6.3 / ultimo tag v6.3 (bradharding/doomretro)
- `downpour-recomp`: ficha 1.1.8 / ultimo tag v1.1.8 (LittleBitUA/DownpourRecomp)
- `dragon-ball-z-legacy-of-goku-recomp`: ficha 0.0.2 / ultimo tag v0.0.2 (mstan/DragonBallZLegacyOfGokuRecomp)
- `dsda-doom`: ficha 0.30.1 / ultimo tag v0.30.1 (kraflab/dsda-doom)
- `dusklight`: ficha 2.0.3 / ultimo tag v2.0.3 (TwilitRealm/dusklight)
- `f-zero-snes-recompiled`: ficha 1.8.3 / ultimo tag v1.8.3 (mstan/FZeroSNESRecomp)
- `fallout1-ce`: ficha 1.1.0 / ultimo tag v1.1.0 (alexbatalov/fallout1-ce)
- `fallout2-ce`: ficha 1.3.0 / ultimo tag v1.3.0 (alexbatalov/fallout2-ce)
- `fear-effect-recomp`: ficha 0.1.1 / ultimo tag v0.1.1 (alexbeavs-ps1-ports/fear-effect-recomp)
- `final-fantasy-ix-recomp`: ficha 0.1.1 / ultimo tag v0.1.1 (alexbeavs-ps1-ports/final-fantasy-ix-recomp)
- `freedroid-classic`: ficha 1.9.0 / ultimo tag freedroid-1.9.0-sdl2-port (ReinhardPrix/FreedroidClassic)
- `freespace-2`: ficha 26.2.0-RC1 / ultimo tag release_26_2_0-RC1 (scp-fs2open/fs2open.github.com)
- `gemrb`: ficha 0.9.5 / ultimo tag v0.9.5 (gemrb/gemrb)
- `goldeneye-64-recompiled`: ficha 1.0.0 / ultimo tag v1.0.0 (cblock85/GoldenEye64Recomp)
- `gta-iv-liberty-recomp`: ficha 0.1.1 / ultimo tag v1.0.1 (OZORDI/LibertyRecomp)
- `guilty-gear-recomp`: ficha 1.0.0 / ultimo tag v1.0.0 (omegakatana92/GuiltyGearRecomp)
- `gundam-battle-assault-2-recomp`: ficha 1.0.0 / ultimo tag v1.0.0 (omegakatana92/GundamBattleAssault2Recomp)
- `gundam-battle-master-2-recomp`: ficha 1.0.0 / ultimo tag v1.0.0 (omegakatana92/GundamBattleMaster2Recomp)
- `gzdoom`: ficha 4.14.2 / ultimo tag g4.14.2 (ZDoom/gzdoom)
- `harvest-moon-64-recomp`: ficha 1.2.2 / ultimo tag v1.2.2 (HarvestMoon64Recomp/HarvestMoon64Recomp)
- `ironwail`: ficha 0.8.2 / ultimo tag v0.8.2 (andrei-drexler/ironwail)
- `ja2-stracciatella`: ficha 0.22.1 / ultimo tag v0.22.1 (ja2-stracciatella/ja2-stracciatella)
- `julius`: ficha 1.8.0 / ultimo tag v1.8.0 (bvschaik/julius)
- `keeperfx`: ficha 1.4.0 / ultimo tag v1.4.0 (dkfans/keeperfx)
- `lcs-recomp`: ficha 0.1.6 / ultimo tag v0.1.6 (elmasas/lcs-recomp)
- `mega-man-x-snes-recomp`: ficha 2.2.3-alpha / ultimo tag v2.2.8-alpha (mstan/MegaManXSNESRecomp)
- `metroid-prime-hunters-recompiled`: ficha 0.7.3-alpha / ultimo tag v0.7.3-alpha (mstan/MetroidPrimeHuntersRecomp)
- `namco-system-22-dirt-dash`: ficha 0.8.1 / ultimo tag 0.9.0 (spacestate1/namco22-decompile)
- `namco-system-22-prop-cycle`: ficha 0.8.1 / ultimo tag 0.9.0 (spacestate1/namco22-decompile)
- `namco-system-22-rave-racer`: ficha 0.8.1 / ultimo tag 0.9.0 (spacestate1/namco22-decompile)
- `namco-system-22-tokyo-wars`: ficha 0.8.1 / ultimo tag 0.9.0 (spacestate1/namco22-decompile)
- `nugget-doom`: ficha 6.0.1 / ultimo tag nugget-doom-6.1.0 (MrAlaux/Nugget-Doom)
- `nxengine-evo`: ficha 2.6.5-1 / ultimo tag v2.6.5-1 (nxengine/nxengine-evo)
- `ogre-battle-64-recomp`: ficha 0.8.3 / ultimo tag v0.8.3 (lfarroco/ogre-battle-64-recomp)
- `open-goal`: ficha 0.3.8 / ultimo tag v0.3.9 (open-goal/jak-project)
- `open-tes-arena`: ficha 0.18.0 / ultimo tag opentesarena-0.18.0 (afritz1/OpenTESArena)
- `openage`: ficha 0.6.0 / ultimo tag v0.6.0 (SFTtech/openage)
- `openapoc`: ficha 2026.4.8 / ultimo tag 20260408 (openApoc/OpenApoc)
- `openjazz`: ficha 2026.3.1 / ultimo tag 20260301 (AlisterT/openjazz)
- `openloco`: ficha 26.09 / ultimo tag v26.09 (OpenLoco/OpenLoco)
- `openmohaa`: ficha 0.82.1 / ultimo tag v0.82.1 (openmoh/openmohaa)
- `openmw`: ficha 0.51.0 / ultimo tag openmw-0.51.0 (OpenMW/openmw)
- `openra`: ficha 2025.0330 / ultimo tag release-20250330 (OpenRA/OpenRA)
- ... y 39 mas

## Revision manual pendiente: repositorios sin actividad

Sin push desde hace mas de un ano. Puede ser normal en decompilaciones completadas; se revisara ficha
por ficha antes de cambiar estado o retirar nada.

- `uqm-megamod`: JHGuitarFreak/UQM-MegaMod-Archived (2019-09-27, 22*)
- `slashem-android`: gurrhack/SlashEM-Android (2020-06-13, 12*)
- `freeking-kingpin`: ernestbuffington/freeking (2020-07-04, 7*)
- `serioussamclassic-vk`: sultim-t/Serious-Engine-Vk (2020-10-02, 40*)
- `serioussamalpharemake`: Croteam-official/Serious-Engine (2020-10-31, 3185*)
- `unnethack-android`: gurrhack/UnNetHack-Android (2022-06-21, 18*)
- `warcraft-orcs-and-humans-android`: drodin/Stratagus (2022-08-11, 58*)
- `gish`: EXL/Gish (2022-08-12, 56*)
- `rottexpr`: LTCHIPS/rottexpr (2022-12-21, 109*)
- `fear-and-hunger-termina-android`: Chokage/Fear-and-Hunger-2-Termina-Mobile (2023-11-04, 49*)
- `fear-and-hunger-android`: Chokage/Fear-And-Hunger-Android-Application (2023-11-19, 93*)
- `cannonball`: djyt/cannonball (2023-12-26, 885*)
- `smw-rev`: snesrev/smw (2024-01-22, 644*)
- `donut`: plowteam/donut (2024-03-27, 486*)
- `return-to-castle-wolfenstein`: iortcw/iortcw (2024-06-27, 764*)
- `marathon-android`: daniele-rapagnani/alephone-android (2024-07-18, 68*)
- `wipeout-phantom-edition`: wipeout-phantom-edition/wipeout-phantom-edition (2024-08-21, 977*)
- `space-cadet-pinball`: k4zmu2a/SpaceCadetPinball (2024-08-21, 4711*)
- `arx-libertatis`: arx/ArxLibertatis (2024-08-22, 1101*)
- `blasterball-revolution-2`: KoboDev/BBR2Decompile (2024-10-16, 4*)
- `cosmos-cosmic-adventure`: smitelli/cosmore (2024-10-23, 146*)
- `thyme`: TheAssemblyArmada/Thyme (2024-10-31, 697*)
- `bloons-td-5`: NKHook/BTD5-Decomp (2024-11-04, 15*)
- `zelda-classic`: ArmageddonGames/ZeldaClassic (2024-12-14, 47*)
- `sm64ex`: sm64pc/sm64ex (2024-12-17, 1867*)
- `splatoon`: Dexx-io/Splatoon-Decomp (2024-12-18, 15*)
- `bio-menace`: lethal-guitar/BioMenaceDecomp (2024-12-27, 16*)
- `okami-hd`: Shintensu/OkamiHD-Decomp (2024-12-27, 12*)
- `dragon-ball-z-budokai-2`: TotallyNotMichael-GH/dbz2 (2025-01-08, 5*)
- `the-lord-of-the-rings-return-of-the-king`: crimsonmagick/lotr-rotk (2025-01-11, 7*)
- `riiablo`: collinsmith/riiablo (2025-01-13, 1106*)
- `fallout1-ce`: alexbatalov/fallout1-ce (2025-01-15, 2948*)
- `world-of-goo`: Fancy2209/wog-wiiware (2025-01-21, 2*)
- `mario-kart-ds`: XorTroll/mkds-re (2025-01-24, 64*)
- `taiko-no-tatsujin-wii-ketteiban`: CalebPancake/Taiko-No-Tatsujin-Wii-Ketteiban (2025-02-01, 1*)
- `serioussamalpharemake`: tx00100xt/SeriousSamAlphaRemake (2025-02-05, 32*)
- `3d-maze`: x86matthew/Playable3DMaze (2025-02-17, 212*)
- `fallout2-ce`: alexbatalov/fallout2-ce (2025-02-17, 2464*)
- `amplitude`: ieee802dot11ac/amp (2025-02-19, 5*)
- `wolfenstein-rpg-re`: Erick194/WolfensteinRPG-RE (2025-02-24, 57*)
- `kirby-air-ride`: doldecomp/kar (2025-02-26, 89*)
- `ufo50-android`: Skyline969/UFO50AndroidUnofficial (2025-02-28, 90*)
- `chameleon-twist-2-recomp`: Rainchus/ChameleonTwist2-JP-Recomp (2025-03-02, 1*)
- `cnc-renegade`: electronicarts/CnC_Renegade (2025-03-03, 1630*)
- `klonoa-2-lunateas-veil`: entriphy/kl2_lv_decomp (2025-03-07, 45*)
- `chameleon-twist-recomp`: Rainchus/ChameleonTwist1-JP-Recomp (2025-03-11, 62*)
- `rusty-blazer`: hellow554/RustyBlazer (2025-04-01, 5*)
- `mario-party-9`: mariopartyrd/marioparty9 (2025-04-01, 22*)
- `dr-brain-action-reaction`: SirHenricus/DrBrainActionReaction_PackageDecomp (2025-04-02, 1*)
- `reone-kotor`: seedhartha/reone (2025-04-06, 317*)
- `wcw-nwo-thunder`: martinbean/thunder (2025-04-07, 8*)
- `mario-party-ds`: mariopartyrd/mariopartyDS (2025-04-17, 24*)
- `green-farm-3`: SmithGoll/Greenier-Farm-3-Decomp (2025-05-01, 2*)
- `skies-of-arcadia-legends`: Rainchus/SkiesOfArcadiaLegends (2025-05-07, 17*)
- `radio-helicopter`: Bsquo/pcopter_wii (2025-05-12, 2*)
- `super-mario-3d-land`: 3dsdecomp/RedPepper (2025-05-22, 111*)
- `oot-gc-decomp`: zeldaret/oot-gc (2025-05-24, 150*)
- `drakan-the-ancients-gates`: cScarletter/Drakan-The-Ancient-Gates-Decompilation- (2025-05-25, 4*)
- `brave-frontier`: decompfrontier/client (2025-05-30, 14*)
- `idle-office-tycoon`: Avenze/ios_reverse_engineering (2025-06-01, 5*)
- ... y 45 mas
