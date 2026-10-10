import type { Port } from "@/lib/ports/schema";

export const goemon64Recompiled: Port = {
  schema: "port",
  id: "goemon-64-recompiled",
  title: "Goemon 64: Recompiled",
  game: "Mystical Ninja Starring Goemon",
  developers: ["klorfmorf"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/klorfmorf/Goemon64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Mystical Ninja Starring Goemon (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mystical Ninja Starring Goemon (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/klorfmorf/Goemon64Recomp/master/docs/deck_gyro_1.jpg",
      alt: "Goemon 64: Recompiled running on a Steam Deck",
      credit: "klorfmorf/Goemon64Recomp",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mystical%20Ninja%20Starring%20Goemon%20(Europe).png",
    alt: "Mystical Ninja Starring Goemon (box art)",
    credit: "Box art",
  },
};
