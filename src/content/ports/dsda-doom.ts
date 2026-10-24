import type { Port } from "@/lib/ports/schema";

export const dsdaDoom: Port = {
  schema: "port",
  id: "dsda-doom",
  title: "dsda-doom",
  game: "Doom",
  developers: ["kraflab"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.30.1", date: "2026-10-09" },
  sources: ["https://github.com/dsda-org/dsda-doom"],
  discord: "https://discord.gg/9paQ52zQUT",
  license: {
    spdx: "NOASSERTION",
    note: "no project-wide license file; prboom2/COPYING applies to bundled sources",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Demo playback compatible with the original demo format",
    "Configurable keyboard and mouse emulation",
    "Binds every command to keys and buttons independently",
  ],
  featuresEs: [
    "Reproducción de demos compatible con el formato de demo original",
    "Emulación de teclado y ratón configurable",
    "Asigna cada comando a teclas y botones de forma independiente",
  ],
  summary: "Doom is a 1993 first-person shooter game developed and published by id Software for MS-DOS. It is the first installment in the Doom franchise. The player assumes the role of a space marine, later unofficially referred to as Doomguy, fighting through hordes of undead humans and invading demons. The game begins on the moons of Mars and finishes in hell, with the player traversing each level to find its exit or defeat its final boss. It is an early example of 3D graphics in video games, and has enemies and objects as 2D images, a technique sometimes referred to as 2.5D graphics.",
  summaryEs: "Doom es un videojuego de disparos en primera persona desarrollado y publicado por id Software. Lanzado el 10 de diciembre de 1993 para DOS, es la primera entrega de la franquicia Doom. El jugador asume el papel de un marine espacial, más tarde conocido extraoficialmente como Doomguy, que lucha contra hordas de humanos no muertos y demonios invasores. El juego comienza en las lunas de Marte y termina en el infierno, y el jugador atraviesa cada nivel para encontrar la salida o derrotar a su jefe final.",
  notes:
    "Doom source port oriented around deterministic demo playback. No project-wide license file declares the terms for the full tree.",
  notesEs:
    "Port de código fuente de Doom orientado a la reproducción determinista de demos. No hay un archivo de licencia global que declare los términos de todo el árbol.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Doom.png",
    alt: "Doom (box art)",
    credit: "Box art",
  },
};
