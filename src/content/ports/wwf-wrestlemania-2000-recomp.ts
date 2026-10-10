import type { Port } from "@/lib/ports/schema";

export const wwfWrestlemania2000Recomp: Port = {
  schema: "port",
  id: "wwf-wrestlemania-2000-recomp",
  title: "WWF WrestleMania 2000",
  game: "WWF WrestleMania 2000",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 1999,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WWFWrestleMania2000Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of WWF WrestleMania 2000 (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de WWF WrestleMania 2000 (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20WrestleMania%202000%20(Europe).png",
    alt: "WWF WrestleMania 2000 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WWF%20WrestleMania%202000%20(Europe).png",
      alt: "WWF WrestleMania 2000 (screenshot)",
      credit: "Libretro",
    },
  ],
};
