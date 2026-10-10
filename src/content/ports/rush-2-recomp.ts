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
  originalSystem: "Nintendo 64",
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
