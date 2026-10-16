import type { Port } from "@/lib/ports/schema";

export const warioland4: Port = {
  schema: "port",
  id: "warioland4",
  title: "Wario Land 4 Decompilation",
  game: "Wario Land 4",
  developers: ["TsilaAllaoui"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TsilaAllaoui/warioland4"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  notes:
    "Clean-room decompilation of Wario Land 4 for the Game Boy Advance. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación limpia de Wario Land 4 para Game Boy Advance. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Wario_Land_4_NA_Box_Art.png",
    alt: "Wario Land 4 (cover)",
    credit: "Wikipedia",
  },
};
