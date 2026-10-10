import type { Port } from "@/lib/ports/schema";

export const wwfNoMercyRecomp: Port = {
  schema: "port",
  id: "wwf-no-mercy-recomp",
  title: "WWF No Mercy",
  game: "WWF No Mercy",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WWFNoMercyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of WWF No Mercy (N64) with N64Recomp and the RT64 renderer. It requires the original game.",
  notesEs:
    "Recompilación estática de WWF No Mercy (N64) con N64Recomp y el renderizador RT64. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20No%20Mercy%20(Europe)%20(Rev%201).png",
    alt: "WWF No Mercy (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WWF%20No%20Mercy%20(Europe)%20(Rev%201).png",
      alt: "WWF No Mercy (screenshot)",
      credit: "Libretro",
    },
  ],
};
