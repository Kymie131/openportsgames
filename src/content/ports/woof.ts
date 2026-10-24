import type { Port } from "@/lib/ports/schema";

export const woofPort: Port = {
  schema: "port",
  id: "woof",
  title: "Woof",
  game: "Doom",
  developers: ["Fabian Greffrath"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "16.0.0", date: "2026-09-08" },
  sources: ["https://github.com/fabiangreffrath/woof"],
  website: "https://fabiangreffrath.github.io/woof/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Multiple game modes including Boom and MBF",
    "High-resolution replacement textures",
    "SDL2 input and video backends",
  ],
  featuresEs: [
    "Múltiples modos de juego, incluidos Boom y MBF",
    "Texturas de reemplazo de alta resolución",
    "Backends de entrada y video SDL2",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes: "Doom engine covering the Doom 1, Doom 2 and Boom era limits, with SDL2 backends.",
  notesEs: "Motor de Doom que cubre la era de Doom 1, Doom 2 y Boom, con backends SDL2.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/fabiangreffrath/woof/master/data/woof.png",
      alt: "Woof! Icon",
      credit: "fabiangreffrath",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    alt: "Doom (box art)",
    credit: "Wikipedia",
  },
};
