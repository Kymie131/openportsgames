import type { Port } from "@/lib/ports/schema";

export const battleArenaToshindenRecomp: Port = {
  schema: "port",
  id: "battle-arena-toshinden-recomp",
  title: "Battle Arena Toshinden Recompiled",
  game: "Battle Arena Toshinden",
  developers: ["PortsDR"],
  publisher: "Takara",
  originalYear: 1995,
  portType: "recompilation",
  genre: "fighting",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/BattleArenaToshindenRecomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Battle Arena Toshinden, released as Toh Shin Den in Japan, is a 1995 fighting video game developed by Tamsoft and published by Takara for the PlayStation. The first game of its respective series, it was one of the first fighting games, after Virtua Fighter on arcade and console, to boast polygonal characters in a 3D environment, and features a sidestep maneuver which is credited for taking the genre into \"true 3D.\"",
  summaryEs: "Battle Arena Toshinden es un videojuego de lucha con armas creado y publicado en 1995 por Takara. Fue uno de los primeros juegos de lucha poligonales en 3D y apareció en PlayStation. Fue fuertemente promocionado por Sony como uno de los primeros juegos punteros de la consola. También aparecieron versiones para Sega Saturn, PC e incluso Game Boy.",
  notes:
    "Listed on the PortsDR community index with no public repository. You need the original game.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Battle%20Arena%20Toshinden%20(Europe).png",
    alt: "Battle Arena Toshinden (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Battle%20Arena%20Toshinden%20(Europe).png",
      alt: "Battle Arena Toshinden (screenshot)",
      credit: "Libretro",
    },
  ],
};
