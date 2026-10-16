import type { Port } from "@/lib/ports/schema";

export const psychonautsDecomp: Port = {
  schema: "port",
  id: "psychonauts-decomp",
  title: "Psychonauts Decompilation",
  game: "Psychonauts",
  developers: ["DrDecki"],
  publisher: "Majesco Entertainment",
  originalYear: 2005,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/DrDecki/psychonauts-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Decompilation of Psychonauts. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Psychonauts. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Psychonautsbox.png",
    alt: "Psychonauts (cover)",
    credit: "Wikipedia",
  },
};
