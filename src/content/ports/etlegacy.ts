import type { Port } from "@/lib/ports/schema";

export const etLegacy: Port = {
  schema: "port",
  id: "etlegacy",
  title: "ET Legacy",
  game: "Wolfenstein: Enemy Territory",
  developers: ["ET Legacy Team"],
  publisher: "Activision",
  originalYear: 2003,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/etlegacy/etlegacy"],
  discord: "https://discord.gg/UBAZFys",
  website: "https://www.etlegacy.com",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  features: [
    "Continuation of the open source Enemy Territory code",
    "Modern engine improvements and fixes",
  ],
  featuresEs: [
    "Continuación del código abierto de Enemy Territory",
    "Mejoras y arreglos modernos del motor",
  ],
  summary: "Wolfenstein: Enemy Territory is a free and open-source multiplayer first-person shooter video game within the Wolfenstein series. It was originally planned to be released as a commercial expansion pack to Return to Castle Wolfenstein and later as a standalone game. However, due to problems with the single-player aspect, the multiplayer portion was released on 29 May 2003 as a freeware standalone game. In January 2004, the source code for the game logic was released to the benefit of its modding community.",
  summaryEs: "Wolfenstein: Enemy Territory es un videojuego de disparos en primera persona (FPS), inicialmente iba a ser lanzado como una expansión de Return to Castle Wolfenstein, pero fue lanzado como juego completo multijugador y freeware en 2003. El 12 de agosto de 2010 el código fuente fue liberado bajo los términos de la licencia GPL. El juego, ambientado en la Segunda Guerra Mundial, fue creado por Splash Damage, usa el motor de Quake 3 y está distribuido por Activision.",
  notes:
    "Community continuation of the open source Wolfenstein: Enemy Territory codebase. No tagged releases are published.",
  notesEs:
    "Continuación comunitaria del código abierto de Wolfenstein: Enemy Territory. No se publican releases etiquetadas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Wolfenstein_Enemy_Territory_logo.png",
    alt: "Wolfenstein: Enemy Territory (box art)",
    credit: "Wikipedia",
  },
};
