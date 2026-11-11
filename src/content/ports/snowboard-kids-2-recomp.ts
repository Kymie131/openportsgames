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
  release: { version: "2.0.2", date: "2026-10-17" },
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
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/cdlewis/snowboardkids2-recomp/releases/download/v2.0.2/SnowboardKids2Recompiled-macOS.zip",
      size: "20.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/cdlewis/snowboardkids2-recomp/releases/download/v2.0.2/SnowboardKids2Recompiled-Windows.zip",
      size: "19.1 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/cdlewis/snowboardkids2-recomp/releases/download/v2.0.2/SnowboardKids2Recompiled-Linux-X64.tar.gz",
      size: "10.1 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/cdlewis/snowboardkids2-recomp/releases/download/v2.0.2/SnowboardKids2Recompiled-Linux-ARM64.tar.gz",
      size: "9.9 MB",
    },
  ],
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
