import type { Port } from "@/lib/ports/schema";

export const pwaa1: Port = {
  schema: "port",
  id: "pwaa1",
  title: "Phoenix Wright: Ace Attorney Decompilation",
  game: "Phoenix Wright: Ace Attorney",
  developers: ["atasro2"],
  publisher: "Capcom",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/atasro2/pwaa1"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  notes:
    "Decompilation of Gyakuten Saiban (Phoenix Wright: Ace Attorney). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Gyakuten Saiban (Phoenix Wright: Ace Attorney). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/73/Phoenix_Wright_-_Ace_Attorney_Coverart.png",
    alt: "Phoenix Wright: Ace Attorney (cover)",
    credit: "Wikipedia",
  },
};
