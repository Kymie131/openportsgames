import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyIos: Port = {
  schema: "port",
  id: "super-mario-galaxy-ios",
  title: "GalaxyPad",
  game: "Super Mario Galaxy",
  developers: ["chrissotraidis"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["ios", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/chrissotraidis/galaxypad"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["petari", "super-mario-galaxy-nebula", "super-mario-galaxy-android"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/76/SuperMarioGalaxy.jpg",
    alt: "Super Mario Galaxy (box art)",
    credit: "Wikipedia",
  },
  summary: "Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D platformer game in the Super Mario series. As Mario, the player embarks on an extraterrestrial mission to rescue Princess Peach and save the universe from his arch-nemesis Bowser, after which the player can play the game as Luigi for a more challenging experience. The levels consist of galaxies filled with minor planets, asteroids, and worlds, with different variations of gravity, the central element of gameplay.",
  summaryEs: "Super Mario Galaxy es un videojuego de plataformas de 2007 desarrollado y publicado por Nintendo para la Nintendo Wii. Es el tercer juego de plataformas en 3D de la serie Super Mario. Como Mario, el jugador se embarca en una búsqueda para rescatar a la Princesa Peach, salvar el universo de Bowser y recolectar ciento veinte estrellas de poder, después de lo cual el jugador puede volver a repetir la misma aventura de Mario, pero como Luigi. Los niveles consisten en galaxias llenas de planetas y mundos menores, con diferentes variaciones de gravedad, el elemento central del juego.",
  notes:
    "GalaxyPad: Super Mario Galaxy (Wii, 2007) native for iOS, iPadOS and macOS, with native ARM64 game code and a Metal renderer. Experimental preview. Latest release: v0.2.2.",
  notesEs:
    "GalaxyPad: Super Mario Galaxy (Wii, 2007) nativo para iOS, iPadOS y macOS, con código de juego ARM64 nativo y renderer Metal. Vista previa experimental. Última release: v0.2.2.",
};
