import type { Port } from "@/lib/ports/schema";

export const zeldaTmc3ds: Port = {
  schema: "port",
  id: "zelda-tmc-3ds",
  title: "The Minish Cap (3DS)",
  game: "The Legend of Zelda: The Minish Cap",
  developers: ["EstebanPdN"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/zelda-tmc-3ds"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "The Legend of Zelda: The Minish Cap is a 2004 action-adventure game developed by Capcom and Flagship and published by Nintendo for the Game Boy Advance. The twelfth entry in The Legend of Zelda series, The Minish Cap was released for the Game Boy Advance in Japan and Europe in 2004 and in North America and Australia the following year.",
  summaryEs: "The Legend of Zelda: The Minish Cap, conocido en Japón como Zelda no Densetsu: Fushigi no Bōshi , es el duodécimo videojuego de la saga The Legend of Zelda, desarrollado por Flagship bajo la supervisión de Nintendo. The Minish Cap es el primer título original de la saga para consola portátil tras la reedición de The Legend of Zelda: A Link to the Past junto con el primer Zelda multijugador, The Legend of Zelda: Four Swords. El juego llegó a Game Boy Advance en noviembre de 2004 en Japón y Europa, y a principios de 2005 en Estados Unidos y Australia.",
  notes:
    "Native Nintendo 3DS port of The Minish Cap, based on Project Picori. Requires your own ROM.",
  notesEs:
    "Port nativo para Nintendo 3DS de The Minish Cap, basado en Project Picori. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/e98002ab38ca88f2ca5e461cc99c5d2b.jpg",
    alt: "The Legend of Zelda: The Minish Cap (cover)",
    credit: "SteamGridDB",
  },
};
