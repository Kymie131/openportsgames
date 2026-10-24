import type { Port } from "@/lib/ports/schema";

export const bfbbDecomp: Port = {
  schema: "port",
  id: "bfbb-decomp",
  title: "Battle for Bikini Bottom Decompilation",
  game: "SpongeBob SquarePants: Battle for Bikini Bottom",
  developers: ["zcanann"],
  publisher: "THQ",
  originalYear: 2003,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/zcanann/bfbb"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "SpongeBob SquarePants: Battle for Bikini Bottom is a 2003 platform game based on the Nickelodeon animated series SpongeBob SquarePants, developed by Heavy Iron Studios and published by THQ for the GameCube, PlayStation 2 and Xbox. Separate versions, developed by Vicarious Visions and AWE Games respectively, were released for the Game Boy Advance and Windows. While the versions released for consoles were 3D platform games, the Windows version of the game is a mini-game compilation, and the Game Boy Advance version is a 2D platformer.",
  summaryEs: "SpongeBob SquarePants: Battle for Bikini Bottom es un videojuego basado en la serie animada de comedia Bob Esponja. El juego ha sido lanzado para las consolas Game Boy Advance, Nintendo GameCube, Microsoft Windows, PlayStation 2 y Xbox. El jugador trata de defender a Fondo de Bikini de una invasión de Robots creados por Plankton con una máquina llamada el Duplicatotron 3000. Los personajes jugables son Bob Esponja, Patricio y Arenita. La versión de Windows cuenta con una serie de minijuegos y en gran medida difiere de las versiones de consolas.",
  notes:
    "Decompilation of SpongeBob SquarePants: Battle for Bikini Bottom. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de SpongeBob SquarePants: Battle for Bikini Bottom. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c7/BattleForBikiniBottom.jpg",
    alt: "SpongeBob SquarePants: Battle for Bikini Bottom (cover)",
    credit: "Wikipedia",
  },
};
