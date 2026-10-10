import type { Port } from "@/lib/ports/schema";

export const snowboardKidsRecompiled: Port = {
  schema: "port",
  id: "snowboard-kids-recompiled",
  title: "Snowboard Kids Recompiled",
  game: "Snowboard Kids",
  developers: ["boricuapab"],
  publisher: "Atlus",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/boricuapab/snowboardkids-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Snowboard Kids (N64) with N64Recomp and the RT64 renderer. It requires your own game files.",
  notesEs:
    "Recompilación estática de Snowboard Kids (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Snowboard%20Kids%20(Europe,%20Australia).png",
    alt: "Snowboard Kids (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Snowboard%20Kids%20(Europe,%20Australia).png",
      alt: "Snowboard Kids (screenshot)",
      credit: "Libretro",
    },
  ],
};
