import type { Port } from "@/lib/ports/schema";

export const bfbbDecomp: Port = {
  schema: "port",
  id: "bfbb-decomp",
  title: "Battle for Bikini Bottom Decompilation",
  game: "SpongeBob SquarePants: Battle for Bikini Bottom",
  developers: ["zcanann"],
  publisher: "THQ",
  originalYear: 2003,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zcanann/bfbb"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  notes:
    "Decompilation of SpongeBob SquarePants: Battle for Bikini Bottom. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de SpongeBob SquarePants: Battle for Bikini Bottom. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c7/BattleForBikiniBottom.jpg",
    alt: "SpongeBob SquarePants: Battle for Bikini Bottom (cover)",
    credit: "Wikipedia",
  },
};
