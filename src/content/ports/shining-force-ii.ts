import type { Port } from "@/lib/ports/schema";

export const ShiningForceIi: Port = {
  schema: "port",
  id: "shining-force-ii",
  title: "Shining Force II",
  game: "Shining Force II",
  developers: ["ShiningForceCentral"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ShiningForceCentral/SF2DISASM"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/23/Shining_Force_II.jpg",
    alt: "Shining Force II (box art)",
    credit: "Wikipedia",
  },
  summary: "Shining Force II is a 1993 tactical role-playing game developed by Sonic! Software Planning and published by Sega for the Sega Genesis. Its storyline is not directly connected to the original Shining Force, although the Game Gear title Shining Force Gaiden: Final Conflict links the two games' plots. The game is much longer than Shining Force, and contains more free roaming. There is no chapter system, so the player can return to previously visited parts of the world. There are also two different ways of promoting certain characters.",
  summaryEs: "Shining Force II es un videojuego de rol táctico salido al mercado en 1993 para la consola Mega Drive. El sistema de juego es similar al de otros títulos; como la saga Fire Emblem o los Final Fantasy Tactics.",
  notes: 'A disassembly of the game "Shining Force II" for documentation and fan-project purposes.',
  notesEs:
    "Desensamblado del juego «Shining Force II» con fines de documentación y proyectos de fans.",
};
