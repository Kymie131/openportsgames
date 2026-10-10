import type { Port } from "@/lib/ports/schema";

export const mischiefMakersRecomp: Port = {
  schema: "port",
  id: "mischief-makers-recomp",
  title: "Mischief Makers",
  game: "Mischief Makers",
  developers: ["ThiagoLira"],
  publisher: "Enix",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ThiagoLira/trouble-makers-pc-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Mischief Makers (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Mischief Makers (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mischief%20Makers%20(Europe).png",
    alt: "Mischief Makers (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Mischief%20Makers%20(Europe).png",
      alt: "Mischief Makers (screenshot)",
      credit: "Libretro",
    },
  ],
};
