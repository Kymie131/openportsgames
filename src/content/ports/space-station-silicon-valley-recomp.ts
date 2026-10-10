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
  originalSystem: "Nintendo 64",
  features: ["Widescreen support", "Mod support"],
  featuresEs: ["Soporte panorámico", "Soporte de mods"],
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
