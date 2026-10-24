import type { Port } from "@/lib/ports/schema";

export const openTyrian: Port = {
  schema: "port",
  id: "opentyrian",
  title: "OpenTyrian",
  game: "Tyrian",
  developers: ["Jason Emery"],
  publisher: "Epic MegaGames",
  originalYear: 1995,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "2.1.20260913", date: "2026-09-14" },
  sources: ["https://github.com/opentyrian/opentyrian"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: ["Cross-platform SDL2 builds", "Supports the full game data set"],
  featuresEs: ["Builds SDL2 multiplataforma", "Compatible con todo el conjunto de datos del juego"],
  summary: "Tyrian is a vertically scrolling shooter developed by Eclipse Software for MS-DOS and published in 1995 by Epic MegaGames. Tyrian was programmed by Jason Emery, illustrated by Daniel Cook, and its music composed by Alexander Brandon and Andras Molnar. A slightly enhanced version was published in 1999 as Tyrian 2000. The game was re-released as freeware in 2004.",
  summaryEs: "Tyrian es un matamarcianos de desplazamiento vertical para MS-DOS desarrollado por World Tree Games Productions y publicado en 1995 por Epic MegaGames.",
  notes:
    "Open source port of the vertical scrolling shooter Tyrian. The game data is not included and must be supplied by the player.",
  notesEs:
    "Port de código abierto del shooter de desplazamiento vertical Tyrian. Los datos del juego no se incluyen y debe aportarlos el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Tyrian.png",
    alt: "Tyrian (box art)",
    credit: "Box art",
  },
};
