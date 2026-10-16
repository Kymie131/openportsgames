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
