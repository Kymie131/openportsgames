import type { Port } from "@/lib/ports/schema";

export const nfsug: Port = {
  schema: "port",
  id: "nfsug",
  title: "Need for Speed: Underground Decompilation",
  game: "Need for Speed: Underground",
  developers: ["dbalatoni13"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/dbalatoni13/nfsug"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Need for Speed: Underground is a 2003 racing video game and the seventh installment in the Need for Speed series following Hot Pursuit 2 (2002). It was developed by EA Black Box and published by Electronic Arts. Three different versions of the game were produced: one for consoles and Microsoft Windows, and another for the Game Boy Advance. An arcade version developed and published by Global VR came out two years later.",
  summaryEs: "Need for Speed: Underground es un videojuego de carreras desarrollado por EA Black Box y publicado por Electronic Arts en el 2003. Es parte de la saga de videojuegos Need for Speed y ha sido desarrollado por EA Black Box.",
  notes:
    "Decompilation of Need for Speed: Underground. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Need for Speed: Underground. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Need_for_Speed_Underground_cover.jpg",
    alt: "Need for Speed: Underground (cover)",
    credit: "Wikipedia",
  },
};
