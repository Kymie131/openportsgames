import type { Port } from "@/lib/ports/schema";

export const flowPs3Recomp: Port = {
  schema: "port",
  id: "flow-ps3-recomp",
  title: "flOw - Static Recompilation",
  game: "flOw",
  developers: ["sp00nznet"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2007,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/flow"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation 3"],
  summary: "Flow is an indie video game created by Jenova Chen and Nicholas Clark. Originally released as a free Flash game in 2006 to accompany Chen's master's thesis, it was reworked into a 2007 PlayStation 3 game by his development studio, Thatgamecompany, with assistance from Santa Monica Studio. SuperVillain Studios developed a PlayStation Portable version of the game in 2008, and PlayStation 4 and PlayStation Vita versions in 2013. In Flow, the player navigates a series of two-dimensional planes with an aquatic microorganism that grows and evolves by consuming other microorganisms.",
  summaryEs: "Flow es un videojuego independiente creado por Jenova Chen y Nicholas Clark. Originalmente lanzado como un juego Flash gratuito en 2006 para acompañar la tesis de maestría de Chen, fue reelaborado como un juego para PlayStation 3 en 2007 por su estudio de desarrollo Thatgamecompany con la ayuda de Santa Monica Studio. SuperVillain Studios desarrolló una versión del juego para PlayStation Portable en 2008, y versiones para PlayStation 4 y PlayStation Vita en 2013.",
  cover: {
    src: "https://openportsgames.com/covers/generated/flow.svg",
    alt: "flOw (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Native recompilation of flOw (PlayStation 3). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de flOw (PlayStation 3). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://upload.wikimedia.org/wikipedia/en/9/9c/Flow_game_screenshot.jpg",
      alt: "flOw (screenshot)",
      credit: "Wikipedia",
    },
  ],
};
