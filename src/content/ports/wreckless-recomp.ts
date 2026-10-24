import type { Port } from "@/lib/ports/schema";

export const wrecklessRecomp: Port = {
  schema: "port",
  id: "wreckless-recomp",
  title: "Wreckless: The Yakuza Missions",
  game: "Wreckless: The Yakuza Missions",
  developers: ["sp00nznet"],
  publisher: "Activision",
  originalYear: 2002,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/wreckless"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  summary: "Wreckless: The Yakuza Missions, known in Japan as Double S.T.E.A.L. , is a 2002 racing video game originally released on the Xbox and later for GameCube and PlayStation 2, using Traveller's Tales' in-house game engine, under the codename \"T-Total\", on the latter platform. The game is set in Hong Kong, in which the player completes missions.",
  summaryEs: "Wreckless: The Yakuza Missions es un videojuego de carreras lanzado originalmente en Xbox y más tarde para GameCube y PlayStation 2. El juego es un juego de conducción ambientado en Hong Kong, en el que el jugador completa misiones.",
  notes:
    "Static recompilation of Wreckless: The Yakuza Missions (Xbox) with ReXGlue. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Wreckless: The Yakuza Missions (Xbox) con ReXGlue. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Wreckless%20-%20The%20Yakuza%20Missions%20(Europe).png",
    alt: "Wreckless: The Yakuza Missions (box art)",
    credit: "Box art",
  },
};
