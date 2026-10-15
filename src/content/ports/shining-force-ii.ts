import type { Port } from "@/lib/ports/schema";

export const ShiningForceIi: Port = {
  schema: "port",
  id: "shining-force-ii",
  title: "Shining Force II",
  game: "Shining Force II",
  developers: ["ShiningForceCentral"],
  publisher: "Unknown",
  originalYear: 2000,
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
  notes: 'A disassembly of the game "Shining Force II" for documentation and fan-project purposes.',
  notesEs:
    "Desensamblado del juego «Shining Force II» con fines de documentación y proyectos de fans.",
};
