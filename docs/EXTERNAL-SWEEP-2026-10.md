# Barrido externo (tarea 1b) — 2026-10-18

Segunda fuente de descubrimiento tras `docs/missing-ports-2026-10.md` (topics de GitHub + cuenta `wootbeer`).
Aquí se recorren las fuentes externas que quedaron pendientes: listas curadas, índices de ports y registros
de handhelds.

## Fuentes recorridas y resultado

| Fuente | Qué se hizo | Resultado |
| --- | --- | --- |
| **readonlymemo.com** (lista curada de decomps y N64 recomps, oct. 2026) | Cruzados ~35 proyectos por URL de repo contra el catálogo | 30 ya estaban fichados; **5 fichas nuevas** (`psydoom`, `sm64plus`, `sm64coopdx`, `project-picori`, `medievil-recomp-blacklabel`) |
| **PortsDR** (`portsdr.com` y su índice) | Extraídos 289 enlaces de GitHub de la página y cruzados por URL | 79 repos no catalogados; **49 fichas nuevas** (`diddy-kong-racing-goldenballoon`, `bluewake`, `kartpad`, `maskpad`, `sunpad`, `ballpad`, `goldeneye-007-recomp`, `hercules-recompiled`, `jet-set-radio-future-unleashed`, `mother-3-recomp-android`, `nfs-most-wanted-android`, `castlevania-sotn-recomp-nocturne`, `ridge-racer-6-recomp`, `budokai-tenkaichi-3-pc`, `valkyrie-profile-recomp-ed1z19`, `wet-recomp-windows`, `blast-corps-power-dozer`, `jackie-chan-stuntmaster-rechan`, `castlevania-legacy-of-darkness-recomp`, `harvest-moon-64-android`, `dk64-recomp-android`, `zelda3-android`, `system-shock-android`, `animal-crossing-gc-android`, `paper-mario-recut`, `sma-remastered-android`, `tenchu-stealth-assassins-recomp-hero`, `alien-resurrection-recomp-hero`, `metal-slug-x-recomp-technically`, `pilotwings-64-birdman64`, `bloodborne-pc-windows`, `ctr-native-android`, `doom-rpg-re`, `doom-ii-rpg-re`, `mario-party-4-pc-zeranemesis`, `partyboard`, `perfect-dark-android`, `race-wave-46`, `wave-race-64-decomp`, `wave-race-64-recomp-daniel`, `naughty-bear-panic-in-paradise-recomp`, `ship-of-harkinian-android`, `strikers-wiicompiled`, `castlevania-sotn-recomp-sergiomanzur`, `minish-cap-android`, `wipeout-xl-recomp-njh`, `zelda64-recomp-android`, `zelda-wwhd-recomp-android`) |
| **PortMaster** (`PortsMaster/PortMaster-New`) | Leídos los 475 `port.json` y los 488 scripts de arranque | **0 fichas**: los `port.json` no declaran la fuente del port y solo 7 scripts citan un repositorio, todos librerías o motores (`ptitSeb/gl4es`, `kitao/pyxel`, `JohnnyonFlame/FNAHacks`, `ninjamuffin99/canabalt-assets`) |
| **heldgames.com** | Página recorrida | Sin candidatos: es una web de reviews de consolas portátiles, no un listado de ports |
| **F-Droid** | Caso concreto documentado en `docs/candidates-2026-10.md` | **1 ficha nueva** (`endless-sky-android`, paquete `com.github.thewierdnut.endless_mobile`). El barrido completo de la categoría Games queda pendiente |
| **Webs propias (sin GitHub)** | Verificadas las páginas y su versión | **3 fichas nuevas**: `project-r` (San Francisco Rush, t3hd0gg.com), `streets-of-rage-2-new-era` (sor2newera.com) y `endless-sky-android`. `severed-chains` ya estaba fichado: se enriqueció con su web y la release actual |

Además, dos fichas existentes ganaron la fuente que les faltaba: `ghostship` (repositorio de GitHub, que antes
solo enlazaba la web del proyecto) y `legend-of-dragoon-severed-chains` (web oficial + release).

## Descartados (con motivo)

- **Duplicados del mismo proyecto con otro propietario**: `Alexbeav/ace-combat-3-electrosphere-usa-recomp`,
  `Alexbeav/medievil-recomp`, `Alexbeav/parasite-eve-recomp`, `Alexbeav/syphon-filter-2-recompiled`,
  `Alexbeav/xena-warrior-princess-recomp` (el catálogo ya los tiene bajo `alexbeavs-ps1-ports`),
  `NoRain211/doaxbv-re` (renombrado, ya actualizado) y `cybersecurity/halo-ce-universal` (`OpenCommunityEdition/OpenCE`).
- **Juegos ya fichados con otro repositorio**: `some-scurvy-dog/BanjoTooieRecompiled` (existe `banjo-tooie-recomp`),
  `sergiomanzur/SymphonyRecomp` sí se añadió, pero `zeranemesis/Marioparty4` y `mariopartyrd/partyboard` se
  añadieron como proyectos distintos de `mario-party-4-recomp`.
- **Forks Android de ports ya fichados**: `izzy2lost/Ghostship`, `izzy2lost/Lighthouse`, `izzy2lost/SpaghettiKart`,
  `izzy2lost/Starship`, `ManIsCat2/sm64coopdx`, `elliotttate/Wind-Waker-Recomp`, `Jameriquiah/2ship2harkinian`
  (el catálogo ya cubre esas variantes o no aportan una ficha propia).
- **Launchers y gestores, no ports**: `open-goal/launcher`, `Goopie`, `chasem-dev/sms-launcher`,
  `RadzPrower/Super-Metroid-Launcher`, `RadzPrower/Zelda-3-Launcher`, `qurious-pixel/SMAS_Launcher`,
  `xander-haj/Z3R-Launcher`, `boburning/portcove`.
- **No es un port**: `ZQuestClassic/ZQuestClassic` (el propio autor aclara que es un motor de aventuras, no una
  decompilación de Zelda 1) y `Gzh0821/pvzg_site` (repositorio de la web del port, no del port).
- **Sin información suficiente**: `motor-dev/nfs-recompiled` (no identifica qué entrega de NFS es),
  `Edwin2929/sma3-recomp-android.` (nombre de repositorio malformado) y `T3CHNOLOG1C/SacredFire` (404).

## Limitación de esquema detectada

Tres proyectos reales no se pueden fichar porque `platforms` solo admite sistemas destino modernos
(PC, móvil, Switch, PS, Wii, DS/3DS y PSP/Vita):

- `jnmartin84/sf64-dc` — Star Fox 64 para **Sega Dreamcast**.
- `Sergey004/FNAF1-Recomp-proj` — Five Nights at Freddy's para **Xbox 360**.
- Los ports de **OS para móviles** (postmarketOS, LineageOS) y de consolas antiguas en general.

Si se quiere cubrirlos, hay que añadir los destinos al enum de `platforms` (`src/lib/ports/schema.ts`) y su
etiqueta a `src/content/systems.ts`.

## Pendiente para la siguiente pasada

1. **F-Droid completo**: la categoría Games con repositorio fuente (el índice `index-v2.json` es grande; conviene
   filtrar por apps con `sourceCode` en Games y cruzar por URL).
2. **Listas curadas aún no cruzadas**: `CharlotteCross1998/awesome-game-decompilations`,
   `SubmitGame/awesome-decomp-games` (secciones de juegos) y `abduznik/awesome-x360-recomps`.
3. **`omegakatana92/Samuai-Shodown-Warriors-Rage-Recomp`**: identificado como el repositorio real de
   `samurai-shodown-warriors-rage-recomp`, que hoy solo enlaza el índice de PortsDR. Al añadirlo hay que
   actualizar el mapa de fuentes compartidas de `tests/content/ports.test.ts`.
4. Revisar periódicamente PortsDR y readonlymemo: ambas publican proyectos nuevos cada semana y ya aportaron
   54 de las 88 fichas de este ciclo.
