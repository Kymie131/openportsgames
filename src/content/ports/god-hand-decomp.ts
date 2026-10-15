import type { Port } from "@/lib/ports/schema";

export const godHandDecomp: Port = {
  schema: "port",
  id: "god-hand-decomp",
  title: "God Hand Decompilation",
  game: "God Hand",
  developers: ["LucasPicoli"],
  publisher: "Capcom",
  originalYear: 2006,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/LucasPicoli/god-hand-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
  notes:
    "Matching decompilation of God Hand for the PlayStation 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación matching de God Hand para PlayStation 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e9/God_Hand_%282006_Playstation_2%29_video_game_cover_art.jpg",
    alt: "God Hand (cover)",
    credit: "Wikipedia",
  },
};
