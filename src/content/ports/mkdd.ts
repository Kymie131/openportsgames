import type { Port } from "@/lib/ports/schema";

export const mkdd: Port = {
  schema: "port",
  id: "mkdd",
  title: "Mario Kart: Double Dash!! Decompilation",
  game: "Mario Kart: Double Dash!!",
  developers: ["doldecomp"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/doldecomp/mkdd"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  notes:
    "Decompilation of Mario Kart: Double Dash!! for the GameCube. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Mario Kart: Double Dash!! para GameCube. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Mario%20Kart%20-%20Double%20Dash!!%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "Mario Kart: Double Dash!! (cover)",
    credit: "libretro",
  },
};
