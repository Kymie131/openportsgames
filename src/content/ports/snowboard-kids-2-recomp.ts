import type { Port } from "@/lib/ports/schema";

export const snowboardKids2Recomp: Port = {
  schema: "port",
  id: "snowboard-kids-2-recomp",
  title: "Snowboard Kids 2: Recompiled",
  game: "Snowboard Kids 2",
  developers: ["cdlewis"],
  publisher: "Atlus",
  originalYear: 1999,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cdlewis/snowboardkids2-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Snowboard Kids 2 is a snowboarding video game developed by Racjin and published by Atlus. It serves as the sequel to Snowboard Kids and was later followed by another sequel, SBK: Snowboard Kids.",
  summaryEs: "Snowboard Kids 2 es un videojuego de deportes en 1999.",
  notes:
    "Native recompilation of Snowboard Kids 2 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Snowboard Kids 2 (Nintendo 64). El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Snowboard%20Kids%202%20(USA).png",
    alt: "Snowboard Kids 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Snowboard%20Kids%202%20(USA).png",
      alt: "Snowboard Kids 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
