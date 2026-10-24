import type { Port } from "@/lib/ports/schema";

export const odamexPort: Port = {
  schema: "port",
  id: "odamex",
  title: "Odamex",
  game: "Doom",
  developers: ["Odamex Development Team"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "12.3.0", date: "2026-08-06" },
  sources: ["https://github.com/odamex/odamex"],
  discord: "https://discord.gg/aMUzcZE",
  website: "https://odamex.net",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Client-server multiplayer",
    "High dynamic range lighting",
    "Model and sprite rendering improvements",
  ],
  featuresEs: [
    "Multijugador cliente-servidor",
    "Iluminación de alto rango dinámico",
    "Mejoras en el renderizado de modelos y sprites",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes: "Doom source port with a strong focus on multiplayer and modern rendering.",
  notesEs:
    "Port de código fuente de Doom con un fuerte enfoque en el multijugador y el renderizado moderno.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/odamex/odamex/stable/media/logo_128.png?raw=true",
      alt: "Odamex",
      credit: "odamex",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    alt: "Doom (box art)",
    credit: "Wikipedia",
  },
};
