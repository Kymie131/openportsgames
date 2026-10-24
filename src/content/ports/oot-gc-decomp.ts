import type { Port } from "@/lib/ports/schema";

export const ootGcDecomp: Port = {
  schema: "port",
  id: "oot-gc-decomp",
  title: "Ocarina of Time (GameCube) Decompilation",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["zeldaret"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/oot-gc"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "The Legend of Zelda: Ocarina of Time is a 1998 action-adventure game developed and published by Nintendo for the Nintendo 64. It was the first Legend of Zelda game with 3D graphics. It was released in Japan and North America in November 1998 and in PAL regions the following month.",
  summaryEs: "The Legend of Zelda: Ocarina of Time es un videojuego de acción-aventura de 1998 desarrollado por la filial Nintendo EAD y publicado por Nintendo para la consola Nintendo 64. Fue lanzado en Japón el 21 de noviembre de 1998, mientras que a Norteamérica llegó dos días después, el 23 de noviembre, y en Europa se estrenó el 11 de diciembre de ese mismo año. Para el caso de Sudamérica, fue presentado en Chile el 23 de noviembre de 1998 en un evento especial para periodistas.",
  notes:
    "Decompilation of the GameCube emulator build of Ocarina of Time (JP-CE). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación del emulador de Ocarina of Time incluido en la versión de GameCube (JP-CE). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
};
