import type { Port } from "@/lib/ports/schema";

export const kh1: Port = {
  schema: "port",
  id: "kh1",
  title: "Kingdom Hearts Decompilation",
  game: "Kingdom Hearts",
  developers: ["ethteck"],
  publisher: "Square",
  originalYear: 2002,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ethteck/kh1"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  notes:
    "Decompilation of Kingdom Hearts for the PlayStation 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Kingdom Hearts para PlayStation 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/85/Kingdom_Hearts.jpg",
    alt: "Kingdom Hearts (cover)",
    credit: "Wikipedia",
  },
};
