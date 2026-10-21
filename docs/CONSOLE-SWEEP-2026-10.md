# Barrido de homebrew y ports por consola — 2026-10-18

Tercera fuente de descubrimiento: busqueda por consola en GitHub (`psp`, `psvita`, `3ds`, `ds`, `wii`, `gamecube`,
`switch`, `n64`, `snes`, `nes`, `gba`, `game boy`, `dreamcast`, `saturn`, `genesis`, `xbox`, `xbox 360`, `ps1`,
`ps2`, `ps3`, `ps4`) mas los candidatos de la lista de r/PSP y la hoja Android.

## Resultado

- **420 repositorios nuevos** detectados (cruzados por URL contra el catalogo).
- **124 fichas anadidas**: 92 en el primer lote (PSP, PS Vita, 3DS, DS, Wii/Wii U, Switch y recomps a PC) y 32 en
  el segundo (los que estaban bloqueados por el esquema de plataformas, mas otros).
- **16 fichas PSP auditadas una a una**: todas sus repos mencionan PSP / PlayStation Portable / EBOOT, asi que la
  plataforma asignada es correcta.

## Cambio de esquema: plataformas destino

`platforms` solo admitia PC, movil, Switch, PSP, PS Vita, DS/3DS, Wii/Wii U y PS2/3/4. Eso dejaba fuera proyectos
reales cuyo destino es otra consola. Ahora `platformKeys` incluye tambien:

`ps5`, `ps1`, `xbox`, `xbox360`, `nes`, `snes`, `n64`, `gb`, `gbc`, `gba`, `genesis`, `saturn`, `dreamcast`, `arcade`

Con eso, el registro de consolas (`src/content/consoles.ts`) pasa de 10 a **24 consolas** y cada una tiene su
pagina en `/[lang]/console/<slug>/` con sus builds, los ports de sus juegos y todos los sitios que los publican.

## Descartados de esta pasada (con motivo)

- **Herramientas, runtimes y SDKs**: `N64Recomp/N64Recomp`, `ran-j/PS2Recomp`, `rexglue/rexglue-sdk`,
  `overdrivenpotato/rust-psp`, `afska/gba-link-connection`, `hkmodd/ps2-recomp-Agent-SKILL`,
  `SrBananaMan/N64RecompGameTemplate`, `N64Recomp/RecompFrontend`, `Saymond/box3d-psp`,
  `ArthurReboulSalze/RetroRecomp`, `Ohcmon/N64Recomp`, `AsadSi/ocarina-of-time-recomp-runtime`.
- **Emuladores**: `amwatson/CitraVR`, `niuus/WiiSXRX`, `niuus/Snes9xRX`, `fadedled/seta-gx`,
  `RSDuck/vba-next-switch`, `kamb205/KB-RPCS3` (RPCS3 en PS5), `xash3d-wii`, `xash3d-ps5` (motor, no juego).
- **Hardware y mods**: `citrus3000psi/SD2SP2`, `MethodOrMadness/GC-USB-C`, `loopj/usb-gamecube-controller-adapter`,
  `mackieks/awesome-portablizing`, `FIX94/twilight-hack-gc`, `Hojo-Norem/PadSwitcher64`,
  `ArcheSV/sm64coopdx-switch` (lo cubre `sm64coopdx`), `EGC-*`.
- **Listas y guias**: `BlueInterlude/awesome-recompilations`, `CrownParkComputing/Xbox360-Native-Ports`
  (solo launchers), `vs-sr-dev/*` (analisis de disco sin build jugable), `mirou1611/AstraRecomp`,
  `AngelZINxL/bt3-vita-port` (runtime experimental).
- **Juegos propios, no ports**: `gavilanbe/sprout-gbc`, `likagfeld/coup-saturn` si se interpreta como juego nuevo,
  `azure-blondon/3dscheskers`, `abdelali221/SnakeWii`, `violinmelody/2048PSP` (si, 2048 es un juego web; se ficho),
  `josiahlaster/Magic-and-Woods-Vita-Port`, `VGlazaxSteklyashki/Occu-vita`.
- **Duplicados de un proyecto ya fichado**: `Team-Resurgent/*` si el juego ya tiene ficha para otra plataforma
  (se ficharon igual por ser destino Xbox), `Genesis5500/ArmyOfTwo-Recomp`, `mstan/DKC2Recomp` (superado por
  `elliotttate/DKC2Recomp`), `MaxDeadBear/KameoRePowered` (ya esta `birebittoh/KameoRePowered`),
  `KissedToge/osu-3DS` (ya esta `osu-3ds`), `DKC-Recomp/DKC-Recomp` (el propio README dice que no funciona).

## Pendiente para la siguiente pasada

1. Los ~120 candidatos restantes del barrido que son ports pequenos o muy nuevos (sin release, <10 estrellas):
   se pueden anadir igual, solo hay que revisarlos uno a uno para confirmar plataforma y juego original.
2. Repetir el barrido con los topics de GitHub (`topic:psp-homebrew`, `topic:psvita`, `topic:3ds-homebrew`,
   `topic:wii-homebrew`, `topic:n64recomp`), que ordenan por tema y no por texto.
3. PortMaster y las listas curadas siguen siendo la mejor fuente para source ports de PC; readonlymemo y PortsDR
   para recomps de consola.
