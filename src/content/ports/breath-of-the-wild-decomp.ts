import type { Port } from "@/lib/ports/schema";

export const breathOfTheWildDecomp: Port = {
  schema: "port",
  id: "breath-of-the-wild-decomp",
  title: "Breath of the Wild Decompilation",
  game: "The Legend of Zelda: Breath of the Wild",
  developers: ["zeldaret"],
  publisher: "Nintendo",
  originalYear: 2017,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/botw"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii U",
  notes:
    "Work-in-progress decompilation of The Legend of Zelda: Breath of the Wild (Switch 1.5.0). A research codebase with no playable build; it requires game files from a copy you own.",
  notesEs:
    "Decompilación en curso de The Legend of Zelda: Breath of the Wild (Switch 1.5.0). Código de investigación sin build jugable; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
    alt: "The Legend of Zelda: Breath of the Wild (cover)",
    credit: "Wikipedia",
  },
};
