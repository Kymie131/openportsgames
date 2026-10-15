import type { Port } from "@/lib/ports/schema";

export const halo2Decomp: Port = {
  schema: "port",
  id: "halo-2-decomp",
  title: "Halo 2 Decompilation",
  game: "Halo 2",
  developers: ["kirklandsig"],
  publisher: "Microsoft Game Studios",
  originalYear: 2004,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kirklandsig/halo2-decompiled"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  notes:
    "Decompilation of Halo 2 for the original Xbox. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Halo 2 para la Xbox original. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png",
    alt: "Halo 2 (cover)",
    credit: "Wikipedia",
  },
};
