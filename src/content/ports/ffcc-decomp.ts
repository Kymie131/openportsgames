import type { Port } from "@/lib/ports/schema";

export const ffccDecomp: Port = {
  schema: "port",
  id: "ffcc-decomp",
  title: "Final Fantasy Crystal Chronicles Decompilation",
  game: "Final Fantasy Crystal Chronicles",
  developers: ["zcanann"],
  publisher: "Square Enix",
  originalYear: 2003,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/zcanann/FFCC-Decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  notes:
    "Decompilation of Final Fantasy Crystal Chronicles for the GameCube. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Final Fantasy Crystal Chronicles para GameCube. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Final%20Fantasy%20Crystal%20Chronicles%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "Final Fantasy Crystal Chronicles (cover)",
    credit: "libretro",
  },
};
