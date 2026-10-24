import type { Port } from "@/lib/ports/schema";

export const marioGolf64Recomp: Port = {
  schema: "port",
  id: "mario-golf-64-recomp",
  title: "Mario Golf Recompiled",
  game: "Mario Golf",
  developers: ["Rainchus"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/MarioGolf64"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Mario Golf is a 1999 sports video game developed by Camelot Software Planning and published by Nintendo for the Nintendo 64. It is the successor to NES Open Tournament Golf and, although the first to bear the name, is the second game in the Mario Golf series. Players control Mario series characters participating in the sport of golf on themed courses. Unlike previous golf titles, the gameplay is simplified to provide an easier experience while retaining common elements such as character statistics and variables affecting ball shots.",
  summaryEs: "Mario Golf es una serie de videojuegos deportivos de golf desarrollados por Camelot Software Planning y distribuidos por Nintendo, protagonizados por los personajes de la saga de Mario.",
  notes:
    "Static recompilation of Mario Golf (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Golf (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Golf%20(USA).png",
    alt: "Mario Golf (box art)",
    credit: "Box art",
  },
};
