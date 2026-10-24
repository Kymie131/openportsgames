import type { Port } from "@/lib/ports/schema";

export const strikers: Port = {
  schema: "port",
  id: "strikers",
  title: "Strikers",
  game: "Super Mario Strikers",
  developers: ["new-coke"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "decompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "switch"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/new-coke/strikers"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Super Mario Strikers, is a 2005 sports video game developed by Next Level Games and published by Nintendo for the GameCube. The game was released in Europe on November 18, 2005, North America on December 5, 2005, Japan on January 19, 2006, and Australia on April 6, 2006. The game's developers had worked on NHL Hitz Pro before development of Strikers, which served as an influence for the fast-paced and physical nature of the game. This was also the last Mario game to be released on the GameCube in Japan and North America.",
  summaryEs: "Super Mario Strikers , conocido como Mario Smash Football en Europa y Australia, es un videojuego de fútbol sala desarrollado por Next Level Games para la consola Nintendo GameCube. El juego fue inicialmente lanzado para Europa y Estados Unidos a finales de 2005, y en Japón y Australia a inicios de 2006. La secuela del juego, titulada como Mario Strikers: Charged Football, fue también desarrollada por Next Level Games, pero para la consola Wii.",
  notes:
    "Super Mario Strikers ported to PC, macOS, Linux and Nintendo Switch from its decompiled code (not a recompilation). Requires your own game.",
  notesEs:
    "Super Mario Strikers portado a PC, macOS, Linux y Nintendo Switch desde su código decompilado (no es una recompilación). Requiere tu propio juego.",
  cover: {
    src: "https://raw.githubusercontent.com/new-coke/strikers/refs/heads/main/smstrikers-port/assets/icon/strikers.ico",
    alt: "Super Mario Strikers (cover)",
    credit: "SteamGridDB",
  },
};
