import type { Port } from "@/lib/ports/schema";

export const gzdoom: Port = {
  schema: "port",
  id: "gzdoom",
  title: "GZDoom",
  game: "Doom",
  developers: ["id Software"],
  publisher: "id Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "4.14.2", date: "2025-05-03" },
  sources: ["https://github.com/ZDoom/gzdoom"],
  website: "https://zdoom.org/",
  docs: "https://zdoom.org/wiki",
  license: {
    spdx: "GPL-3.0",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/ZDoom/gzdoom/master/src/posix/freedesktop/screenshot_doom.png",
      alt: "Classic DOOM gameplay rendered by GZDoom",
      credit: "ZDoom/gzdoom",
    },
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes:
    "Feature-centric source port for all Doom-engine games, with an official Android build. Requires an IWAD (the freedoom project provides assets).",
  notesEs:
    "Port de código fuente centrado en características para todos los juegos del motor Doom, con build oficial para Android. Requiere un IWAD (el proyecto freedoom ofrece recursos).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    alt: "Doom (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
