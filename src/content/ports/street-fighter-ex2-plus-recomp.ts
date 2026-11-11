import type { Port } from "@/lib/ports/schema";

export const streetFighterEx2PlusRecomp: Port = {
  schema: "port",
  id: "street-fighter-ex2-plus-recomp",
  title: "Street Fighter EX2 Plus Recompiled",
  game: "Street Fighter EX2 Plus",
  developers: ["strider973"],
  publisher: "Capcom",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-08-29" },
  sources: ["https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Street Fighter EX2 Plus is a fighting game published by Capcom in 1999.",
  summaryEs: "Street Fighter EX2 Plus es un videojuego de lucha publicado por Capcom en 1999.",
  notes:
    "Static recompilation of Street Fighter EX2 Plus (PlayStation) built on PSXRecomp. It requires the original game.",
  notesEs:
    "Recompilación estática de Street Fighter EX2 Plus (PlayStation) construida sobre PSXRecomp. Requiere el juego original.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled/releases/download/v0.1.0/sfex2p-0.1.0-linux-x64.zip",
      size: "29.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled/releases/download/v0.1.0/sfex2p-0.1.0-macos-arm64.zip",
      size: "27.1 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled/releases/download/v0.1.0/sfex2p-0.1.0-macos-x64.zip",
      size: "27.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/strider973/Street-Fighter-EX2-Plus-Recompiled/releases/download/v0.1.0/sfex2p-0.1.0-windows-x64.zip",
      size: "31.4 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Street%20Fighter%20EX2%20Plus%20(Europe).png",
    alt: "Street Fighter EX2 Plus (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Street%20Fighter%20EX2%20Plus%20(Europe).png",
      alt: "Street Fighter EX2 Plus (screenshot)",
      credit: "Libretro",
    },
  ],
};
