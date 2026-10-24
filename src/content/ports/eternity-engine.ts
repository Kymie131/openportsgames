import type { Port } from "@/lib/ports/schema";

export const eternityEngine: Port = {
  schema: "port",
  id: "eternity-engine",
  title: "The Eternity Engine",
  game: "Doom",
  developers: ["Team Eternity"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "4.06.00", date: "2026-06-13" },
  sources: ["https://github.com/team-eternity/eternity"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Modern renderer with dynamic lights and reflections",
    "Heightmap support for unlimited room heights",
  ],
  featuresEs: [
    "Renderizador moderno con luces dinámicas y reflejos",
    "Soporte de heightmap para alturas de sala ilimitadas",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes: "Extended Doom engine kept in active development for advanced community maps.",
  notesEs: "Motor de Doom extendido y en desarrollo activo para mapas comunitarios avanzados.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Doom.png",
    alt: "Doom (box art)",
    credit: "Box art",
  },
};
