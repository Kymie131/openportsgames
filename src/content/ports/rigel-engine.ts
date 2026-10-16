import type { Port } from "@/lib/ports/schema";

export const rigelEngine: Port = {
  schema: "port",
  id: "rigel-engine",
  title: "Rigel Engine",
  game: "Duke Nukem II",
  developers: ["lethal-guitar"],
  publisher: "Apogee Software",
  originalYear: 1993,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/lethal-guitar/RigelEngine"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  notes:
    "Modern reimplementation of Duke Nukem II that runs the original game data, with widescreen and enhancements. It needs your own copy of the game.",
  notesEs:
    "Reimplementación moderna de Duke Nukem II que ejecuta los datos del juego original, con widescreen y mejoras. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Duke_Nukem_II_Cover.jpg",
    alt: "Duke Nukem II (cover)",
    credit: "Wikipedia",
  },
};
