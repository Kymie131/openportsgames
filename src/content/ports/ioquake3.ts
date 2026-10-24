import type { Port } from "@/lib/ports/schema";

export const ioquake3: Port = {
  schema: "port",
  id: "ioquake3",
  title: "ioquake3",
  game: "Quake III Arena",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/ioquake/ioq3"],
  website: "https://www.ioquake3.org/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  summary: "Quake III Arena is a 1999 first-person shooter game developed by id Software. The third installment of the Quake series, it focuses primarily on multiplayer gameplay, becoming one of the first modern arena shooters. While the single-player mode in previous installments were story-based, in Arena it is reduced to a player versus environment variant of the core multiplayer mode.",
  summaryEs: "Quake III Arena o Quake 3 es un videojuego de disparos en primera persona publicado el 2 de diciembre de 1999. El juego fue desarrollado por id Software, con música compuesta por Sonic Mayhem y Front Line Assembly. Quake III Arena es el tercer título en la serie y difiere de juegos anteriores de la serie Quake en excluir los elementos comunes de los denominados juegos para un solo jugador, enfocándose en su lugar en la acción multijugador.",
  notes:
    "Community source port of Quake III Arena, actively maintained by the ioquake3 team. Distributed as a rolling 'latest' release from the official website. Requires the original game files.",
  notesEs:
    "Port de código fuente comunitario de Quake III Arena, mantenido activamente por el equipo ioquake3. Se distribuye como release continua 'latest' desde el sitio oficial. Requiere los archivos del juego original.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/903791/152968830-dd08737b-55c6-4ac6-9610-31121ea0e8c6.png",
      alt: "ioquake screenshot",
      credit: "ioquake",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/Quake3Title.jpg",
    alt: "Quake III Arena (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
