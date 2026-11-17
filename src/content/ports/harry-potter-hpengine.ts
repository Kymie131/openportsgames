import type { Port } from "@/lib/ports/schema";

export const harryPotterHpengine: Port = {
  schema: "port",
  id: "harry-potter-hpengine",
  title: "Harry Potter and the Philosopher's Stone (HPEngine)",
  game: "Harry Potter and the Philosopher's Stone",
  developers: ["artemnikonov"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.4.0", date: "2026-11-17" },
  sources: ["https://github.com/artemnikonov/hpengine"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-17",
  originalSystems: ["Windows"],
  summary:
    "Harry Potter and the Philosopher's Stone is a 2001 action-adventure game developed by KnowWonder and published by Electronic Arts for PC. HPEngine is a native reimplementation of its Unreal Engine 1 code and data.",
  summaryEs:
    "Harry Potter and the Philosopher's Stone es un videojuego de acción y aventura de 2001 desarrollado por KnowWonder y publicado por Electronic Arts para PC. HPEngine es una reimplementación nativa de su código y datos de Unreal Engine 1.",
  notes:
    "Engine reimplementation that runs the original PC game's UnrealScript and data, with native Windows, Linux and macOS builds. It requires your own copy of the game and ships no game files.",
  notesEs:
    "Reimplementación del motor que ejecuta el UnrealScript y los datos del juego original de PC, con builds nativas para Windows, Linux y macOS. Requiere tu propia copia del juego y no incluye archivos del mismo.",
  cover: {
    src: "https://openportsgames.com/covers/generated/harry-potter-and-the-philosopher-s-stone.svg",
    alt: "Harry Potter and the Philosopher's Stone (generated cover)",
    credit: "OpenPortsGames",
  },
};
