import type { Port } from "@/lib/ports/schema";

export const crispyDoom: Port = {
  schema: "port",
  id: "crispy-doom",
  title: "Crispy Doom",
  game: "Doom",
  developers: ["Fabian Greffrath"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "7.2", date: "2026-10-12" },
  sources: ["https://github.com/fabiangreffrath/crispy-doom"],
  website: "https://fabiangreffrath.github.io/crispy-homepage",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-14",
  originalSystems: ["MS-DOS"],
  features: [
    "Hi-res sprites and textures replacing the Doom 1 art",
    "Optional sound effects pack",
    "Gamepad support with analog movement and aiming",
  ],
  featuresEs: [
    "Sprites y texturas de alta resolución que reemplazan el arte de Doom 1",
    "Paquete opcional de efectos de sonido",
    "Soporte de mando con movimiento y apuntado analógicos",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes:
    "Modern source port that keeps the vanilla Doom 1 experience while adding optional enhancements.",
  notesEs:
    "Port de código fuente moderno que conserva la experiencia del Doom 1 original añadiendo mejoras opcionales.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Doom.png",
    alt: "Doom (box art)",
    credit: "Box art",
  },
};
