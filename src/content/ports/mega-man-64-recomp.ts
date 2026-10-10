import type { Port } from "@/lib/ports/schema";

export const megaMan64Recomp: Port = {
  schema: "port",
  id: "mega-man-64-recomp",
  title: "MegaMan64Recompiled",
  game: "Mega Man 64",
  developers: ["MegaMan64Recomp"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/MegaMan64Recomp/MegaMan64Recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Mega Man 64 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man 64 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mega%20Man%2064%20(USA).png",
    alt: "Mega Man 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Mega%20Man%2064%20(USA).png",
      alt: "Mega Man 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
