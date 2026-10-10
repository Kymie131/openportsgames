import type { Port } from "@/lib/ports/schema";

export const smwRev: Port = {
  schema: "port",
  id: "smw-rev",
  title: "SMW Rev",
  game: "Super Mario World",
  developers: ["snesrev"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "platformer",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1", date: "2023-08-16" },
  sources: ["https://github.com/snesrev/smw"],
  discord: "https://discord.gg/AJJbJAzNNJ",
  website: "https://discord.gg/AJJbJAzNNJ",
  license: {
    spdx: "MIT",
    note: "MIT per LICENSE.txt; the GitHub license field reports NOASSERTION",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Super Nintendo",
  notes:
    "SNES ROM reimplementation. The project publishes no game assets, so a legally obtained copy of Super Mario World is required.",
  notesEs:
    "Reimplementación de la ROM de SNES. El proyecto no publica recursos del juego, así que se requiere una copia de Super Mario World obtenida legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20World%20(USA).png",
    alt: "Super Mario World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Mario%20World%20(USA).png",
      alt: "Super Mario World (screenshot)",
      credit: "Libretro",
    },
  ],
};
