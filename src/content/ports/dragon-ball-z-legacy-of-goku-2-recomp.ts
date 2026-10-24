import type { Port } from "@/lib/ports/schema";

export const dragonBallZLegacyOfGoku2Recomp: Port = {
  schema: "port",
  id: "dragon-ball-z-legacy-of-goku-2-recomp",
  title: "Dragon Ball Z: The Legacy of Goku II",
  game: "Dragon Ball Z: The Legacy of Goku II",
  developers: ["mstan"],
  publisher: "Atari",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DragonBallZLegacyofGokuIIRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  summary: "Dragon Ball Z: The Legacy of Goku II is a 2003 action role-playing video game developed by Webfoot Technologies and published by Atari for the Game Boy Advance. It is based on the anime Dragon Ball Z and is the sequel to The Legacy of Goku, the second of three games in the series. It was released in North America on June 17, 2003, in Europe on August 1, and in Japan on July 23, 2004. It is the only Dragon Ball Z game developed in the United States to be released in the franchise's country of origin.",
  summaryEs: "Dragon Ball Z: El legado de Goku II, es uno de los muchos videojuegos basados en la serie de manga y anime Dragon Ball. Este juego es una continuación de la serie \"El Legado de Goku\" que si bien ofrece personajes con gráficos similares, tanto como el sistema gráfico en general, la inclusión de misiones extras mucho más interesantes, el diseño y sistema de combate fue mejorado con creces respecto a la versión anterior. En esta ocasión la historia trata sobre la llegada de Trunks.",
  notes:
    "Static recompilation of Dragon Ball Z: The Legacy of Goku II (GBA) with the gbarecomp framework. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: The Legacy of Goku II (GBA) con el framework gbarecomp. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20II%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Dragon Ball Z: The Legacy of Goku II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20II%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Dragon Ball Z: The Legacy of Goku II (screenshot)",
      credit: "Libretro",
    },
  ],
};
