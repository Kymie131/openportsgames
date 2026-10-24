import type { Port } from "@/lib/ports/schema";

export const lotrReturnOfTheKingRecomp: Port = {
  schema: "port",
  id: "lotr-return-of-the-king-recomp",
  title: "The Lord of the Rings: The Return of the King (PC)",
  game: "The Lord of the Rings: The Return of the King",
  developers: ["Shagg88"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.1.3", date: "2026-10-20" },
  sources: ["https://github.com/Shagg88/Athelas"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  related: ["lotr-two-towers-recomp"],
  summary: "The Lord of the Rings: The Return of the King is a 2003 hack and slash game developed by EA Redwood Shores for the PlayStation 2 and Windows. It was ported to the GameCube and Xbox by Hypnos Entertainment, to the Game Boy Advance by Griptonite Games, to mobile by ImaginEngine, and to Mac OS X by Beenox. The game was published by Electronic Arts. It is the sequel to the 2002 game The Lord of the Rings: The Two Towers.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://openportsgames.com/covers/generated/the-lord-of-the-rings-the-return-of-the-king.svg",
    alt: "The Lord of the Rings: The Return of the King (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "The Xbox version of The Return of the King (EA, 2003) rebuilt for Windows by the Athelas launcher. No game files are included, so you need your own disc.",
  notesEs:
    "La versión de Xbox de El Retorno del Rey (EA, 2003) reconstruida para Windows con el lanzador Athelas. No incluye archivos del juego: necesitas tu propio disco.",
};
