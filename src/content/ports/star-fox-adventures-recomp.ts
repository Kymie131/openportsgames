import type { Port } from "@/lib/ports/schema";

export const starFoxAdventuresRecomp: Port = {
  schema: "port",
  id: "star-fox-adventures-recomp",
  title: "FoxHollow",
  game: "Star Fox Adventures",
  developers: ["JackPriceBurns"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JackPriceBurns/foxhollow"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  notes:
    "Native source port of Star Fox Adventures (GameCube) built on the SFA decompilation and the Aurora engine. It requires your own game files.",
  notesEs:
    "Port nativo de código de Star Fox Adventures (GameCube), construido sobre la descompilación de SFA y el motor Aurora. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Star%20Fox%20Adventures%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%201).png",
    alt: "Star Fox Adventures (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Star%20Fox%20Adventures%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%201).png",
      alt: "Star Fox Adventures (screenshot)",
      credit: "Libretro",
    },
  ],
};
