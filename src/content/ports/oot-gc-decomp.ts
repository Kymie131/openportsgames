import type { Port } from "@/lib/ports/schema";

export const ootGcDecomp: Port = {
  schema: "port",
  id: "oot-gc-decomp",
  title: "Ocarina of Time (GameCube) Decompilation",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["zeldaret"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/oot-gc"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  notes:
    "Decompilation of the GameCube emulator build of Ocarina of Time (JP-CE). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación del emulador de Ocarina of Time incluido en la versión de GameCube (JP-CE). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
};
