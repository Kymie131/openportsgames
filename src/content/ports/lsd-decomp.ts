import type { Port } from "@/lib/ports/schema";

export const lsdDecomp: Port = {
  schema: "port",
  id: "lsd-decomp",
  title: "LSD: Dream Emulator Decompilation",
  game: "LSD: Dream Emulator",
  developers: ["brian-oblivion"],
  publisher: "Asmik Ace",
  originalYear: 1998,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/brian-oblivion/lsddecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  notes:
    "Decompilation of LSD: Dream Emulator for the PlayStation. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de LSD: Dream Emulator para PlayStation. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a9/LSD_Coverart.png",
    alt: "LSD: Dream Emulator (cover)",
    credit: "Wikipedia",
  },
};
