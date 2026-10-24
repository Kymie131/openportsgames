import type { Port } from "@/lib/ports/schema";

export const petari: Port = {
  schema: "port",
  id: "petari",
  title: "Petari",
  game: "Super Mario Galaxy",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SMGCommunity/Petari"],
  discord: "https://discord.gg/ZxEqyYeZbf",
  license: { spdx: "CC0-1.0" },
  verified: false,
  wip: true,
  originalSystems: ["Wii"],
  summary: "Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D platformer game in the Super Mario series. As Mario, the player embarks on an extraterrestrial mission to rescue Princess Peach and save the universe from his arch-nemesis Bowser, after which the player can play the game as Luigi for a more challenging experience. The levels consist of galaxies filled with minor planets, asteroids, and worlds, with different variations of gravity, the central element of gameplay.",
  summaryEs: "Super Mario Galaxy es un videojuego de plataformas de 2007 desarrollado y publicado por Nintendo para la Nintendo Wii. Es el tercer juego de plataformas en 3D de la serie Super Mario. Como Mario, el jugador se embarca en una búsqueda para rescatar a la Princesa Peach, salvar el universo de Bowser y recolectar ciento veinte estrellas de poder, después de lo cual el jugador puede volver a repetir la misma aventura de Mario, pero como Luigi. Los niveles consisten en galaxias llenas de planetas y mundos menores, con diferentes variaciones de gravedad, el elemento central del juego.",
  notes:
    "Ongoing decompilation of Super Mario Galaxy (Wii). No tagged releases yet; builds track the repository and still require assets from the original game.",
  notesEs:
    "Decompilación en curso de Super Mario Galaxy (Wii). Aún sin releases etiquetadas; las builds siguen el repositorio y todavía requieren recursos del juego original.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/SMGCommunity/Petari/master/assets/dolphin-extract.png",
      alt: "Petari progress tooling",
      credit: "SMGCommunity",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Super%20Mario%20Galaxy%20(Europe).png",
    alt: "Super Mario Galaxy (box art)",
    credit: "Box art",
  },
};
