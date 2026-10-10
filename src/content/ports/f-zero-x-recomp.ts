import type { Port } from "@/lib/ports/schema";

export const fZeroXRecomp: Port = {
  schema: "port",
  id: "f-zero-x-recomp",
  title: "F-Zero X",
  game: "F-Zero X",
  developers: ["Zorkats"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Zorkats/G-Diffuser"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of F-Zero X (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de F-Zero X (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/F-Zero%20X%20(Europe).png",
    alt: "F-Zero X (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/F-Zero%20X%20(Europe).png",
      alt: "F-Zero X (screenshot)",
      credit: "Libretro",
    },
  ],
};
