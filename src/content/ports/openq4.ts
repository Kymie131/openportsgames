import type { Port } from "@/lib/ports/schema";

export const openq4: Port = {
  schema: "port",
  id: "openq4",
  title: "openQ4",
  game: "Quake 4",
  developers: ["themuffinator"],
  publisher: "Activision",
  originalYear: 2005,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/themuffinator/openQ4"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Quake 4 is a 2005 first-person shooter game developed by Raven Software and published by Activision. It is the fourth title in the Quake series, after the multiplayer Quake III Arena, and a sequel to Quake II. Raven Software collaborated with id Software, who supervised the development of the game as well as provided the id Tech 4 engine upon which it was built. The game has an increased emphasis on single-player gameplay compared to previous installments; its multiplayer mode does not support playable bots.",
  summaryEs: "Quake 4 es el cuarto videojuego de la serie de videojuegos de disparos en primera persona, Quake, publicado en el año 2005. Ha sido desarrollado por Raven Software y distribuido por Activision. Raven Software ha colaborado con Id Software quienes, para este juego, han supervisado su desarrollo y proporcionado el Id Tech 4, motor gráfico de Doom 3, con el que ha sido construido. Quake 4 fue publicado el 18 de octubre de 2005 para PC. Existe además una versión para Xbox 360.",
  notes:
    "Modern source port of Quake 4 based on the released id Tech 4 code. It needs your own copy of the game.",
  notesEs:
    "Port de código fuente moderno de Quake 4 basado en el código de id Tech 4 publicado. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6c/Quake4box.jpg",
    alt: "Quake 4 (cover)",
    credit: "Wikipedia",
  },
};
