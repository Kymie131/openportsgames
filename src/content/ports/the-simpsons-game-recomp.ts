import type { Port } from "@/lib/ports/schema";

export const theSimpsonsGameRecomp: Port = {
  schema: "port",
  id: "the-simpsons-game-recomp",
  title: "The Simpsons Game Recompiled",
  game: "The Simpsons Game",
  developers: ["YesterMester"],
  publisher: "Electronic Arts",
  originalYear: 2007,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.0.6.1", date: "2026-10-01" },
  sources: ["https://github.com/YesterMester/TheSimpsonsGameRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Xbox 360",
  features: [
    "Ahead-of-time translation of the PowerPC executable into C++",
    "ReXGlue runtime derived from the Xenia project",
    "Vulkan renderer on Linux",
    "Direct3D 12 or Vulkan renderer on Windows",
    "Steam Deck support",
    "Separate builds for CPUs without AVX2",
  ],
  featuresEs: [
    "Traducción anticipada del ejecutable PowerPC a C++",
    "Runtime ReXGlue derivado del proyecto Xenia",
    "Renderizador Vulkan en Linux",
    "Renderizador Direct3D 12 o Vulkan en Windows",
    "Soporte para Steam Deck",
    "Builds separadas para CPU sin AVX2",
  ],
  notes:
    "Work in progress: the recompilation is incomplete. Releases ship no game content, so an Xbox 360 copy of the game is required.",
  notesEs:
    "Trabajo en curso: la recompilación está incompleta. Las releases no incluyen contenido del juego, así que se requiere una copia de Xbox 360 del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Simpsons_Game_XBOX_360_Cover.jpg",
    alt: "The Simpsons Game (box art)",
    credit: "Wikipedia",
  },
};
