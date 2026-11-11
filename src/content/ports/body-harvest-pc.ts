import type { Port } from "@/lib/ports/schema";

export const bodyHarvestPc: Port = {
  schema: "port",
  id: "body-harvest-pc",
  title: "Body Harvest (PC)",
  game: "Body Harvest",
  developers: ["mcsoderh"],
  publisher: "Gremlin Interactive",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-10-03" },
  sources: ["https://github.com/mcsoderh/BodyHarvestRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/mcsoderh/BodyHarvestRecomp/releases/download/v1.0.0/BodyHarvestRecompiled-v1.0.0-Linux-ARM64.tar.gz",
      size: "7.6 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/mcsoderh/BodyHarvestRecomp/releases/download/v1.0.0/BodyHarvestRecompiled-v1.0.0-Linux-X64.tar.gz",
      size: "7.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/mcsoderh/BodyHarvestRecomp/releases/download/v1.0.0/BodyHarvestRecompiled-v1.0.0-macOS.zip",
      size: "16.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mcsoderh/BodyHarvestRecomp/releases/download/v1.0.0/BodyHarvestRecompiled-v1.0.0-Windows.zip",
      size: "17.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a3/Body_Harvest.jpg",
    alt: "Body Harvest (box art)",
    credit: "Wikipedia",
  },
  summary: "Body Harvest is a 1998 action-adventure video game developed by DMA Design and published by Gremlin Interactive for the Nintendo 64. It was intended to be a launch title for the system, but was delayed due to its original publisher, Nintendo, having issues with the game's violent themes; they eventually dropped the game, leaving DMA to find a new publisher. Gremlin would later acquire the rights to the game and released it in Europe, while Midway Games released it in North America.",
  summaryEs: "Body Harvest es un videojuego realizado para la Nintendo 64 desarrollado por DMA Design. Fue concebido para ser lanzado junto al lanzamiento de la consola pero tuvo que ser retrasado debido a problemas con su distribuidor y con la política de Nintendo respecto a juegos de temática adulta teniendo que encontrar un nuevo distribuidor siendo distribuida al final por Gremlin Graphics en octubre de 1998.",
  notes: "Body Harvest (Gremlin Interactive, 1998) running on Windows through static recompilation. Latest release: v1.0.0. You need your own copy of the game.",
  notesEs: "Body Harvest (Gremlin Interactive, 1998) en Windows mediante recompilación estática. Última release: v1.0.0. Necesitas tu propia copia del juego.",
};
