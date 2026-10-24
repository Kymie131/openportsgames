import type { Port } from "@/lib/ports/schema";

export const zeldaAlttp3ds: Port = {
  schema: "port",
  id: "zelda-alttp-3ds",
  title: "A Link to the Past (3DS)",
  game: "The Legend of Zelda: A Link to the Past",
  developers: ["EstebanPdN"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/zelda-alttp-3ds"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  summary: "The Legend of Zelda: A Link to the Past is a 1991 action-adventure game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It is the third game in The Legend of Zelda series, following Zelda II: The Adventure of Link (1987). It was released in Japan in 1991, and in North America and Europe in 1992.",
  summaryEs: "The Legend of Zelda: A Link to the Past, conocido en Japón como Zelda no Densetsu: Kamigami no Triforce , también conocido como Zelda 3 y Zelda III, es un juego de acción y aventuras desarrollado y publicado por Nintendo para la consola Super Nintendo Entertainment System y años después a la Game Boy Advance junto a The Legend of Zelda: Four Swords, siendo lanzado el 3 de diciembre del 2002, siendo la tercera entrega de la saga de videojuegos The Legend of Zelda.",
  notes:
    "Nintendo 3DS dual-screen port of A Link to the Past, based on the zelda3 reimplementation. Requires your own ROM.",
  notesEs:
    "Port a doble pantalla de Nintendo 3DS de A Link to the Past, basado en la reimplementación zelda3. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/6bdb3b5d567a727c51d69ea8bf4accde.png",
    alt: "The Legend of Zelda: A Link to the Past (cover)",
    credit: "SteamGridDB",
  },
};
