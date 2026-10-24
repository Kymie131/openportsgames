import type { Port } from "@/lib/ports/schema";

export const ShiningForce: Port = {
  schema: "port",
  id: "shining-force",
  title: "Shining Force",
  game: "Shining Force",
  developers: ["ShiningForceCentral"],
  publisher: "Unknown",
  originalYear: 1992,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ShiningForceCentral/SF1DISASM"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/20/Shining_Force.jpg",
    alt: "Shining Force (box art)",
    credit: "Wikipedia",
  },
  summary: "Shining Force: The Legacy of Great Intention, commonly referred to as Shining Force, is a 1992 turn-based tactical role-playing game developed by Climax Entertainment and Sonic! Software Planning and published by Sega for the Sega Genesis. It is the second entry of the Shining series, following 1991's Shining in the Darkness. While primarily a traditional fantasy-themed game, it contains some science fiction elements.",
  summaryEs: "Shining Force: The Legacy of Great Intention es un videojuego del género SRPG, más conocido como Shining Force, y fue lanzado en 1992 en Japón y en 1993 en Europa y los Estados Unidos para la consola de 16-bit Mega Drive. El juego fue desarrollado por las compañías Climax Entertainment y Sonic! Software Planning, quien años más tarde se convertiría en Camelot Software Planning y es el segundo juego desarrollado por estas compañías, luego de Shining in the Darkness, del que mantiene algunos elementos como los objetos o los ataques mágicos, pero cambiando totalmente el sistema de juego.",
  notes: 'A disassembly of the game "Shining Force" for documentation and fan-project purposes.',
  notesEs:
    "Desensamblado del juego «Shining Force» con fines de documentación y proyectos de fans.",
};
