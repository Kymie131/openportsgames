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
  originalSystems: ["Nintendo 64"],
  summary: "F-Zero X is a 1998 racing game developed and published by Nintendo for the Nintendo 64. It is the sequel to the original F-Zero (1990), and the first F-Zero game with 3D graphics. It has a steep learning curve and its gameplay experience is similar to that of the original. The F-Zero X Expansion Kit, an expansion pack for the 64DD featuring 12 more tracks and track and vehicle editors, was released in Japan in 2000.",
  summaryEs: "F-Zero X es un videojuego de carreras futurista desarrollado y distribuido por Nintendo en 1998 para la videoconsola Nintendo 64. Es la continuación de F-Zero de Super Nintendo, y el segundo videojuego de la serie del mismo nombre.",
  notes:
    "Static recompilation of F-Zero X (N64) with N64Recomp and the RT64 renderer. It requires your own game files.",
  notesEs:
    "Recompilación estática de F-Zero X (N64) con N64Recomp y el renderizador RT64. Requiere tus propios archivos del juego.",
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
