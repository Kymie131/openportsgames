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
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/LucasPicoli/god-hand-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "God Hand is a 2006 beat 'em up game developed by Clover Studio and published by Capcom for the PlayStation 2. It was released in Japan and North America in 2006, and in 2007 for PAL territories. It was re-released for the PlayStation 3 as a PS2 Classics downloadable game on the PlayStation Network on October 4, 2011. The game was directed by Shinji Mikami, who desired to create the game for hardcore gamers intermixed with a large amount of comic relief. It initially received a mixed response from critics and sold only modestly upon its release in Japan.",
  summaryEs: "God Hand es un videojuego beat 'em up desarrollado por Clover Studios y publicado por Capcom para la videoconsola PlayStation 2. Fue lanzado en Japón y América del Norte en 2006, y en 2007 para los territorios PAL. Fue relanzado para PlayStation 3 como un juego descargable de PS2 Classics en PlayStation Network el 4 de octubre de 2011. El juego fue dirigido por Shinji Mikami, quien deseaba crear el juego para jugadores hardcore mezclado con una gran cantidad de alivio cómico.",
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
