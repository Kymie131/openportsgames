import type { Port } from "@/lib/ports/schema";

export const hexenIi3ds: Port = {
  schema: "port",
  id: "hexen-ii-3ds",
  title: "Hexen II (3DS)",
  game: "Hexen II",
  developers: ["Rinnegatamante"],
  publisher: "id Software",
  originalYear: 1997,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rinnegatamante/ctrHexenII"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  related: ["hexen-ii-classic-core-engines"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b1/HexenIIbox.jpg",
    alt: "Hexen II (box art)",
    credit: "Wikipedia",
  },
  summary: "Hexen II is a 1997 first-person shooter game developed by Raven Software and published by id Software for Windows. It is the third game in the Hexen/Heretic series, and the last in the Serpent Riders trilogy. Using a modified Quake engine, it features single-player and multiplayer game modes, as well as four character classes to choose from, each with different abilities. These include the \"offensive\" Paladin, the \"defensive\" Crusader, the spell-casting Necromancer, and the stealthy Assassin.",
  summaryEs: "Hexen II es un videojuego de disparos en primera persona de fantasía oscura desarrollado por Raven Software entre 1996 y 1997, publicado por id Software y distribuido por Activision. Fue la tercera entrega en las series Hexen/Heretic, y el último en la trilogía de Serpent Riders. Fue puesto a disposición a través de Steam, el 3 de agosto de 2007. Utiliza un motor modificado de Quake, tiene modos un jugador y multijugador, así como cuatro clases de personajes para elegir, cada uno con diferentes habilidades.",
  notes:
    "Hexen II (id Software, 1997) ported natively to Nintendo 3DS from the original source code. You need the game data files to play.",
  notesEs:
    "Hexen II (id Software, 1997) portado de forma nativa a Nintendo 3DS desde el código fuente original. Necesitas los archivos de datos del juego para jugar.",
};
