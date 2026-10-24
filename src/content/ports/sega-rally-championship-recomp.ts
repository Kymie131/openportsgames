import type { Port } from "@/lib/ports/schema";

export const segaRallyChampionshipRecomp: Port = {
  schema: "port",
  id: "sega-rally-championship-recomp",
  title: "Sega Rally Championship Recompiled",
  game: "Sega Rally Championship",
  developers: ["xandoxan65"],
  publisher: "Sega",
  originalYear: 1995,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/xandoxan65/segarally95-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Arcade"],
  summary: "Sega Rally Championship is a 1995 racing game developed and published by Sega. Originally released for arcades using the Sega Model 2 board, ports were published for the Sega Saturn in 1995 and Microsoft Windows in 1997. It is a rally racing game that simulates driving on different surfaces with varying friction, with the car's handling changing accordingly. As the first racing game to incorporate this feature, Sega Rally Championship is considered to be a milestone in the evolution of the racing game genre.",
  summaryEs: "Sega Rally Championship es un videojuego de carreras desarrollado por el estudio interno AM3 de Sega en 1995 para la placa de recreativas arcade Sega Model 2.",
  notes:
    "Recompilation of Sega Rally Championship (Model 2 arcade) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación de Sega Rally Championship (arcade Model 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/eb/Sega_Rally_flyer.jpg",
    alt: "Sega Rally Championship (arcade flyer)",
    credit: "Wikipedia",
  },
};
