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
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Superman (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Superman (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
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
