import type { Port } from "@/lib/ports/schema";

export const zeldaClassic: Port = {
  schema: "port",
  id: "zelda-classic",
  title: "Zelda Classic",
  game: "The Legend of Zelda",
  developers: ["ArmageddonGames"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/ArmageddonGames/ZeldaClassic"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo Entertainment System"],
  notes:
    "Free 2D engine and editor that recreates The Legend of Zelda. It does not need the original game data.",
  notesEs:
    "Motor y editor 2D gratuito que recrea The Legend of Zelda. No necesita los datos del juego original.",
  noOriginalGameRequired: true,
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",
    alt: "The Legend of Zelda (cover)",
    credit: "Wikipedia",
  },
};
