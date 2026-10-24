import type { Port } from "@/lib/ports/schema";

export const ridgeRacerType4Recomp: Port = {
  schema: "port",
  id: "ridge-racer-type-4-recomp",
  title: "RidgeRacerType4Recomp",
  game: "R4: Ridge Racer Type 4",
  developers: ["tetrisgm"],
  publisher: "Namco",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/tetrisgm/RidgeRacerType4Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "R4: Ridge Racer Type 4, released without the 'R4' prefix in PAL territories, is a 1998 racing video game developed and published by Namco for the PlayStation. It is the fourth home title in the Ridge Racer series after Rage Racer (1996) and was initially released on December 3, 1998 in Japan, with global releases following in 1999.",
  summaryEs: "R4: Ridge Racer Type 4 , lanzado sin el prefijo «R4» en territorios PAL, es un videojuego de carreras de 1998 desarrollado y publicado por Namco para la PlayStation. Es la cuarta entrega para consolas domésticas de la serie Ridge Racer. Se lanzó inicialmente el 3 de diciembre de 1998 en Japón, seguido de lanzamientos globales en 1999.",
  notes:
    "Native recompilation of R4: Ridge Racer Type 4 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de R4: Ridge Racer Type 4 (PlayStation). El jugador aporta su propio material obtenido legalmente (disc image); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/R4%20-%20Ridge%20Racer%20Type%204%20(USA).png",
    alt: "R4: Ridge Racer Type 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/R4%20-%20Ridge%20Racer%20Type%204%20(USA).png",
      alt: "R4: Ridge Racer Type 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
