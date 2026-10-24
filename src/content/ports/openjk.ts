import type { Port } from "@/lib/ports/schema";

export const openJk: Port = {
  schema: "port",
  id: "openjk",
  title: "OpenJK",
  game: "Star Wars Jedi Knight: Jedi Academy",
  developers: ["Raven Software"],
  publisher: "LucasArts",
  originalYear: 2003,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/JACoders/OpenJK"],
  discord: "https://discord.gg/dPNCfeQ",
  website: "https://builds.openjk.org",
  license: {
    spdx: "GPL-2.0",
  },
  verified: false,
  summary: "Star Wars Jedi Knight: Jedi Academy is a 2003 first- and third-person shooter video game developed by Raven Software and published by LucasArts for Windows, Mac OS X and Xbox. Vicarious Visions was responsible for the development of the Xbox version. The game is a sequel to 2002's Star Wars Jedi Knight II: Jedi Outcast and the fourth and final installment in the Star Wars: Jedi Knight series.",
  summaryEs: "Star Wars Jedi Knight: Jedi Academy es un videojuego de disparos en primera y tercera persona establecido en el universo de Star Wars. Fue desarrollado por Raven Software y publicado, distribuido y promocionado por LucasArts en Norteamérica y por Activision en el resto el mundo. Jedi Academy fue lanzado en septiembre de 2003 y recibió críticas positivas, anotando un puntaje final de 81%.",
  notes:
    "Community engine for Jedi Academy (and Jedi Outcast single-player) released by Raven Software. Distributed as a rolling 'latest' release. Requires original game files.",
  notesEs:
    "Motor comunitario de Jedi Academy (y el modo un jugador de Jedi Outcast) publicado por Raven Software. Se distribuye como release continua 'latest'. Requiere los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/90/Jabox.jpg",
    alt: "Star Wars Jedi Knight: Jedi Academy (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
