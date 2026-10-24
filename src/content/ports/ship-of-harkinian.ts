import type { Port } from "@/lib/ports/schema";

export const shipOfHarkinian: Port = {
  schema: "port",
  id: "ship-of-harkinian",
  title: "Ship of Harkinian",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "9.3.0", date: "2026-10-06" },
  sources: ["https://github.com/HarbourMasters/Shipwright"],
  website: "https://www.harbourmasters.org/game/ship-of-harkinian",
  docs: "https://www.shipofharkinian.com/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://www.shipofharkinian.com/screenshot_saria.jpg",
      alt: "Saria speaking with Link inside the Lost Woods in Ocarina of Time",
      credit: "Ship of Harkinian",
    },
  ],
  summary: "The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game developed and published by Nintendo for the Nintendo 64. It was the first Legend of Zelda game with 3D graphics. It was released in Japan and North America in November 1998 and in PAL regions the following month.",
  summaryEs: "The Legend of Zelda: Ocarina of Time es un videojuego de acción-aventura de 1998 desarrollado por la filial Nintendo EAD y publicado por Nintendo para la consola Nintendo 64. Fue lanzado en Japón el 21 de noviembre de 1998, mientras que a Norteamérica llegó dos días después, el 23 de noviembre, y en Europa se estrenó el 11 de diciembre de ese mismo año. Para el caso de Sudamérica, fue presentado en Chile el 23 de noviembre de 1998 en un evento especial para periodistas.",
  notes:
    "Native port of Ocarina of Time from the decompilation project. Requires the original North American Ocarina of Time N64 ROM (legally obtained).",
  notesEs:
    "Port nativo de Ocarina of Time a partir del proyecto de decompilación. Requiere la ROM original norteamericana de Ocarina of Time para N64 (obtenida legalmente).",
  installGuide: {
    steps: [
      "Own a copy of Ocarina of Time, from the Nintendo 64 cartridge or the Nintendo 3DS release.",
      "Extract the game data following the project's official extraction guide using the version you own.",
      "Run the project's extraction tool to build the oot.otr archive and place it next to the executable.",
      "Launch the port; the game data is read locally from oot.otr and never distributed.",
    ],
    stepsEs: [
      "Ten una copia de Ocarina of Time, del cartucho de Nintendo 64 o de la versión para Nintendo 3DS.",
      "Extrae los datos del juego siguiendo la guía oficial de extracción del proyecto usando la versión que poseas.",
      "Ejecuta la herramienta de extracción del proyecto para generar el archivo oot.otr y colócalo junto al ejecutable.",
      "Lanza el port; los datos del juego se leen localmente desde oot.otr y nunca se redistribuyen.",
    ],
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7a/OcarinaofTime2026.jpeg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Nintendo 64"],
};
