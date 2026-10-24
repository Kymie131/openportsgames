import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyAndroid: Port = {
  schema: "port",
  id: "super-mario-galaxy-android",
  title: "Galaxy Android",
  game: "Super Mario Galaxy",
  developers: ["OpenPort-Labs"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenPort-Labs/Galaxy-Android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["petari", "super-mario-galaxy-nebula"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/76/SuperMarioGalaxy.jpg",
    alt: "Super Mario Galaxy (box art)",
    credit: "Wikipedia",
  },
  summary: "Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D platformer game in the Super Mario series. As Mario, the player embarks on an extraterrestrial mission to rescue Princess Peach and save the universe from his arch-nemesis Bowser, after which the player can play the game as Luigi for a more challenging experience. The levels consist of galaxies filled with minor planets, asteroids, and worlds, with different variations of gravity, the central element of gameplay.",
  summaryEs: "Super Mario Galaxy es un videojuego de plataformas de 2007 desarrollado y publicado por Nintendo para la Nintendo Wii. Es el tercer juego de plataformas en 3D de la serie Super Mario. Como Mario, el jugador se embarca en una búsqueda para rescatar a la Princesa Peach, salvar el universo de Bowser y recolectar ciento veinte estrellas de poder, después de lo cual el jugador puede volver a repetir la misma aventura de Mario, pero como Luigi. Los niveles consisten en galaxias llenas de planetas y mundos menores, con diferentes variaciones de gravedad, el elemento central del juego.",
  notes:
    "Native 100% ARM64 Android port of Super Mario Galaxy (Wii, 2007), compiled from reconstructed C++ source (built on the Petari decompilation). Vulkan 1.0 (OpenGL ES 3.2 fallback) and AAudio; it is not an emulator and needs your own game dump. Early version (graphical glitches possible). Latest release: v0.0.1cx.",
  notesEs:
    "Port nativo 100% ARM64 para Android de Super Mario Galaxy (Wii, 2007), compilado desde código C++ reconstruido (sobre la decompilación Petari). Vulkan 1.0 (con OpenGL ES 3.2 alternativo) y AAudio; no es un emulador y necesita tu propio volcado del juego. Versión temprana (posibles fallos gráficos). Última release: v0.0.1cx.",
};
