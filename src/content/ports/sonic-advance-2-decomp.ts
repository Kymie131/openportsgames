import type { Port } from "@/lib/ports/schema";

export const sonicAdvance2Decomp: Port = {
  schema: "port",
  id: "sonic-advance-2-decomp",
  title: "Sonic Advance 2 Decompilation",
  game: "Sonic Advance 2",
  developers: ["SAT-R"],
  publisher: "Sega",
  originalYear: 2002,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/SAT-R/sa2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  notes:
    "Decompilation and port of Sonic Advance 1 and 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación y port de Sonic Advance 1 y 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/Sonic_Advance_2_Coverart.png",
    alt: "Sonic Advance 2 (cover)",
    credit: "Wikipedia",
  },
};
