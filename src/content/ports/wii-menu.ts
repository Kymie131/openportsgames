import type { Port } from "@/lib/ports/schema";

export const wiiMenu: Port = {
  schema: "port",
  id: "wii-menu",
  kind: "system",
  title: "Wii Menu",
  game: "Wii Menu",
  developers: ["koopthekoopa"],
  publisher: "Nintendo",
  originalYear: 2006,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/koopthekoopa/wii-ipl"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary: "The Wii is a home video game console developed and marketed by Nintendo. It was released on November 19, 2006, in North America, and in December 2006 for most other regions of the world. It is Nintendo's fifth major home game console, following the GameCube, and is a seventh-generation console alongside Microsoft's Xbox 360 and Sony's PlayStation 3.",
  summaryEs: "La Wii es una videoconsola de sobremesa de séptima generación desarrollada y comercializada por Nintendo y fabricada por Foxconn Se lanzó el 19 de noviembre de 2006 en Norteamérica y en diciembre de 2006 en la mayoría de las demás regiones del mundo. Es la quinta consola de sobremesa principal de Nintendo, es la sucesora de la GameCube, compitió en generación con la Xbox 360 de Microsoft y la PlayStation 3 de Sony.",
  notes:
    "Fan decompilation of the Wii Menu. It is system software, not a game. A research codebase; it requires files from a console you own.",
  notesEs:
    "Decompilación hecha por fans del menú de Wii. Es software de sistema, no un juego. Código de investigación; requiere archivos de una consola que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/da/Wiimen.png",
    alt: "Wii Menu (box art)",
    credit: "Wikipedia",
  },
};
