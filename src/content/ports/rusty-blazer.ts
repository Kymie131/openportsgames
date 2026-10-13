import type { Port } from "@/lib/ports/schema";

export const rustyBlazer: Port = {
  schema: "port",
  id: "rusty-blazer",
  title: "RustyBlazer",
  game: "Soul Blazer",
  developers: ["hellow554"],
  publisher: "Enix",
  originalYear: 1992,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/hellow554/RustyBlazer"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Super Nintendo",
  notes:
    "Decompilation of Soul Blazer rewritten in Rust. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Soul Blazer reescrita en Rust. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Soul_Blazer_box_art.jpg",
    alt: "Soul Blazer (cover)",
    credit: "Wikipedia",
  },
};
