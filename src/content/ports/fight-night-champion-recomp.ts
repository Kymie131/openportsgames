import type { Port } from "@/lib/ports/schema";

export const fightNightChampionRecomp: Port = {
  schema: "port",
  id: "fight-night-champion-recomp",
  title: "Fight Night Champion Recompiled",
  game: "Fight Night Champion",
  developers: ["whompay"],
  publisher: "EA Sports",
  originalYear: 2011,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/whompay/FNCReborn"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Fight Night Champion is a boxing video game developed by EA Canada and published by Electronic Arts. It is the fifth and last entry in the Fight Night series and was released in March 2011 for the PlayStation 3 and Xbox 360. The game takes a drastic turn from its predecessors, depicting a \"grittier\", \"darker\" setting with animations and player damage that \"truly conveys the brutality of the sport of boxing.\" The violence and strong language in the game's story mode earned it a Mature rating from the Entertainment Software Rating Board, the first EA Sports title to do so.",
  summaryEs: "Fight Night Champion es un videojuego de boxeo desarrollado por EA Sports, la quinta parte de la serie de juegos de simulación de boxeo Fight Night. Entre la lista de boxeadores para jugar se encuentran actuales, así como también boxeadores retirados y de otras épocas. El juego está disponible para PlayStation 3 y Xbox 360.",
  notes:
    "Static recompilation of Fight Night Champion (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Fight Night Champion (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/34/Fight_Night_Champion.jpg",
    alt: "Fight Night Champion (cover)",
    credit: "Wikipedia",
  },
};
