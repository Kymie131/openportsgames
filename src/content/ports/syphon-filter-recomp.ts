import type { Port } from "@/lib/ports/schema";

export const syphonFilterRecomp: Port = {
  schema: "port",
  id: "syphon-filter-recomp",
  title: "Syphon Filter Recompiled",
  game: "Syphon Filter",
  developers: ["Madxbio97"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "runtime-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Madxbio97/SF-pc-port"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Unofficial Windows runtime for Syphon Filter (NTSC-U 1.1) that pairs the original PlayStation gameplay code with a native host for rendering, input, audio and FMV. It contains no game data and needs your own disc.",
  notesEs:
    "Runtime no oficial para Windows de Syphon Filter (NTSC-U 1.1) que combina el código de juego original de PlayStation con un host nativo para renderizado, entrada, audio y FMV. No incluye datos del juego y necesita tu propio disco.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Syphon%20Filter%20(Europe,%20Australia).png",
    alt: "Syphon Filter (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Syphon%20Filter%20(Europe,%20Australia).png",
      alt: "Syphon Filter (screenshot)",
      credit: "Libretro",
    },
  ],
};
