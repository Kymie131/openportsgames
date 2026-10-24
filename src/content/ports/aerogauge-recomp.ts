import type { Port } from "@/lib/ports/schema";

export const aerogaugeRecomp: Port = {
  schema: "port",
  id: "aerogauge-recomp",
  title: "AeroGauge",
  game: "AeroGauge",
  developers: ["alondero"],
  publisher: "ASCII Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/alondero/aerogauge-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "AeroGauge is a 1997 racing game developed by Locomotive and published by ASCII Entertainment for the Nintendo 64. It is conceptually similar to Psygnosis's Wipeout and Acclaim Entertainment's Extreme-G; the main difference is that the vehicles in the game fly instead of hovering. AeroGauge garnered mediocre reviews, with criticism directed at its routine concept, excessive pop up, lack of weapons and power-ups, and overly high difficulty.",
  summaryEs: "AeroGauge es un videojuego para la Nintendo 64 que trata sobre futurísticas carreras aeroespaciales de hovercrafts en diversas pistas contra diversos contrincantes. Tiene disponible un modo de un solo jugador, GrandPrix, multijugador y contrarreloj, en el cual se puede jugar con tres dificultades: Novato, Mediano y Experto. Este videojuego sigue la estética utilizada en otros videojuegos como la serie Extreme G y/o el Wipeout.",
  notes:
    "Static recompilation of AeroGauge (N64) with N64Recomp and the RT64 renderer. It requires your own game files.",
  notesEs:
    "Recompilación estática de AeroGauge (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/AeroGauge%20(Europe)%20(En,Fr,De).png",
    alt: "AeroGauge (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/AeroGauge%20(Europe)%20(En,Fr,De).png",
      alt: "AeroGauge (screenshot)",
      credit: "Libretro",
    },
  ],
};
