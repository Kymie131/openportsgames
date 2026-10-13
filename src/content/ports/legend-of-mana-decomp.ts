import type { Port } from "@/lib/ports/schema";

export const legendOfManaDecomp: Port = {
  schema: "port",
  id: "legend-of-mana-decomp",
  title: "Legend of Mana Decompilation",
  game: "Legend of Mana",
  developers: ["celophi"],
  publisher: "Square Enix",
  originalYear: 1999,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/celophi/lom-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Matching decompilation of Legend of Mana (PlayStation). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación matching de Legend of Mana (PlayStation). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Legend%20of%20Mana%20(USA).png",
    alt: "Legend of Mana (box art)",
    credit: "Box art",
  },
};
