import type { Port } from "@/lib/ports/schema";

export const shadowRecomp: Port = {
  schema: "port",
  id: "shadow-recomp",
  title: "ShadowRecomp",
  game: "Shadow the Hedgehog",
  developers: ["BigSnek9"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.1", date: "2026-10-21" },
  sources: ["https://github.com/BigSnek9/ShadowRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["GameCube"],
  summary:
    "Shadow the Hedgehog is a 2005 platform game developed by Sega Studios USA and published by Sega. It is a spinoff from the Sonic the Hedgehog series starring the character Shadow. It follows the amnesiac Shadow's attempts to learn about his past during an alien invasion. Gameplay is similar to previous Sonic games, featuring fast-paced platforming and ring collecting, but introduces third-person shooter and nonlinear elements. Shadow uses a variety of weapons to defeat enemies and complete missions that determine the plot and playable levels.",
  summaryEs:
    "Shadow the Hedgehog es un videojuego de plataformas de 2005 desarrollado por Sega Studios USA —la antigua división estadounidense de Sonic Team— y publicado por Sega como parte de la serie Sonic the Hedgehog. Sirviendo de secuela de Sonic Heroes, el juego sigue a Shadow the Hedgehog, una creación del abuelo del Doctor Eggman, el Prof. Gerald Robotnik con la ayuda de Black Doom, mientras intenta aprender sobre su pasado mientras sufre de amnesia.",
  notes:
    "Static recompilation of Shadow the Hedgehog (GameCube) for Windows, with real-time shadows. Ships no game files: you must supply your own disc.",
  notesEs:
    "Recompilación estática de Shadow the Hedgehog (GameCube) para Windows, con sombras en tiempo real. No incluye archivos del juego: debes aportar tu propio disco.",
  cover: {
    src: "https://openportsgames.com/covers/generated/shadow-the-hedgehog.svg",
    alt: "Shadow the Hedgehog (generated cover)",
    credit: "OpenPortsGames",
  },
};
