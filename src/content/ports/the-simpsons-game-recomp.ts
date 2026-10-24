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
  release: { version: "0.0.6.5", date: "2026-10-10" },
  sources: ["https://github.com/YesterMester/TheSimpsonsGameRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Xbox 360"],
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
  summary: "The Simpsons Game is a 2007 platform game based on the animated television series The Simpsons made for the Nintendo DS, Wii, Xbox 360, PlayStation 2, PlayStation 3 and PlayStation Portable. The game was developed by EA Redwood Shores and published by Electronic Arts. It was released in North America in October 2007 and worldwide in November 2007, a few months after The Simpsons Movie. It features an original storyline, not related to the movie, written by Simpsons writers Tim Long and Matt Warburton.",
  summaryEs: "Los Simpson: el videojuego es un videojuego de plataformas desarrollado por EA Redwood Shores y publicado por Electronic Arts basado en la serie de televisión animada Los Simpson, creado para Nintendo DS, Wii, Xbox 360, PlayStation 2, PlayStation 3 y PlayStation Portable. Salió a la venta en Norteamérica en octubre de 2007 y en todo el mundo en noviembre, unos meses después de Los Simpson: la película. Cuenta con una historia original, no relacionada con la cinta, escrita por los guionistas Tim Long y Matt Warburton.",
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
