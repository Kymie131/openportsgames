import type { Port } from "@/lib/ports/schema";

export const nuggetDoom: Port = {
  schema: "port",
  id: "nugget-doom",
  title: "Nugget Doom",
  game: "Doom",
  developers: ["MrAlaux"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "6.1.0", date: "2026-10-18" },
  sources: ["https://github.com/MrAlaux/Nugget-Doom"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-27",
  originalSystems: ["MS-DOS"],
  features: [
    "Modern renderer with shadows and reflections",
    "Extensive modding and scripting support",
  ],
  featuresEs: [
    "Renderizador moderno con sombras y reflejos",
    "Amplio soporte de modding y scripting",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes: "Cross-platform Doom source port with a modern renderer and a focus on extensibility.",
  notesEs:
    "Port de código fuente de Doom multiplataforma con un renderizador moderno y enfoque en la extensibilidad.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/MrAlaux/Nugget-Doom/master/data/nugget-doom.png",
      alt: "Nugget Doom Icon",
      credit: "MrAlaux",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    alt: "Doom (box art)",
    credit: "Wikipedia",
  },
};
