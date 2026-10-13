import type { Port } from "@/lib/ports/schema";

export const spyro3Decomp: Port = {
  schema: "port",
  id: "spyro-3-decomp",
  title: "Spyro: Year of the Dragon Decompilation",
  game: "Spyro: Year of the Dragon",
  developers: ["TheMobyCollective"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TheMobyCollective/spyro-3"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Decompilation of Spyro: Year of the Dragon for the PlayStation. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Spyro: Year of the Dragon para PlayStation. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/54/Spyro-year_of_the_dragon.png",
    alt: "Spyro: Year of the Dragon (cover)",
    credit: "Wikipedia",
  },
};
