import type { Port } from "@/lib/ports/schema";

export const neoDriftOutRecomp: Port = {
  schema: "port",
  id: "neo-drift-out-recomp",
  title: "Neo Drift Out Recompiled",
  game: "Neo Drift Out",
  developers: ["sp00nznet"],
  publisher: "Visco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-10-21" },
  sources: ["https://github.com/sp00nznet/neodriftout"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Neo Geo"],
  summary: "Neo Drift Out: New Technology is a 1996 rallying video game developed by Visco Corporation for the Neo Geo and Neo Geo CD. It is the fourth title in the Drift Out series. Though it follows Super Drift Out: World Rally Championships, it is closer to the earlier Drift Out '94: The Hard Order.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Native PC port of Neo Drift Out through static recompilation of the original Neo Geo 68000 code. It needs the original game.",
  notesEs:
    "Port nativo para PC de Neo Drift Out mediante recompilación estática del código 68000 original de Neo Geo. Necesita el juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/sp00nznet/neodriftout/releases/download/v0.2.0/Neo-Drift-Out-Installer-linux-x64.tar.gz",
      size: "9.2 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/sp00nznet/neodriftout/releases/download/v0.2.0/Neo-Drift-Out-Installer-macos-arm64.zip",
      size: "9.1 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/sp00nznet/neodriftout/releases/download/v0.2.0/Neo-Drift-Out-Installer-windows-x64.exe",
      size: "18.3 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo/Named_Boxarts/Neo%20Drift%20Out%20-%20New%20Technology.png",
    alt: "Neo Drift Out (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/SNK%20-%20Neo%20Geo/Named_Snaps/Neo%20Drift%20Out%20-%20New%20Technology.png",
      alt: "Neo Drift Out (screenshot)",
      credit: "Libretro",
    },
  ],
};
