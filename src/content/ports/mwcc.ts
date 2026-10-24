import type { Port } from "@/lib/ports/schema";

export const mwcc: Port = {
  schema: "port",
  id: "mwcc",
  title: "Metrowerks CodeWarrior for GameCube",
  game: "Metrowerks CodeWarrior for GameCube",
  developers: ["rayanht"],
  publisher: "Metrowerks",
  originalYear: 2001,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/rayanht/mwcc"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Metrowerks CodeWarrior for GameCube is a simulation game published by Metrowerks for GameCube, released in 2001.",
  summaryEs: "Metrowerks CodeWarrior for GameCube es un videojuego de simulaci�n publicado por Metrowerks para GameCube, lanzado en 2001.",
  summaryGenerated: true,
  notes:
    "Decompilation of the Metrowerks CodeWarrior toolchain used for GameCube development. It is a compiler, not a game.",
  notesEs:
    "Decompilación de la cadena de herramientas Metrowerks CodeWarrior usada para desarrollar en GameCube. Es un compilador, no un juego.",
};
