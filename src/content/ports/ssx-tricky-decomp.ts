import type { Port } from "@/lib/ports/schema";

export const ssxTrickyDecomp: Port = {
  schema: "port",
  id: "ssx-tricky-decomp",
  title: "SSX Tricky Decompilation",
  game: "SSX Tricky",
  developers: ["ssxdecomp"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "decompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/ssxdecomp/ssxtricky"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "SSX Tricky, also known as SSX 2 or SSX 2: Tricky, is a snowboarding video game, the second game in the SSX series published by Electronic Arts under the EA Sports BIG label and developed by EA Canada. A direct sequel to SSX, the game was originally released in 2001 for PlayStation 2, GameCube, and Xbox, and was later ported to the Game Boy Advance in 2002. SSX 3 followed in 2003.",
  summaryEs: "SSX Tricky es un videojuego de snowboarding, el segundo en la serie de juegos SSX. Es tan similar al primero que fue más conocido como un upgrade. En SSX, los jugadores eligen uno de los muchos personajes, participan en carreras o competencias de puntaje, y ganar recompensas. Las secuelas son SSX 3, SSX On Tour, y SSX Blur.",
  notes:
    "Matching decompilation of SSX Tricky. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación matching de SSX Tricky. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6a/SSX_Tricky.jpg",
    alt: "SSX Tricky (cover)",
    credit: "Wikipedia",
  },
};
