import type { Port } from "@/lib/ports/schema";

export const fh2: Port = {
  schema: "port",
  id: "fh2",
  title: "fh2",
  game: "Heroes of Might and Magic II",
  developers: ["New World Computing"],
  publisher: "The 3DO Company",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.1.17", date: "2026-06-30" },
  sources: ["https://github.com/ihhub/fheroes2"],
  discord: "https://discord.gg/xF85vbZ",
  website: "https://ihhub.github.io/fheroes2/",
  license: {
    spdx: "GPL-2.0",
  },
  verified: false,
  notes:
    "Engine reimplementation for Heroes of Might and Magic II, written from scratch in C++. Ships official Android builds on Google Play plus Windows, macOS and Linux releases.",
  notesEs:
    "Reimplementación del motor de Heroes of Might and Magic II, escrita desde cero en C++. Publica builds oficiales para Android en Google Play, además de releases para Windows, macOS y Linux.",
  installGuide: {
    steps: [
      "Obtain the original Heroes of Might and Magic II data, or use the free demo the project links to.",
      "On desktop, download the release build for your platform from the official releases page.",
      "On Android, install fheroes2 from Google Play or use the Android archive from the releases page.",
      "Point the fheroes2 toolset at your data files, or extract the demo assets from inside the app.",
      "Launch the game; fheroes2 reads the original assets and adds modern rendering and interface improvements.",
    ],
    stepsEs: [
      "Consigue los datos originales de Heroes of Might and Magic II, o usa la demo gratuita que enlaza el proyecto.",
      "En escritorio, descarga la compilación publicada para tu plataforma desde la página oficial de releases.",
      "En Android, instala fheroes2 desde Google Play o usa el archivo Android de la página de releases.",
      "Apunta el fheroes2 toolset a tus archivos de datos, o extrae los recursos de la demo desde la propia app.",
      "Inicia el juego; fheroes2 lee los recursos originales y añade renderizado e interfaz modernos.",
    ],
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/ihhub/fheroes2/master/docs/images/screenshots/screenshot_world_map.webp",
      alt: "World map view in fheroes2",
      credit: "fheroes2",
    },
    {
      src: "https://raw.githubusercontent.com/ihhub/fheroes2/master/docs/images/screenshots/screenshot_battle.webp",
      alt: "A battle in fheroes2",
      credit: "fheroes2",
    },
    {
      src: "https://raw.githubusercontent.com/ihhub/fheroes2/master/docs/images/screenshots/screenshot_castle.webp",
      alt: "Castle screen in fheroes2",
      credit: "fheroes2",
    },
  ],
};
