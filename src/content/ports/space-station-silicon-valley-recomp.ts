import type { Port } from "@/lib/ports/schema";

export const spaceStationSiliconValleyRecomp: Port = {
  schema: "port",
  id: "space-station-silicon-valley-recomp",
  title: "Space Station Silicon Valley Recompiled",
  game: "Space Station Silicon Valley",
  developers: ["DMA Design"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  genre: "simulation",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-03-13" },
  sources: ["https://github.com/Cellenseres/SSSV_Recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "Repository ships no license file, so reuse rights are unstated.",
  },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: ["Widescreen support", "Mod support"],
  featuresEs: ["Soporte panorámico", "Soporte de mods"],
  summary: "Space Station Silicon Valley is a platform video game developed by DMA Design and published by Take-Two Interactive. It was originally released for the Nintendo 64 in October 1998. An adaptation of the game for Game Boy Color was developed by Tarantula Studios and released in 1999. A PlayStation port, developed by Runecraft, was released in 2000, under the name Evo's Space Adventures. Players control Evo, a robot reduced to a crawling microchip after a ship crash, and are tasked with taking control of animals to solve puzzles and defeat enemies.",
  summaryEs: "Space Station Silicon Valley es un videojuego de plataformas lanzado en octubre de 1998 por la desarrolladora escocesa DMA Design. Fue lanzado inicialmente para la Nintendo 64, y más tarde portado en dos versiones exclusivas en Europa, primeramente para la PlayStation, bajo el título de Evo's Space Adventures en 1999, y ese mismo año para la Game Boy Color. Varios glitches estuvieron presentes en el juego, pero esto no le impidió lograr buenas críticas.",
  notes:
    "Recompilation of Space Station Silicon Valley; the player supplies their own legally obtained game.",
  notesEs:
    "Recompilación de Space Station Silicon Valley; el jugador aporta su propio juego obtenido legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/SpaceStation%20Silicon%20Valley%20(USA)%20(Rev%201).png",
    alt: "Space Station Silicon Valley (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/SpaceStation%20Silicon%20Valley%20(USA)%20(Rev%201).png",
      alt: "Space Station Silicon Valley (screenshot)",
      credit: "Libretro",
    },
  ],
};
