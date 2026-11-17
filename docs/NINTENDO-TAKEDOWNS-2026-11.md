# Ports retirados por Nintendo — investigación 2026-11

**Fecha de cierre de datos:** 2026-11-16 (16:00 UTC).
**Alcance:** proyectos fan de port/decompilación/recompilación de juegos de Nintendo retirados por acción legal (DMCA, cease & desist o presión del titular), los proyectos que aparecieron después y la brecha resultante en el catálogo.
**No incluye:** retiradas del eShop, bloqueos de vídeos sueltos, mods, ROM hacks ni emuladores, salvo cuando son necesarios para explicar una retirada de ports.

---

## 0. Resumen ejecutivo

1. La ola más reciente es la de **noviembre de 2026**: cuatro proyectos de recompilación (Super Mario Odyssey, Zelda: Skyward Sword HD, Mario Kart: Double Dash!! y Mario Tennis Fever) desaparecieron de GitHub/GitLab entre el 11 y el 13 de noviembre. **Nintendo no emitió una declaración pública** y **no hay un aviso DMCA publicado en el archivo de GitHub que nombre esos cuatro repositorios**; la atribución viene de prensa y del propio autor de PowerMoon.
2. La ola de ports se separó por horas de otra acción verificable: el **6 de noviembre de 2026** Nintendo sí publicó avisos DMCA en GitHub contra redes de forks de emuladores de Switch y firmware de modchips (Citron, Picofly, listas de compatibilidad de Ryubing), con redes de hasta **144 repositorios**.
3. El efecto práctico fue el contrario al buscado: en 72 horas aparecieron **reuploads y recomps independientes** de los mismos juegos (Odyssey, Double Dash, Skyward Sword HD), varios con releases públicas y cientos de estrellas.
4. El catálogo ya cubría la generación anterior (Ship of Harkinian, 2Ship2Harkinian, Ghostship, sm64coopdx, Coz-0/smo-recomp, mk8-recomp). Faltaban **12 fichas** de esta ola; se añaden en esta pasada.
5. Ninguno de los proyectos retirados distribuía archivos del juego de forma declarada: todos pedían tu propia copia. La retirada se apoya en el código derivado y en las TPM, no en la distribución de ROMs.

---

## 1. Metodología

Fuentes usadas, por orden de prioridad:

1. **Archivo público de DMCA de GitHub** (`github.com/github/dmca`, carpetas `2026/11`): avisos con repositorios nombrados uno por uno. Es la única fuente que prueba una retirada por DMCA en GitHub.
2. **Repositorios y releases oficiales**: README, licencia, tags y fecha de publicación, consultados vía API de GitHub el 2026-11-16.
3. **Prensa especializada** cuando no existe aviso público: TheGamer, VGTimes, Pro-Gamer, Nintendo Connect, Gaming Reinvented, Eurogamer, VGC, TorrentFreak, Nintendo Life.
4. **Wikis de referencia** (Wikipedia) solo para fechas históricas y contexto.

Criterios para considerar un proyecto "retirado":

- El repositorio principal devuelve 404/410 o el autor anunció el cese, **y**
- hay una acción del titular (aviso, carta, demanda) o una declaración del autor que la atribuye a Nintendo.

Criterios para considerar un proyecto "sucesor" o "nuevo":

- repositorio oficial propio (no un espejo anónimo sin autoría),
- README que declara que no incluye código, assets ni claves del juego,
- release verificable o, si no la hay, estado WIP explícito.

**Limitación importante:** los reuploads pueden ser continuaciones del mismo código o copias sin permiso. Esta investigación **no certifica la cadena de autoría**; solo documenta que el proyecto existe, qué declara y qué publica.

---

## 2. Línea de tiempo de retiradas (2015–2026)

| Fecha | Objetivo | Tipo | Acción | Qué pasó después | Fuente |
| --- | --- | --- | --- | --- | --- |
| 2015-03 | Super Mario 64 HD (remake Unity) | Fan game | C&D | Desapareció; sin sucesor directo | Wikipedia |
| 2015-05 | The Legend of Zelda: Ocarina of Time 2D | Fan remake | C&D | Cancelado | Wikipedia |
| 2016-04 | Zelda30Tribute | Fan game | C&D | Cancelado | Wikipedia |
| 2016-05 | Full Screen Mario | Recreación web | C&D | Web y código retirados | Wikipedia |
| 2016-08 | **AM2R** (Another Metroid 2 Remake) | Fan remake | DMCA a los hosts; C&D final el 2016-09-02 | El autor paró; la comunidad continuó con **AM2R Community Updates** y un autopatcher Android | Wikipedia, RPS, TorrentFreak |
| 2016-08-15 | **Pokémon Uranium** | Fan game | DMCA a los hosts | Sin enlaces oficiales; circulación comunitaria | TorrentFreak |
| 2016-12-20 | **Pokémon Prism** | ROM hack | C&D a cuatro días del lanzamiento | Filtrado y continuado por fans | Wikipedia |
| 2017 | **Super Mario 64 Online** | Mod multijugador | Retirado | El linaje sigue en **sm64ex-coop → sm64coopdx** | Wikipedia |
| 2020-05-08 | **Super Mario 64 PC port** (binarios) | Decomp + port | DMCA de Wildwood Law a file hosts y YouTube | El **código fuente siguió**; nacieron sm64ex, Render96ex, sm64plus, Ghostship y sm64coopdx | Eurogamer, VGC, GameDeveloper |
| 2020-12 / 2021-01 | 379–562 fan games en Game Jolt | Fan games | DMCA masivo | Retirada en bloque; sin ports implicados | Nintendo Life, TorrentFreak |
| 2021-08-27 | **Metroid Prime 2D** (Team SCU) | Demake | C&D ("cierta empresa de videojuegos") | Demo y banda sonora retiradas; proyecto cancelado | Nintendo Life, Kotaku |
| 2024-03-04 | **Yuzu** | Emulador | Demanda y acuerdo | Forks: Suyu, Sudachi, Citron, Nyushu | prensa |
| 2024-10-01 | **Ryujinx** | Emulador | Retirada del repo y binarios | Forks: Ryubing, Torzu | prensa |
| 2026-10-13 | **Mario Kart 8 Deluxe en navegador** | Port web | Retirado a los 3 días | Sin repo público; el espacio lo ocupan recomps nativas | Gaming Reinvented |
| 2026-11-06 | **Redes de forks de Citron y Picofly, y listas de compatibilidad de Ryubing** | Emuladores/firmware | DMCA verificado en GitHub: una red de 144 repos (Picofly) y otra de 71 (Citron) | Reorganización de forks; no son ports | GitHub DMCA `2026-11-06-nintendo-2/4.md` |
| 2026-11-11/12 | **PowerMoon** (Super Mario Odyssey) | Recompilación | Repo de GitLab y cuenta retirados | Reuploads y recomps independientes en horas | TheGamer, VGTimes, CDKeyPrices |
| 2026-11-12 | **Mario Kart ReTour** | Reviva de Mario Kart Tour | Tráiler retirado por Nintendo en YouTube; web y Discord caídos | Estado del proyecto incierto; sin repo público | Nintendo Connect |
| 2026-11-13 | **SkyRecomp, Project Tandem, MTF-Recomp** | Recompilaciones | Repos retirados (GitHub) | Continuaciones Android y recomps independientes | TheGamer, VGTimes, Pro-Gamer |

### Notas de precisión

- **AM2R:** el DMCA inicial fue a los sitios de descarga (agosto); el cese de desarrollo llegó con la carta del 2 de septiembre de 2016. La comunidad mantuvo el código y las actualizaciones.
- **Super Mario 64 (2020):** Nintendo no tumbó el repositorio de la decompilación; tumbó binarios precompilados y vídeos. Ese matiz explica por qué el ecosistema sm64 sigue vivo.
- **Yuzu y Ryujinx:** son emuladores, no ports; se incluyen porque su retirada reordena el ecosistema de recompilaciones de Switch (muchas usan capas HLE/AOT derivadas).
- **Noviembre de 2026:** la cifra de 144 repos corresponde a una red de forks de un aviso del 6 de noviembre; **no** son los cuatro ports del 13 de noviembre.

---

## 3. La ola de noviembre de 2026

### 3.1 Qué se retiró

| Proyecto | Juego | Autor / host | Fecha reportada | Estado verificado 2026-11-16 | Evidencia |
| --- | --- | --- | --- | --- | --- |
| **PowerMoon** | Super Mario Odyssey (Switch) | `zzzarathustra-dev`, GitLab | 2026-11-11/12 | Cuenta y repo reportados 404; reuploads reportados | TheGamer; declaración del autor en Reddit |
| **SkyRecomp** | Zelda: Skyward Sword HD (Switch) | `Apolinario-coder`, GitHub | 2026-11-13 | `github.com/Apolinario-coder/SkyRecomp` → **404** | Comprobación directa; ficha previa del catálogo con `sourceDead` |
| **Project Tandem** | Mario Kart: Double Dash!! (GameCube) | `badcompany94-rcmp`, GitHub | 2026-11-13 | Repo principal reportado 404; URL exacta no confirmada | TheGamer; Pro-Gamer |
| **MTF-Recomp** | Mario Tennis Fever (Switch 2) | `kayochiaradia`, GitHub | 2026-11-13 | Repo principal reportado 404; URL exacta no confirmada | TheGamer; VGTimes |

**Lo que no está probado:**

- Nintendo no publicó un comunicado nombrando estos cuatro proyectos.
- No hay aviso en `github/dmca` que los nombre. Los avisos del 6 y 12 de noviembre tratan de emuladores, firmware y listas de compatibilidad.
- Las fechas exactas de desaparición varían entre medios; se usa la ventana 11–13 de noviembre.

### 3.2 Qué NO fue retirado (verificado)

| Proyecto | Juego | Estado |
| --- | --- | --- |
| Ship of Harkinian (`HarbourMasters/Shipwright`) | Ocarina of Time | Activo; push 2026-11-16; v9.3.1 (2026-10-18) |
| 2Ship2Harkinian | Majora's Mask | Activo; v5.0.1 |
| Zelda 64: Recompiled | Majora's Mask | Activo; 7.7k★; OoT "soon" |
| Ghostship | Super Mario 64 | Activo; v3.0.0 (sep-2026) |
| sm64coopdx | Super Mario 64 | Activo; v1.5.1 (2026-06-01) |
| Hookshot | OoT remake (Switch 2) | Activo; v2.0.11 |

Esto importa para no repetir bulos: la ola de noviembre **no** tumbó los ports grandes de Zelda ni el ecosistema de Mario 64.

### 3.3 Qué apareció después (sucesores y recomps independientes)

| Proyecto | Juego | Creado | Release | Plataformas | Relación declarada |
| --- | --- | --- | --- | --- | --- |
| `Simon3Sarkis/super-odyssey-pc-recomp` | Super Mario Odyssey | 2026-11-12 | v0.3.1 (2026-11-16) | Windows, Linux | Recomp nativa "AI-made"; sin archivos del juego. No declara ser fork de PowerMoon |
| `rwwo8/OdysseyRecomp` | Super Mario Odyssey 1.0.0 | 2026-11-10 | 0.2.6 (2026-11-16) | Windows, Linux, macOS | Recomp independiente; construida con ayuda de IA |
| `slex2jf/Project-Tandem--ANDROID` | Mario Kart: Double Dash!! | 2026-11-12 | 1.1 (2026-11-12) | Android ARM64 | Continuación Android con el nombre "Project Tandem" |
| `printfFriendo/SkyRecomp-Android` | Zelda: Skyward Sword HD | 2026-11-11 | v1.0.9-alpha (2026-11-12) | Android | Continuación "Sky Recomp" con builds Android |
| `Ramasanjaya22/SkywardRecomp` | Zelda: Skyward Sword HD | 2026-11-16 | — (55 % WIP) | Windows (Vulkan) | Recomp independiente derivada de LAS Recomp |
| `ethannicholas/mariokartdd-recomp` | Mario Kart: Double Dash!! | 2026-10-12 | — (build from source) | Windows, macOS | Recomp independiente con runtime propio `gcn-recomp`; MIT |
| `LeftInWalmart/MKDD-Recomp` | Mario Kart: Double Dash!! | 2026-10-04 | — (WIP) | Windows, Linux | Decomp/recomp en Rust con runtime Bevy; método "spreadsheet" |

**Lectura:** el 12 de noviembre, el mismo día de las retiradas, ya existían al menos dos reuploads/continuaciones (Odyssey y Tandem Android). La ventana de exclusividad de un takedown en este espacio es de horas, no de semanas.

### 3.4 El resto de la ola (no retirada, sí nueva)

| Proyecto | Juego | Creado | Release | Plataformas |
| --- | --- | --- | --- | --- |
| `pixl27/ProjectReLink` | Ocarina of Time remake (Switch 2) | 2026-11-13 | v0.7.8 (2026-11-16) | Windows |
| `AlonsoTlol/DS-Kart-Recompiled` | Mario Kart DS | 2026-10-28 | v1.0.5 (2026-11-15) | Windows, Linux (beta), macOS (beta) |
| `nvd123-YT/MK7Recomp` | Mario Kart 7 | 2026-11-16 | v1.0.2 (2026-11-16) | Windows, Linux, macOS |
| `galarianpikachu2021-hue/Racing-8-DX-Recomp` | Mario Kart 8 Deluxe | 2026-10-23 | BETA 0.2.5 (2026-11-16) | Windows, Linux |
| `adriadam10/mkw-recomp` | Mario Kart World (Switch 2) | 2026-11-09 | v0.1.13 (2026-11-16) | Windows, Linux |

---

## 4. Brecha del catálogo

### 4.1 Ya estaba cubierto

| Juego | Ficha existente | Estado |
| --- | --- | --- |
| Super Mario Odyssey | `super-mario-odyssey` (OdysseyDecomp) | Activa (alpha, sin release) |
| Super Mario Odyssey | `coz-0-smo-recomp` | Activa (alpha, añadida 2026-10-23) |
| Mario Kart 8 Deluxe | `mario-kart-8-deluxe-recomp` (`dougchansan/mk8-recomp`) | Activa; repo vivo, último push 2026-10-24 |
| Skyward Sword HD | `apolinario-coder-skyrecomp` | **Repo 404**; ficha con `sourceDead: true` |
| OoT remake (Switch 2) | `hookshot` | Activa |
| Majora's Mask | `zelda64-recomp`, `2ship2harkinian` | Activas |
| Twilight Princess HD | `twilight-princess-hd-macos` | Activa |
| Mario Kart DS / 7 / Wii / 64 | varias fichas | Cobertura amplia |

### 4.2 Faltaba (añadido en esta pasada)

1. `super-odyssey-pc-recomp` — Simon3Sarkis (Windows/Linux).
2. `rwwo8-odyssey-recomp` — rwwo8 (Windows/Linux/macOS).
3. `project-tandem-android` — slex2jf (Android).
4. `skyrecomp-android` — printfFriendo (Android).
5. `mariokartdd-recomp` — ethannicholas (Windows/macOS).
6. `mkdd-recomp-rust` — LeftInWalmart (Windows/Linux, WIP).
7. `skyward-recomp` — Ramasanjaya22 (Windows, WIP 55 %).
8. `project-relink` — pixl27 (Windows).
9. `ds-kart-recompiled` — AlonsoTlol (Windows/Linux/macOS).
10. `mk7-recomp` — nvd123-YT (Windows/Linux/macOS).
11. `racing-8-dx-recomp` — galarianpikachu2021-hue (Windows/Linux).
12. `mkw-recomp` — adriadam10 (Windows/Linux).

### 4.3 Descartado a propósito

| Candidato | Motivo |
| --- | --- |
| `rarcos/power-moon-recomp-k10` | Fork de PowerMoon para CPUs K10, 1★, sin evidencia de autoría propia ni release estable |
| `aakashmehra/DS-Kart-Recompiled-for-iOS` | Variante iOS de 2★ sin releases; se reevalúa si publica build |
| `AM2R-Community-Updates` | Repo **archivado**; el desarrollo pasó a una rama privada y las builds se instalan con AM2RLauncher (ya hay ficha Android) |
| Reuploads anónimos de PowerMoon/Tandem/SkyRecomp | Sin autoría verificable ni repo estable; la política editorial exige fuente oficial |
| Mario Kart ReTour | Sin repo, web ni Discord; no hay fuente que enlazar |
| MTF-Recomp | Sin sucesor localizado a 2026-11-16 |

---

## 5. Riesgos y política editorial

- **No enlazar espejos de contenido infractor.** Las fichas nuevas apuntan solo a repos que declaran no incluir código, assets, claves ni firmware del juego.
- **Reuploads vs. continuaciones.** `Project-Tandem--ANDROID` y `SkyRecomp-Android` usan el nombre de proyectos retirados. Se documentan como continuaciones, no como los proyectos originales; si aparece un aviso válido, pasan a `takedown` y se desenlazan.
- **Ficha `apolinario-coder-skyrecomp`:** el repo está muerto. Opciones: (a) convertirla en registro `takedown` (política actual), o (b) mantenerla con `sourceDead` y nota de retirada para conservar el contexto. Recomendación: (a) cuando se confirme la fecha del aviso; hoy la evidencia es 404 + prensa.
- **Puertos generados con IA:** `super-odyssey-pc-recomp` y `OdysseyRecomp` lo declaran en el README; ambas fichas llevan `aiDisclosure` con cita textual.
- **No usar "Nintendo confirmó":** en la ola de noviembre no hubo confirmación ni aviso público de Nintendo. La redacción correcta es "retirado tras una acción atribuida a Nintendo".

---

## 6. Seguimiento recomendado

1. **GitHub DMCA archive:** vigilar `github/dmca/tree/master/<año>/<mes>` y buscar `nintendo`. Es la fuente que separa un takedown real de un rumor.
2. **GitHub topics:** `static-recompilation`, `recomp`, `decompilation`, `nintendo-switch`, `wiiu`, `gamecube`; ordenar por `created` para detectar sucesores en las primeras 48 h.
3. **Releases:** suscribirse a los feeds de los 12 repos nuevos. Un proyecto sin release es una ficha `wip`; con release pasa a `beta`.
4. **Cadencia:** revisión semanal durante dos semanas tras cada ola; mensual el resto.
5. **Criterio de retirada:** si un repo desaparece, no borrar la ficha; marcarla `sourceDead` y abrir incidencia de takedown.

---

## 7. Fuentes

### Primarias

- GitHub DMCA, avisos Nintendo del 6 de noviembre de 2026: `github.com/github/dmca/blob/master/2026/11/2026-11-06-nintendo-2.md` (red de 144 repos) y `-4.md` (Citron, 71 repos).
- GitHub DMCA, avisos del 12 de noviembre de 2026: `2026-11-12-nintendo.md` (Ryubing/Compatibility), `-2.md`, `-3.md`, `-4.md` (Citron).
- Repos y releases consultados vía API de GitHub el 2026-11-16: `Simon3Sarkis/super-odyssey-pc-recomp`, `rwwo8/OdysseyRecomp`, `slex2jf/Project-Tandem--ANDROID`, `printfFriendo/SkyRecomp-Android`, `ethannicholas/mariokartdd-recomp`, `LeftInWalmart/MKDD-Recomp`, `Ramasanjaya22/SkywardRecomp`, `pixl27/ProjectReLink`, `AlonsoTlol/DS-Kart-Recompiled`, `nvd123-YT/MK7Recomp`, `galarianpikachu2021-hue/Racing-8-DX-Recomp`, `adriadam10/mkw-recomp`.
- Comprobación 404 de URLs reportadas: `github.com/Apolinario-coder/SkyRecomp` (confirmada) y `github.com/badcompany94/rcmp`, `github.com/kayochiaradia/MTF-Recomp` (reportadas por prensa, no confirmadas como URL canónica).

### Prensa

- TheGamer, 2026-11-13: "Nintendo takes down four fan-ported PC games" (`thegamer.com/nintendo-takes-down-four-fan-ported-pc-games-dmca-wave/`).
- VGTimes, 2026-11-13: "Fan-made PC ports of Mario and Zelda games hit by a new wave of Nintendo takedowns".
- Pro-Gamer, 2026-11-13: "Super Mario Odyssey, Zelda Skyward Sword HD et Mario Kart Double Dash : Nintendo fauche 4 portages PC natifs".
- Nintendo Connect, 2026-11-12: "Mario Kart ReTour offline: Nintendo lässt Trailer entfernen".
- Gaming Reinvented, 2026-10-13: "Nintendo Shuts Down Mario Kart 8 Browser Clone".
- Eurogamer, 2020-05-09: "Nintendo faces an uphill struggle trying to scrub the unofficial Super Mario 64 PC port".
- VGC, 2020-05-08: "Nintendo takes action against Mario 64 PC port".
- TorrentFreak, 2016-08-15: "Nintendo Pressure Shuts Down Fan-Made Pokémon Uranium Game".
- Rock Paper Shotgun, 2016-08-09: "Fan-made Metroid II Remake Shut Down By Nintendo".
- Nintendo Life, 2021-08-27: "The Fan-Made 2D Metroid Prime Game Has Been Forced To Shut Down".

### Contexto

- Wikipedia: "Intellectual property protection by Nintendo", "AM2R", "Pokémon Prism", "Ship of Harkinian".
- portedgames.com/recompiled-games y recompedia.com: seguimiento de estados "Offline/Taken down" (usados solo como pista, nunca como prueba).
