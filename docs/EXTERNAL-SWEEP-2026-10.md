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

## Segunda vuelta (lista de la comunidad, 2026-10-18)

| Fuente | Qué se hizo | Resultado |
| --- | --- | --- |
| **Google Sheet «Android Ports - Game Files»** (Community Ports, 498 filas) | Extraídos los 339 enlaces de GitHub y cruzados por URL | 189 ya estaban en el catálogo; **144 repos nuevos**, de los que se ficharon **125** (123 en lote + `gtasa-psp` y `spotify-3ds`) |
| **Lista de r/AndroidGaming y r/SBCGaming** (recomendaciones) | Comparadas las recomendaciones con el catálogo | Ya cubiertas: OpenMW (+`openmw-android`), Daggerfall Unity (mas `Vwing/daggerfall-unity-android`), Ship of Harkinian, Banjo-Kazooie recomp, Perfect Dark, Fallout 1/2 (CE), KOTOR (`reone-kotor`), Hollow Knight/Silksong (SilksongAndroid) |

### Decisiones tomadas en esta vuelta

- **Pack multi-juego**: `sandstranger/com.mobilerpgpack.phone` (Android) es **una sola aplicación** que ejecuta los juegos del motor id/Quake. La ficha del pack es `kind: "tool"` y se abrieron **19 fichas individuales** para los juegos mas buscados (Doom, Doom 3 BFG, Doom 64, Quake 1/2/3, Hexen, Hexen II, Heretic, HacX, OpenArena, Wolfenstein RPG, packs de mision). Los juegos restantes del pack (Arx Fatalis, Chex Quest 3, C&C, Red Alert, Widelans, Doom RPG, etc.) figuran dentro de la ficha del pack, no como fichas sueltas.
- **Herramientas, no juegos**: los lanzadores de Minecraft Java (`ZalithLauncher2`, `FoldCraftLauncher`, `MojoLauncher`, `pojavlauncher`), `RotatingartLauncher`, `Knossos.NET`, `Sts2MobileLauncher` y `OpenBoR` se ficharon como `kind: "tool"` (9 en total), con su lista actualizada en `tests/content/kinds.test.ts`.
- **Advertencia legal (estilo Gears)**: se aplico a las **2** fichas con evidencia de que **distribuyen los archivos del juego** (no se excluyo ninguna): `Revers-BR/0ad-android-releases` (builds de 0 A.D. para Android) y `Player124413/Looking-Glass-android-edition` (Alice completo). El resto de fichas de esta vuelta indican en sus notas que **necesitan tu propia copia** y, cuando la hoja lo detalla, el nombre del archivo requerido.
- **6 repositorios caidos** en la hoja (404) y por tanto no fichados: `kandowontu/starfox-enhanced`, `WINDROID-EMU/Bomber-Man-Hero`, `Gilleece/goldeneye-omniport`, `WINDROID-EMU/NFSMW-RECOMP`, `WINDROID-EMU/Silent-Hill-Downpour-port-android`, `XHYN-PH/XHYN-V`.

### Peticiones concretas de esta vuelta

| Peticion | Resultado |
| --- | --- |
| Port nativo de Super Mario Bros. Wonder | Fichado: `super-mario-bros-wonder-recomp` (`BelmanteGu/SuperMarioWonderRecomp`) |
| Naruto Shippuden para Android | Ya cubierto: 6 fichas de la serie con builds Android/PC (`naruto-ultimate-ninja-storm-2-recomp`, `-3-full-burst-`, `-generations-`, `-revolution-`, `naruto-the-broken-bond-recomp`, `naruto-rise-of-a-ninja-recomp`) |
| GTA San Andreas para PSP | Fichado: `gtasa-psp` (`vizPilot/gtasa_psp`, WIP sobre el codigo de re3) |
| Spotify en la 3DS | Fichado como herramienta: `spotify-3ds` (`davidabejon/spotify-3ds`, muestra y controla el estado de Spotify desde la consola) |

## Tercera vuelta: seccion PSP (r/PSP) y lista de Android del usuario

Recorrida la recopilacion de ports recientes de PSP y la lista de recomendaciones de Android. **15 fichas nuevas**:

| Ficha | Proyecto | Plataforma |
| --- | --- | --- |
| `perfect-dark-psp` | `z2442/perfect_dark-PSP` (jugable de principio a fin) | PSP |
| `sonic-cd-psp` | `Koichive/RSDKv3-PSP` (decompilacion de Retro Engine v3) | PSP |
| `portabletale` | `Volterith/PortableTale` (Undertale en Lua, WIP) | PSP |
| `psp-latro` | `GreenNinja2525/PSP-latro` (Balatro, retirado por DMCA: ficha con aviso) | PSP |
| `jgr-portable` | `beckerd/psp_jgr_portable` (Jet Grind Radio) | PSP |
| `mk64-portable` | `beckerd/psp_mk64_portable` (Mario Kart 64 sobre la decompilacion) | PSP |
| `helltaker-psp` | `surelynotvain/helltaker-psp` (Helltaker + Examtaker) | PSP |
| `wordle-psp` | `imRohan/wordle-psp` | PSP |
| `touhou-6-psp` | `kan8223-dotcom/th06-psp-native` | PSP |
| `touhou-10-psp` | `kan8223-dotcom/th10-psp-native` | PSP |
| `persona-4-psp` | `tojikoumori/P4toPSP` (PS2 a PSP, experimental) | PSP |
| `gta-iii-psp` | `st1x51/re3psp_files` (GTA III via re3) | PSP |
| `gtasa-psp` | `vizPilot/gtasa_psp` (GTA San Andreas, WIP) | PSP |
| `tekken-6-android` | `zxyandreay/azazel6` (Tekken 6 de PSP a Android) | Android |
| `street-fighter-iii-3rd-strike-xbox` | `Manya3084/SF33RDSXBRecompo` (3rd Strike de Xbox) | Windows |

**Ya estaban cubiertos**: Ocarina of Time (PSP) (`oot-psp`, `z2442/oot-PSP`), Minecraft PE para PSP
(`minecraft-psp`), Mario Kart 64 en Android (`spaghettikart-android`), Perfect Dark en Android
(`perfect-dark-android`) y las seis fichas de Naruto con build Android.

**No encontrados** (la lista enlaza a paginas sin repositorio publico): el port de **Street Fighter III: 3rd Strike
para PSP** (pagina de retrogametalk, sin repo) y **Fallout 1 y 2 para PSP** (hilo de Reddit, sin repo). Si aparece
el repositorio, se fichan igual que el resto.

**Descartados**: `Rickow/SFA3max-PSP-widescreen` (parche de widescreen, no un port), `kwerenta/joker-poker` y
`RoboShock1086/baltatro-like-game-for-PSP` (juegos propios inspirados en Balatro, no ports) y
`Saymond/PSP-apps` (coleccion de ports de apps J2ME, no de juegos).

## Cobertura Android de todo el catalogo

`docs/ANDROID-COVERAGE-2026-10.md` lista, agrupados por sistema original, los juegos del catalogo que todavia
**no** tienen ninguna ficha con Android entre sus plataformas (1.014 de 1.244 juegos), y los 230 que si la tienen.
Es la lista de trabajo para la proxima vuelta de busqueda de variantes Android.

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
