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
  summary: "Duke Nukem II is a 1993 platform game developed and published by Apogee Software. The game consists of four episodes, the first available as shareware. It is the follow-up to 1991's Duke Nukem, and followed by Duke Nukem 3D in 1996. Todd Replogle was the primary designer of all three games.",
  summaryEs: "Duke Nukem II es un videojuego de plataformas para MS-DOS desarrollado por Apogee Software y publicado el 3 de diciembre de 1993. El videojuego consiste de cuatro episodios, el primero disponible como shareware. No debe confundirse con el primer episodio de Duke Nukem, es el segundo videojuego de la serie Duke Nukem, secuela del videojuego de 1991 y seguido por Duke Nukem 3D en 1996.",
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
