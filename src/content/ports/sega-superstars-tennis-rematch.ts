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
    "Recompilation of Sega Superstars Tennis (Xbox 360) to native Windows via ReXGlue. You supply the game files.",
  notesEs:
    "Recompilación de Sega Superstars Tennis (Xbox 360) a Windows nativo mediante ReXGlue. Tú aportas los archivos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/10/SEGA_Superstars_Tennis.jpg",
    alt: "Sega Superstars Tennis (box art)",
    credit: "Wikipedia",
  },
};
