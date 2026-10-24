import type { Port } from "@/lib/ports/schema";

export const smwRev: Port = {
  schema: "port",
  id: "smw-rev",
  title: "SMW Rev",
  game: "Super Mario World",
  developers: ["snesrev"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "platformer",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1", date: "2023-08-16" },
  sources: ["https://github.com/snesrev/smw"],
  discord: "https://discord.gg/AJJbJAzNNJ",
  website: "https://discord.gg/AJJbJAzNNJ",
  license: {
    spdx: "MIT",
    note: "MIT per LICENSE.txt; the GitHub license field reports NOASSERTION",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Super Nintendo"],
  summary: "Super Mario World is a 1990 platform game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan in 1990, in North America in 1991 and PAL territories in 1992. The player controls Mario on his quest to save Princess Peach and Dinosaur Land from the series' antagonist Bowser and the Koopalings. The gameplay is similar to that of earlier Super Mario games; players control Mario through a series of levels in which the goal is to reach the goalpost at the end.",
  summaryEs: "Super Mario World es un videojuego de plataformas desarrollado por Nintendo EAD y publicado por Nintendo para la consola Super Nintendo Entertainment System (SNES). Salió a la venta en Japón en 1990, en Norteamérica en 1991 y en los territorios PAL en 1992. El jugador controla a Mario en su misión para salvar a la princesa Peach y a Dinosaur Land del antagonista de la serie, Bowser y los Koopalings. La mecánica es similar a la de los anteriores títulos de Super Mario: se maneja a lo largo de una sucesión de niveles en los que el objetivo es llegar a la meta situada al final.",
  notes:
    "SNES ROM reimplementation. The project publishes no game assets, so a legally obtained copy of Super Mario World is required.",
  notesEs:
    "Reimplementación de la ROM de SNES. El proyecto no publica recursos del juego, así que se requiere una copia de Super Mario World obtenida legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20(USA).png",
    alt: "Super Mario World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Mario%20World%20(USA).png",
      alt: "Super Mario World (screenshot)",
      credit: "Libretro",
    },
  ],
};
