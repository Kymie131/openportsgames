import type { Port } from "@/lib/ports/schema";

export const ftlPocketWormhole: Port = {
  schema: "port",
  id: "ftl-pocket-wormhole",
  title: "Pocket Wormhole (FTL)",
  game: "FTL: Faster Than Light",
  developers: ["adamkulik"],
  publisher: "Subset Games",
  originalYear: 2012,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/adamkulik/pocket-wormhole"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "FTL: Faster Than Light is a roguelike game created by indie developer Subset Games, which was released for Windows, MacOS, and Linux in September 2012. In the game, the player controls the crew of a single spacecraft, holding critical information to be delivered to an allied fleet, while being pursued by a large rebel fleet. The player must guide the spacecraft through eight sectors, each with planetary systems and events procedurally generated in a roguelike fashion, while facing rebel and other hostile forces, recruiting new crew, and outfitting and upgrading their ship.",
  summaryEs: "FTL: Faster Than Light es un videojuego de estrategia en tiempo real y estilo roguelike desarrollado en forma independiente por Subset Games y publicado el 14 de septiembre de 2012. En el juego, el jugador controla la tripulación de una nave espacial, y debe transportar información vital de la flota aliada a lo largo de varios sistemas estelares mientras es perseguido por fuerzas rebeldes y otros grupos hostiles.",
  notes:
    "Native Android port of Project Wormhole, the open-source FTL engine implementation. It runs FTL: Faster Than Light on Android using your own game files.",
  notesEs:
    "Port nativo para Android de Project Wormhole, la implementación libre del motor de FTL. Ejecuta FTL: Faster Than Light en Android usando tus propios archivos del juego.",
  cover: {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/FTL_Faster_Than_Light_Logo.svg/960px-FTL_Faster_Than_Light_Logo.svg.png",
    alt: "FTL: Faster Than Light (box art)",
    credit: "Wikipedia",
  },
};
