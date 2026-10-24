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
  originalSystems: ["Xbox 360"],
  summary: "Sega Superstars Tennis is a sports video game developed by Sumo Digital and published by Sega. It is the second title in the Sega All-Stars series, preceded by Sega Superstars (2004), and crosses over characters, locations, and soundtracks from several Sega franchises, including Sonic the Hedgehog, Space Channel 5, and Super Monkey Ball. It is the first and only Sega-themed tennis game to represent multiple franchises, and is the first game to feature Alex Kidd since the release of Alex Kidd in Shinobi World (1990).",
  summaryEs: "Sega Superstars Tennis es un videojuego de tenis desarrollado por Sumo Digital y publicado por Sega. El juego fue publicado el 18 de marzo de 2008 en América del Norte, el 20 de marzo de 2008 en Europa, y el 27 de marzo de 2008 en Australia. El juego incluye dieciséis personajes controlables de franquicias de Sega así como diez canchas de tenis. En total, quince franquicias de Sega son representadas en el juego. Junto con Sonic & Sega All-Stars Racing, tendrá una versión de Mac OS X por Feral Interactive.",
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
