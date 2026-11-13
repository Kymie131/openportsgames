import type { Port } from "@/lib/ports/schema";

export const megaMan64Recomp: Port = {
  schema: "port",
  id: "mega-man-64-recomp",
  title: "MegaMan64Recompiled",  game: "Mega Man 64",
  developers: ["MegaMan64Recomp"],  publisher: "Capcom",  originalYear: 2000,
  portType: "recompilation",  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.9.1", date: "2026-04-30" },
  sources: ["https://github.com/MegaMan64Recomp/MegaMan64Recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: false,  originalSystems: ["Nintendo 64"],  summary: "Mega Man 64 is the 2000 Nintendo 64 version of Mega Man Legends. Mega Man explores Kattelox Island, exploring ruins and fighting Reaverbots to stop the pirate Bon Bonne.",  summaryEs: "Mega Man 64 es la versión de 2000 para Nintendo 64 de Mega Man Legends. Mega Man explora la isla Kattelox, recorre ruinas y lucha contra los Reaverbots para detener al pirata Bon Bonne.",  notes:
    "Native recompilation of Mega Man 64 (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Mega Man 64 (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/MegaMan64Recomp/MegaMan64Recompiled/releases/download/v0.9.1/MegaMan64Recompiled-v0.9.1-Windows.zip",
      size: "23.6 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/MegaMan64Recomp/MegaMan64Recompiled/releases/download/v0.9.1/MegaMan64Recompiled-v0.9.1-macOS.zip",
      size: "22.6 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/MegaMan64Recomp/MegaMan64Recompiled/releases/download/v0.9.1/MegaMan64Recompiled-v0.9.1-Linux-ARM64.zip",
      size: "13.6 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/MegaMan64Recomp/MegaMan64Recompiled/releases/download/v0.9.1/MegaMan64Recompiled-v0.9.1-Linux-X64.zip",
      size: "13.4 MB",
    },
  ],
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
