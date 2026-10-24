import type { Port } from "@/lib/ports/schema";

export const gemrb: Port = {
  schema: "port",
  id: "gemrb",
  title: "GemRB",
  game: "Baldur's Gate",
  developers: ["BioWare"],
  publisher: "Black Isle Studios",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.9.5", date: "2026-03-23" },
  sources: ["https://github.com/gemrb/gemrb"],
  website: "https://www.gemrb.org/",
  license: {
    spdx: "GPL-2.0",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://gemrb.github.io/assets/img/screenshots/bg2.jpg",
      alt: "Baldur's Gate II gameplay running inside GemRB",
      credit: "GemRB",
    },
  ],
  summary: "Baldur's Gate is a 1998 role-playing video game developed by BioWare and published by Interplay Entertainment. It is the first game in the Baldur's Gate series and takes place in the Forgotten Realms, a high fantasy campaign setting, using a modified version of the Advanced Dungeons & Dragons (AD&D) 2nd edition rules. It was the first game to use the Infinity Engine for its graphics, with Interplay using the engine for other Forgotten Realms-licensed games, including the Icewind Dale series and Planescape: Torment.",
  summaryEs: "Baldur's Gate es un videojuego de rol de fantasía desarrollado por BioWare y publicado en 1998 por Interplay Entertainment. Este es el primer juego de la serie Baldur's Gate y se desarrolla en los Reinos Olvidados usando una versión modificada de la segunda edición de Advanced Dungeons & Dragons (AD&D). Este fue el primer videojuego que utilizó el motor de gráficos Infinity Engine desarrollado por BioWare. El juego obtuvo la aclamación de la crítica tras su lanzamiento y fue acreditado como el videojuego que revitalizó el género de los videojuegos de rol.",
  notes:
    "Portable reimplementation of BioWare's Infinity Engine, running Baldur's Gate I & II, Icewind Dale and Planescape: Torment. Requires the original game data.",
  notesEs:
    "Reimplementación portátil del Infinity Engine de BioWare, que ejecuta Baldur's Gate I y II, Icewind Dale y Planescape: Torment. Requiere los datos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d0/Baldur%27s_Gate_box.PNG",
    alt: "Baldur's Gate (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS","Windows"],
};
