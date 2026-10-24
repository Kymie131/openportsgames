import type { Port } from "@/lib/ports/schema";

export const marioTennisVirtualBoyRecomp: Port = {
  schema: "port",
  id: "mario-tennis-virtual-boy-recomp",
  title: "Mario's Tennis Recompiled",
  game: "Mario's Tennis",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1995,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MarioTennisVirtualBoyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Virtual Boy"],
  summary: "Mario's Tennis is a 1995 sports video game developed and published by Nintendo for the Virtual Boy. It was one of five launch titles in Japan and the pack-in game in North America for the Virtual Boy. The first entry in the Mario Tennis series, the player participates in singles or doubles tennis matches, controlling one of seven Mario characters. Its gameplay takes place from a third-person perspective.",
  summaryEs: "Mario's Tennis es un videojuego deportivo de 1995 desarrollado y publicado por Nintendo para Virtual Boy. Fue uno de los cinco títulos de lanzamiento en Japón y el juego incluido en Norteamérica para Virtual Boy. En la primera entrega de la serie Mario Tennis, el jugador participa en partidos de tenis individuales o dobles controlando a uno de los siete personajes de Mario. La jugabilidad se desarrolla desde una perspectiva en tercera persona.",
  notes:
    "Static recompilation of Mario's Tennis (Virtual Boy) using the vbrecomp toolkit. It requires your own ROM and does not include the game.",
  notesEs:
    "Recompilación estática de Mario's Tennis (Virtual Boy) con el kit vbrecomp. Requiere tu propia ROM y no incluye el juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Virtual%20Boy/Named_Boxarts/Mario's%20Tennis%20(Japan,%20USA)%20(En).png",
    alt: "Mario's Tennis (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Virtual%20Boy/Named_Snaps/Mario's%20Tennis%20(Japan,%20USA)%20(En).png",
      alt: "Mario's Tennis (screenshot)",
      credit: "Libretro",
    },
  ],
};
