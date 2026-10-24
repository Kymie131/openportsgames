import type { Port } from "@/lib/ports/schema";

export const megaManX5Recomp: Port = {
  schema: "port",
  id: "mega-man-x5-recomp",
  title: "MegaManX5Recomp",
  game: "Mega Man X5",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManX5Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mega Man X5, known as Rockman X5 (ロックマンX5) in Japan, is a 2000 action-platform game and the fifth main installment in the Mega Man X series. Developed by Capcom, it was first released for the PlayStation in Japan on November 30, 2000, and in North America and PAL territories the following year. In 2002, the game was ported to Microsoft Windows as retail packages in both Japan and North America.",
  summaryEs: "Mega Man X5 es el quinto juego de la serie Mega Man X. Este juego fue originalmente publicado el 30 de noviembre de 2000 para la consola PlayStation, tres años después de Mega Man X4, y para PC en el año 2002. Forma parte de Mega Man X Collection para Nintendo GameCube y PlayStation 2.",
  notes:
    "Native recompilation of Mega Man X5 (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man X5 (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mega%20Man%20X5%20(USA).png",
    alt: "Mega Man X5 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mega%20Man%20X5%20(USA).png",
      alt: "Mega Man X5 (screenshot)",
      credit: "Libretro",
    },
  ],
};
