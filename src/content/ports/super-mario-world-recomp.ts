import type { Port } from "@/lib/ports/schema";

export const superMarioWorldRecomp: Port = {
  schema: "port",
  id: "super-mario-world-recomp",
  title: "Super Mario World Recompiled",
  game: "Super Mario World",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.14.2", date: "2026-09-22" },
  sources: ["https://github.com/mstan/SuperMarioWorldRecomp"],
  discord: "https://discord.gg/S4MvUGQFwd",
  license: {
    spdx: "NOASSERTION",
    note: "Repository declares no SPDX license, so reuse rights are unstated.",
  },
  verified: false,
  originalSystems: ["Super Nintendo"],
  features: [
    "SMW Adaptive Widescreen mod enabled from the launcher's Mods page",
    "Aspect ratio options: fit to screen by default, plus fixed ratios",
  ],
  featuresEs: [
    "Mod SMW Adaptive Widescreen activado desde la página Mods del lanzador",
    "Opciones de relación de aspecto: ajustar a pantalla por defecto, más relaciones fijas",
  ],
  summary: "Super Mario World is a 1990 platform game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan in 1990, in North America in 1991 and PAL territories in 1992. The player controls Mario on his quest to save Princess Peach and Dinosaur Land from the series' antagonist Bowser and the Koopalings. The gameplay is similar to that of earlier Super Mario games; players control Mario through a series of levels in which the goal is to reach the goalpost at the end.",
  summaryEs: "Super Mario World es un videojuego de plataformas desarrollado por Nintendo EAD y publicado por Nintendo para la consola Super Nintendo Entertainment System (SNES). Salió a la venta en Japón en 1990, en Norteamérica en 1991 y en los territorios PAL en 1992. El jugador controla a Mario en su misión para salvar a la princesa Peach y a Dinosaur Land del antagonista de la serie, Bowser y los Koopalings. La mecánica es similar a la de los anteriores títulos de Super Mario: se maneja a lo largo de una sucesión de niveles en los que el objetivo es llegar a la meta situada al final.",
  notes:
    "Super Mario World recompiled for the Super Nintendo with snesrecomp; the player supplies their own legally obtained game.",
  notesEs:
    "Super Mario World recompilado para Super Nintendo con snesrecomp; el jugador aporta su propio juego obtenido legalmente.",
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
