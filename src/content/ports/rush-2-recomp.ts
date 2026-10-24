import type { Port } from "@/lib/ports/schema";

export const rush2Recomp: Port = {
  schema: "port",
  id: "rush-2-recomp",
  title: "Rush 2 Recompiled",
  game: "San Francisco Rush 2",
  developers: ["bryantmh"],
  publisher: "Midway",
  originalYear: 1999,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/bryantmh/rush2recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "San Francisco Rush 2049 is a 1999 racing video game developed and published by Atari Games for arcades. It was later ported to home systems. It is the third game in the Rush series as the sequel to San Francisco Rush: Extreme Racing and Rush 2: Extreme Racing USA as well as the last to be set in the city of San Francisco. An updated version with fixes and more tracks was later released subtitled Tournament Edition.",
  summaryEs: "San Francisco Rush 2049 es un videojuego de carreras de 1999 desarrollado por Atari Games y publicado por Midway Games para la Arcade, Nintendo 64, Game Boy Color, y Dreamcast. Fue lanzado el 7 de septiembre de 2000 en Norteamérica y el 17 de noviembre de 2000 en Europa. Es el tercer juego de la serie Rush y la secuela de Rush 2: Extreme Racing USA. La versión de Dreamcast fue posteriormente reeditada como parte de Midway Arcade Treasures 3 para la PlayStation 2, Xbox y Nintendo GameCube.",
  notes:
    "Native recompilation of San Francisco Rush 2 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de San Francisco Rush 2 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rush%202%20-%20Extreme%20Racing%20USA%20(USA).png",
    alt: "San Francisco Rush 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Rush%202%20-%20Extreme%20Racing%20USA%20(USA).png",
      alt: "San Francisco Rush 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
