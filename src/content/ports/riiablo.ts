import type { Port } from "@/lib/ports/schema";

export const riiablo: Port = {
  schema: "port",
  id: "riiablo",
  title: "Riiablo",
  game: "Diablo II",
  developers: ["collinsmith"],
  publisher: "Blizzard Entertainment",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/collinsmith/riiablo"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Diablo II is a 2000 action role-playing game developed by Blizzard North and published by Blizzard Entertainment for Microsoft Windows, Classic Mac OS, and OS X. The game, with its dark fantasy and horror themes, was conceptualized and designed by David Brevik and Erich Schaefer, who, with Max Schaefer, acted as project leads on the game. The senior producers were Matthew Householder and Bill Roper. The game was developed over a three-year period, with a crunch time of a year and a half.",
  summaryEs: "Diablo II es un videojuego de rol de acción. Fue lanzado para Windows y Mac OS en el año 2000 por Blizzard Entertainment, y fue desarrollado por Blizzard North. Es la secuela directa de Diablo el exitoso juego de PC lanzado en 1996.",
  notes:
    "Open-source reimplementation of Diablo II written in Java (LibGDX) that runs the original game data. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de Diablo II escrita en Java (LibGDX) que ejecuta los datos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d5/Diablo_II_Coverart.png",
    alt: "Diablo II (cover)",
    credit: "Wikipedia",
  },
};
