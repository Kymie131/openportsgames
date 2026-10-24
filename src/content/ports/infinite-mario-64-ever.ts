import type { Port } from "@/lib/ports/schema";

export const infiniteMario64Ever: Port = {
  schema: "port",
  id: "infinite-mario-64-ever",
  title: "Infinite Mario 64 (Ever)",
  game: "Super Mario 64",
  developers: ["Brawmario"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Brawmario/infinite-mario-64-ever"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Super Mario 64 is a 1996 platform game developed and published by Nintendo for the Nintendo 64. It is the first Super Mario game to feature 3D graphics, combining traditional Super Mario gameplay, visual style, and characters in a large open world. In the game, Bowser invades Princess Peach's castle, kidnaps her, and hides the castle's Power Stars in different worlds inside magical paintings. As Mario, the player traverses levels and collects Power Stars to unlock areas of the castle, reach Bowser and rescue Peach.",
  summaryEs: "Super Mario 64 es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo 64. Es la primera entrega de Super Mario en mostrar gráficos 3D, que combina la mecánica tradicional de la franquicia, su estilo visual y sus personajes en un amplio mundo abierto. En la historia, Bowser invade el castillo de la Princesa Peach, la secuestra y esconde las Estrellas de Poder en diferentes mundos situados dentro de cuadros mágicos. En el papel de Mario, el jugador recorre los niveles y recoge las estrellas para desbloquear zonas, llegar hasta Bowser y rescatar a Peach.",
  notes:
    "Fork of Infinite Mario 64 (originally by TwilightPB), a Super Mario 64-based project. Requires your own copy of the game.",
  notesEs:
    "Bifurcación de Infinite Mario 64 (original de TwilightPB), un proyecto basado en Super Mario 64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://img.itch.zone/aW1nLzE1MjEwNzc3LnBuZw==/original/EubFkM.png",
    alt: "Super Mario 64 (cover)",
    credit: "SteamGridDB",
  },
};
