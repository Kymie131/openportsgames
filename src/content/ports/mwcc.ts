import type { Port } from "@/lib/ports/schema";

export const mwcc: Port = {
  schema: "port",
  kind: "tool",
  id: "mwcc",
  title: "Metrowerks CodeWarrior for GameCube",
  game: "Metrowerks CodeWarrior",
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
  summary: "Metrowerks CodeWarrior for GameCube is a decompilation of the compiler toolchain used for GameCube development. It is a compiler, not a game.",
  summaryEs: "Metrowerks CodeWarrior for GameCube es una decompilación de la cadena de compiladores usada para desarrollar en GameCube. Es un compilador, no un juego.",
  cover: {
    src: "https://openportsgames.com/covers/generated/metrowerks-codewarrior-for-gamecube.svg",
    alt: "Metrowerks CodeWarrior for GameCube (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Decompilation of the Metrowerks CodeWarrior toolchain used for GameCube development. It is a compiler, not a game.",
  notesEs:
    "Decompilación de la cadena de herramientas Metrowerks CodeWarrior usada para desarrollar en GameCube. Es un compilador, no un juego.",
};
