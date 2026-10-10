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
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Body Harvest (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Body Harvest (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
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
