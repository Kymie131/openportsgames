import type { Port } from "@/lib/ports/schema";

export const segaSuperstarsTennisRematch: Port = {
  schema: "port",
  id: "sega-superstars-tennis-rematch",
  title: "Sega Superstars Tennis (ReMatch)",
  game: "Sega Superstars Tennis",
  developers: ["m1ndcrap"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/m1ndcrap/Sega-Superstars-Tennis-ReMatch"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Sega Superstars Tennis (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Sega Superstars Tennis (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/10/SEGA_Superstars_Tennis.jpg",
    alt: "Sega Superstars Tennis (box art)",
    credit: "Wikipedia",
  },
};
