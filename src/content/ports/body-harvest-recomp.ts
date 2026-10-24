import type { Port } from "@/lib/ports/schema";

export const bodyHarvestRecomp: Port = {
  schema: "port",
  id: "body-harvest-recomp",
  title: "Body Harvest Recompiled",
  game: "Body Harvest",
  developers: ["danielgomesvieira2000"],
  publisher: "Midway",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/danielgomesvieira2000/body-harvest-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Body Harvest is a 1998 action-adventure video game developed by DMA Design and published by Gremlin Interactive for the Nintendo 64. It was intended to be a launch title for the system, but was delayed due to its original publisher, Nintendo, having issues with the game's violent themes; they eventually dropped the game, leaving DMA to find a new publisher. Gremlin would later acquire the rights to the game and released it in Europe, while Midway Games released it in North America.",
  summaryEs: "Body Harvest es un videojuego realizado para la Nintendo 64 desarrollado por DMA Design. Fue concebido para ser lanzado junto al lanzamiento de la consola pero tuvo que ser retrasado debido a problemas con su distribuidor y con la política de Nintendo respecto a juegos de temática adulta teniendo que encontrar un nuevo distribuidor siendo distribuida al final por Gremlin Graphics en octubre de 1998.",
  notes:
    "Static recompilation of Body Harvest (N64) with N64Recomp and the RT64 renderer. It requires the game itself.",
  notesEs:
    "Recompilación estática de Body Harvest (N64) con N64Recomp y el renderizador RT64. Requiere el propio juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Body%20Harvest%20(Europe)%20(En,Fr,De).png",
    alt: "Body Harvest (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Body%20Harvest%20(Europe)%20(En,Fr,De).png",
      alt: "Body Harvest (screenshot)",
      credit: "Libretro",
    },
  ],
};
