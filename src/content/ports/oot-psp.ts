import type { Port } from "@/lib/ports/schema";

export const ootPsp: Port = {
  schema: "port",
  id: "oot-psp",
  title: "Ocarina of Time (PSP)",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["z2442"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/z2442/oot-PSP"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game developed and published by Nintendo for the Nintendo 64. It was the first Legend of Zelda game with 3D graphics. It was released in Japan and North America in November 1998 and in PAL regions the following month.",
  summaryEs: "The Legend of Zelda: Ocarina of Time es un videojuego de acción-aventura de 1998 desarrollado por la filial Nintendo EAD y publicado por Nintendo para la consola Nintendo 64. Fue lanzado en Japón el 21 de noviembre de 1998, mientras que a Norteamérica llegó dos días después, el 23 de noviembre, y en Europa se estrenó el 11 de diciembre de ese mismo año. Para el caso de Sudamérica, fue presentado en Chile el 23 de noviembre de 1998 en un evento especial para periodistas.",
  notes:
    "Port of Ocarina of Time to the PlayStation Portable, based on the decompilation. Requires your own ROM.",
  notesEs:
    "Port de Ocarina of Time a la PlayStation Portable, basado en la decompilación. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/a896144046a1b5bd6e3e034d00b4f73a.png",
    alt: "The Legend of Zelda: Ocarina of Time (cover)",
    credit: "SteamGridDB",
  },
};
