import type { Port } from "@/lib/ports/schema";

export const superman64Recomp: Port = {
  schema: "port",
  id: "superman-64-recomp",
  title: "Superman 64: Recompiled",
  game: "Superman",
  developers: ["gcsmith"],
  publisher: "Titus Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/gcsmith/Superman64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceDead: true,
  originalSystems: ["Nintendo 64"],
  summary: "Superman is an action-adventure video game programmed by John Dunn for the Atari Video Computer System and released in 1979 by Atari, Inc. The player controls Superman, whose quest is to explore an open-ended environment to find three pieces of a bridge that was destroyed by Lex Luthor, capture Luthor and his criminal gang, and return to the Daily Planet building. The game world is populated by antagonists such as a helicopter that re-arranges the bridge pieces and roving kryptonite satellites that cause Superman to revert into Clark Kent.",
  summaryEs: "Superman, también conocido como Superman 64, es un videojuego desarrollado en 1999 por Titus Software para la consola Nintendo 64. El juego está basado en la serie Superman: La serie animada, cuenta con la licencia de DC Comics, y está considerado por varias publicaciones de videojuegos como uno de los peores desarrollados en la historia.",
  notes:
    "Native recompilation of Superman (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content. The upstream repository is no longer available.",
  notesEs:
    "Recompilación nativa de Superman (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego. El repositorio original ya no está disponible.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Superman%20(USA)%20(Beta)%20(1998-09-06).png",
    alt: "Superman (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Superman%20(USA)%20(Beta)%20(1998-09-06).png",
      alt: "Superman (screenshot)",
      credit: "Libretro",
    },
  ],
};
