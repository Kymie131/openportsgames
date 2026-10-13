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
  originalSystem: "GameCube",
  notes:
    "Decompilation of the Metrowerks CodeWarrior toolchain used for GameCube development. It is a compiler, not a game.",
  notesEs:
    "Decompilación de la cadena de herramientas Metrowerks CodeWarrior usada para desarrollar en GameCube. Es un compilador, no un juego.",
};
