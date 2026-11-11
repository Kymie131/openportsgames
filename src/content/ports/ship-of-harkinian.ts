import type { Port } from "@/lib/ports/schema";

export const shipOfHarkinian: Port = {
  schema: "port",
  id: "ship-of-harkinian",
  title: "Ship of Harkinian",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "9.3.1", date: "2026-10-18" },
  sources: ["https://github.com/HarbourMasters/Shipwright"],
  website: "https://www.harbourmasters.org/game/ship-of-harkinian",
  docs: "https://www.shipofharkinian.com/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-10-27",
  screenshots: [
    {
      src: "https://www.shipofharkinian.com/screenshot_saria.jpg",
      alt: "Saria speaking with Link inside the Lost Woods in Ocarina of Time",
      credit: "Ship of Harkinian",
    },
  ],
  summary: "The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game developed and published by Nintendo for the Nintendo 64. It was the first Legend of Zelda game with 3D graphics. It was released in Japan and North America in November 1998 and in PAL regions the following month.",
  summaryEs: "The Legend of Zelda: Ocarina of Time es un videojuego de acción-aventura de 1998 desarrollado por la filial Nintendo EAD y publicado por Nintendo para la consola Nintendo 64. Fue lanzado en Japón el 21 de noviembre de 1998, mientras que a Norteamérica llegó dos días después, el 23 de noviembre, y en Europa se estrenó el 11 de diciembre de ese mismo año. Para el caso de Sudamérica, fue presentado en Chile el 23 de noviembre de 1998 en un evento especial para periodistas.",
  notes:
    "Native port of Ocarina of Time from the decompilation project. Requires your own supported copy of the game (an N64 ROM from any region or a GameCube disc); the Nintendo 3DS version is not supported.",
  notesEs:
    "Port nativo de Ocarina of Time a partir del proyecto de descompilación. Requiere tu propia copia compatible del juego (ROM de N64 de cualquier región o disco de GameCube); la versión de Nintendo 3DS no es compatible.",
  installGuide: {
    steps: [
      "Own a supported copy of Ocarina of Time: an N64 ROM (US, PAL or JP) or a GameCube disc. The Nintendo 3DS version does not work.",
      "Check the dump with the compatibility checker at ship.equipment.",
      "Download the build for your platform from the project's Releases page (desktop zip or Android APK).",
      "Windows: extract the zip and run soh.exe. Linux: run the AppImage. macOS: open soh.app. Android: install the APK.",
      "Select the game file when prompted; the port generates oot.o2r locally and never redistributes it.",
      "Adjust graphics, audio and controls in the in-game menu, then play.",
    ],
    stepsEs: [
      "Ten una copia compatible de Ocarina of Time: ROM de N64 (US, PAL o JP) o disco de GameCube. La versión de Nintendo 3DS no funciona.",
      "Comprueba el volcado con el verificador de compatibilidad de ship.equipment.",
      "Descarga la versión para tu plataforma desde la página de Releases (zip de escritorio o APK de Android).",
      "Windows: descomprime el zip y ejecuta soh.exe. Linux: ejecuta el AppImage. macOS: abre soh.app. Android: instala el APK.",
      "Selecciona el archivo del juego cuando lo pida; el port genera oot.o2r en local y nunca lo redistribuye.",
      "Ajusta gráficos, audio y controles en el menú del juego y empieza a jugar.",
    ],
  },
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/HarbourMasters/Shipwright/releases/download/9.3.1/SoH-Dewey-Bravo-Mac.zip",
      size: "47.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/HarbourMasters/Shipwright/releases/download/9.3.1/SoH-Dewey-Bravo-Win64.zip",
      size: "69.6 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/HarbourMasters/Shipwright/releases/download/9.3.1/SoH-Dewey-Bravo.appimage",
      size: "30.6 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7a/OcarinaofTime2026.jpeg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Nintendo 64"],
};
