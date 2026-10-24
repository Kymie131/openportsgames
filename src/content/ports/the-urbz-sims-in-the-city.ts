import type { Port } from "@/lib/ports/schema";

export const TheUrbzSimsInTheCity: Port = {
  schema: "port",
  id: "the-urbz-sims-in-the-city",
  title: "The Urbz: Sims in the City",
  game: "The Urbz: Sims in the City",
  developers: ["SimsAdvanceRet"],
  publisher: "Electronic Arts",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/UrbzGBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9e/The_Urbz_-_Sims_in_the_City_Coverart.png",
    alt: "The Urbz: Sims in the City (box art)",
    credit: "Wikipedia",
  },
  summary: "The Urbz: Sims in the City is a 2004 life simulation video game developed by Maxis and published by Electronic Arts for the Game Boy Advance, GameCube, PlayStation 2, Xbox, and Nintendo DS. It is the third Sims game for consoles, and the second not to be released for Microsoft Windows, after a planned PC port and sequel were both cancelled due to mediocre sales. The next release for consoles and handhelds was the console port of The Sims 2.",
  summaryEs: "Los Urbz: Sims en la ciudad es un videojuego de simulación social para las consolas de sobremesa GameCube, PlayStation 2, y Xbox, además de para las consolas portátiles Game Boy Advance y Nintendo DS. Es el tercer videojuego de la serie Los Sims lanzado para consolas, y es el segundo videojuego de la serie que no ha sido lanzado para PC. La siguiente versión para consolas fue la adaptación para consola de Los Sims 2.",
  notes:
    "A WIP disassembly/decompilation project of The Urbz: Sims in the City on the Game Boy Advance.",
  notesEs:
    "Proyecto de desensamblado/decompilación de The Urbz: Sims in the City para Game Boy Advance, en desarrollo.",
};
