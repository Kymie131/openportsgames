import type { Port } from "@/lib/ports/schema";

export const rush2049Recomp: Port = {
  schema: "port",
  id: "rush-2049-recomp",
  title: "San Francisco Rush 2049 Recompiled",
  game: "San Francisco Rush 2049",
  developers: ["n64hub"],
  publisher: "Midway",
  originalYear: 1999,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "web"],
  status: "beta",
  release: { version: "0.1.54", date: "2026-11-03" },
  sources: ["https://github.com/n64hub/rush-2049-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-24",
  originalSystems: ["Nintendo 64"],
  summary:
    "San Francisco Rush 2049 is a racing game published by Midway for Nintendo 64, released in 1999.",
  summaryEs:
    "San Francisco Rush 2049 es un videojuego de carreras publicado por Midway para Nintendo 64, lanzado en 1999.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/n64hub/rush-2049-recomp/releases/download/v0.1.63/Rush2049Recompiled-v0.1.63-linux-x64.tar.gz",
      size: "10.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/n64hub/rush-2049-recomp/releases/download/v0.1.63/Rush2049Recompiled-v0.1.63-windows-x64.zip",
      size: "35.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/San%20Francisco%20Rush%202049%20(USA).png",
    alt: "San Francisco Rush 2049 (box art)",
    credit: "libretro",
  },
  notes:
    "Static recompilation of San Francisco Rush 2049 for Windows, Linux and the web. Version 0.1.54 includes both Windows x64 and Linux x64 builds; the Windows version has been played through all six tracks, with split-screen and Controller Pak saves, while the Linux build is newer. The browser build needs Chrome or Edge and reads your own ROM locally. No ROM or game data is included.",
  notesEs:
    "Recompilación estática de San Francisco Rush 2049 para Windows, Linux y navegador. La versión 0.1.54 incluye builds para Windows x64 y Linux x64; la versión de Windows se ha jugado en los seis circuitos, con pantalla dividida y guardados de Controller Pak, mientras que la de Linux es más reciente. La build de navegador necesita Chrome o Edge y lee tu propia ROM localmente. No incluye ROM ni datos del juego.",
};
