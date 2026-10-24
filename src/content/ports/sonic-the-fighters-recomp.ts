import type { Port } from "@/lib/ports/schema";

export const sonicTheFightersRecomp: Port = {
  schema: "port",
  id: "sonic-the-fighters-recomp",
  title: "Sonic the Fighters Recompiled",
  game: "Sonic the Fighters",
  developers: ["Player124413"],
  publisher: "Sega",
  originalYear: 1996,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Player124413/FightersRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Sonic the Fighters, released outside Japan as Sonic Championship, is a 1996 fighting game developed by Sega AM2 and published by Sega for their Model 2 arcade system. The game pits players in one-on-one battles with a roster of characters from the Sonic the Hedgehog series. Sonic the Fighters was made using the fighting engine for Fighting Vipers (1995), and was the first 3D game in the Sonic series.",
  summaryEs: "Sonic the Fighters es un videojuego de lucha desarrollado por Sega-AM2 para máquinas arcade. Emplea gráficos en 3D y cuenta con personajes y escenarios de la saga Sonic como luchadores.",
  notes:
    "Native Windows port of the Xbox Live Arcade version of Sonic the Fighters through recompilation, with no Xbox 360 emulation. It requires the original game.",
  notesEs:
    "Port nativo para Windows de la versión de Sonic the Fighters para Xbox Live Arcade mediante recompilación, sin emulación de Xbox 360. Requiere el juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5b/Sonic_the_Fighters.png",
    alt: "Sonic the Fighters (box art)",
    credit: "Wikipedia",
  },
};
