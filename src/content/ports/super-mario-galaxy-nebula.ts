import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyNebula: Port = {
  schema: "port",
  id: "super-mario-galaxy-nebula",
  title: "Nebula",
  game: "Super Mario Galaxy",
  developers: ["keepvaibin"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/keepvaibin/nebula"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["petari", "super-mario-galaxy-android"],
  aiDisclosure: {
    source: "https://github.com/keepvaibin/nebula",
    quote: "Nebula was built with AI coding agents (Anthropic's Claude).",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/76/SuperMarioGalaxy.jpg",
    alt: "Super Mario Galaxy (box art)",
    credit: "Wikipedia",
  },
  summary: "Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D platformer game in the Super Mario series. As Mario, the player embarks on an extraterrestrial mission to rescue Princess Peach and save the universe from his arch-nemesis Bowser, after which the player can play the game as Luigi for a more challenging experience. The levels consist of galaxies filled with minor planets, asteroids, and worlds, with different variations of gravity, the central element of gameplay.",
  summaryEs: "Super Mario Galaxy es un videojuego de plataformas de 2007 desarrollado y publicado por Nintendo para la Nintendo Wii. Es el tercer juego de plataformas en 3D de la serie Super Mario. Como Mario, el jugador se embarca en una búsqueda para rescatar a la Princesa Peach, salvar el universo de Bowser y recolectar ciento veinte estrellas de poder, después de lo cual el jugador puede volver a repetir la misma aventura de Mario, pero como Luigi. Los niveles consisten en galaxias llenas de planetas y mundos menores, con diferentes variaciones de gravedad, el elemento central del juego.",
  notes:
    "Static recompilation of Super Mario Galaxy for Windows: the PowerPC code is translated to C++ ahead of time and run on a native Direct3D 12 runtime. Work in progress (some areas below 60 FPS, lighting/bloom differences and bugs); it needs your own copy of the game. Latest release: v1.0.0. Built with AI coding agents (the game's own logic is the original code, not AI-written). NOT affiliated with Nintendo.",
  notesEs:
    "Recompilación estática de Super Mario Galaxy para Windows: el código PowerPC se traduce a C++ por adelantado y corre en un runtime nativo con Direct3D 12. En desarrollo (algunas zonas por debajo de 60 FPS, diferencias de iluminación/bloom y fallos); necesita tu propia copia del juego. Última release: v1.0.0. Hecho con agentes de IA (la lógica del juego es el código original, no escrita por IA). NO afiliado a Nintendo.",
};
