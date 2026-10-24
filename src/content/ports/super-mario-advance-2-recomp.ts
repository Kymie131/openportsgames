import type { Port } from "@/lib/ports/schema";

export const superMarioAdvance2Recomp: Port = {
  schema: "port",
  id: "super-mario-advance-2-recomp",
  title: "Super Mario Advance 2",
  game: "Super Mario Advance 2: Super Mario World",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMarioAdvance2Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  summary: "Super Mario World is a 1990 platform game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan in 1990, in North America in 1991 and PAL territories in 1992. The player controls Mario on his quest to save Princess Peach and Dinosaur Land from the series' antagonist Bowser and the Koopalings. The gameplay is similar to that of earlier Super Mario games; players control Mario through a series of levels in which the goal is to reach the goalpost at the end.",
  summaryEs: "Super Mario World es un videojuego de plataformas desarrollado por Nintendo EAD y publicado por Nintendo para la consola Super Nintendo Entertainment System (SNES). Salió a la venta en Japón en 1990, en Norteamérica en 1991 y en los territorios PAL en 1992. El jugador controla a Mario en su misión para salvar a la princesa Peach y a Dinosaur Land del antagonista de la serie, Bowser y los Koopalings. La mecánica es similar a la de los anteriores títulos de Super Mario: se maneja a lo largo de una sucesión de niveles en los que el objetivo es llegar a la meta situada al final.",
  notes:
    "Static recompilation of Super Mario Advance 2: Super Mario World (GBA) with the gbarecomp framework. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Super Mario Advance 2: Super Mario World (GBA) con el framework gbarecomp. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(Europe)%20(En,Fr,De,Es).png",
    alt: "Super Mario Advance 2: Super Mario World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Super%20Mario%20Advance%202%20-%20Super%20Mario%20World%20(Europe)%20(En,Fr,De,Es).png",
      alt: "Super Mario Advance 2: Super Mario World (screenshot)",
      credit: "Libretro",
    },
  ],
};
