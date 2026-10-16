# Candidatos y descubrimiento — 2026-10 (Etapa 1, solo lectura)

Verificado con la API de GitHub (repo: existe/archived/último push; último release y si trae **APK**).
Comparación contra el catálogo **por URL de repo** (`src/content/ports/*.ts`), no por nombre.

> Estado: **Etapa 1 (diagnóstico)**. No se ha creado ninguna ficha.
> `1b` (barrido de topics + heldgames/readonlymemo/PortMaster/F-Droid) y `1c` (revisión de **todo** el catálogo)
> quedan **PENDIENTES**: requieren muchos más requests y no se ejecutaron en esta pasada.

## A. Candidatos de la lista

| Candidato | Estado API | ¿Ya en catálogo (por repo)? | Notas |
| --- | --- | --- | --- |
| **OpenPort-Labs/mw2-android** | OK · 115★ · C++ · no archived · push 2026-10-13 · release **v0.0.2 (APK)** | No. `call-of-duty-mw2-recomp` usa `paulcombal/mw2-recompiled` (PC) | **Nuevo**: variante Android de MW2 (recomp). Ficha aparte enlazada a la de PC. |
| **ogdanimal/Goemon64Recomp-Android** | OK · 12★ · C · GPL-3.0 · push 2026-10-12 · release **v1.0.8 (APK)** | No. `goemon-64-recompiled` usa `klorfmorf/goemon64recomp` (PC) | **Nuevo**: variante Android. |
| **M4cAndCheese/UnleashedRecomp_Android** | **404 (no existe)** | — | Descartar / pedir enlace correcto. |
| **Nycolazs/WindWakerHD-Android-Plus** | OK · 47★ · C++ · MPL-2.0 · push 2026-10-16 · release **v1.9 (APK)** | No. `zeldawwhdrecompandroid` usa `ssunnking/zeldawwhdrecompandroid---enhanced` | **Nuevo** (o fork distinto): confirmar relación con el slug existente. |
| **Buku313/Skate3-Android** | OK · 227★ · C++ · push 2026-09-16 · release **v2.1.0 (APK)** | **Es el mismo repo que `skate-3-mobile`** (`buku313/skate3-mobile`) | **Renombrado**: `skate3-mobile` → **`Skate3-Android`**. Actualizar la URL de la fuente; no duplicar. |
| **codepdbh/NFS-CARBON-360-ANDROID-RECOMP** | OK · 59★ · push 2026-10-12 · release v0.3.3 (APK) | **Sí: `need-for-speed-carbon-codepdbh`** | Sin cambio. |
| **madelrandel-blip/NFSMW-Recompiled** | OK · 124★ · GPL-3.0 · push 2026-10-08 · release (APK) | **Sí: `nfs-most-wanted-recomp`** | Sin cambio. |
| **zFitness/gow3_android** | OK · 116★ · C++ · GPL-2.0 · push 2026-10-16 · release **v2.1.6-android3 (APK)** | No | **Nuevo**: God of War III Remastered (PS4). Autor: **sin verificar en dispositivo** → ponerlo en notas y estado alpha. |
| **Galaxy-Android (Mohammed Huzaifa)** | **No encontrado** | — | Varios usuarios homónimos; ningún repo de Super Mario Galaxy Android confirmable. Pedir **enlace exacto**. |
| **WitherBlitz/NSMB-Wii-Multiplayer-Recompilation** | OK · 29★ · GPL-3.0 · push 2026-10-14 · release v0.1.1 (APK) | **Sí: `new-super-mario-bros-wii-recomp`** | La ficha existe; el repo ahora es **Android + Windows** → evaluar si añadir `android` a la plataforma. |
| **KeithKirenai/wheeldroid** | OK · 8★ · GPL-3.0 · push 2026-09-14 · **sin release** | No | **Nuevo** (alpha): Mario Kart Wii en Android (WiiCompiled). |
| **keepvaibin/nebula** | OK · 173★ · GPL-3.0 · push 2026-10-13 · release v1.0.0 (sin APK) | No | **Nuevo solo PC** (Android **planeado**, no soportado) → ficha PC. |
| **codepdbh/nfsu2-recompiled** | OK · 99★ · push 2026-10-15 · release **v0.14.5 (APK)** | No | **Nuevo**: NFS Underground 2 (recomp, x86→C). |
| **Endless Sky (F-Droid `com.github.thewierdnut.endless_mobile`)** | Repo fuente = **`thewierdnut/endless-mobile`** (existe, no archived) | No | **Nuevo** (Android): confirmar build/release antes de ficha. |
| **metroid-prime-port** (ya en catálogo) | `Odrannnn/MetroidPrimePort` | Sí (`metroid-prime-port`) | Es port nativo **basado en decompilación de Metroid Prime (GameCube)** y `originalSystems: ["GameCube"]` → **ya cubre GameCube**. Sin cambio. |

**No agregar**: GalaxyPad (iOS/macOS). **Uncharted** ya está como PC (`uncharted-nathan-drake-collection-pc`).

## B. Barrido de descubrimiento — PENDIENTE
Method sugerido (al ejecutar): buscar repos con topics `recomp`, `recompilation`, `static-recompilation`,
`decompilation`, `android-port` y nombres con `Recompiled`/`Recomp`/`Android` + juego; cruzar con
heldgames.com, readonlymemo.com/decompilation-projects-and-n64-recompiled-list, la base de PortMaster y el
índice de F-Droid (Games con repo fuente); revisar la cuenta `wootbeer`. Solo ports nativos/recomps/decomps con
código fuente; excluir emuladores y proyectos sin README claro. Reportar estrellas, último commit y release.

## C. Revisión de lo que ya tenemos — PENDIENTE
Para **todos** los repos del catálogo: comparar último release/tag y fecha del último commit contra la ficha;
reportar versiones nuevas, repos archivados/renombrados/movidos, borrados (404) y fichas con `Unknown` donde el
README ya diga el sistema. (Requiere ~1.200 requests; no ejecutado en esta pasada.)

## Hallazgos que ya tocan el catálogo (para Etapa 2 o correcciones)
1. **`skate-3-mobile`**: repo renombrado a `Buku313/Skate3-Android` → actualizar la URL de la fuente (mismo repo).
2. **`new-super-mario-bros-wii-recomp`**: el repo ahora soporta **Android** además de Windows.
3. **`metroid-prime-port`**: sin cambios (ya es GameCube).
