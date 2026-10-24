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
  originalSystems: ["Nintendo 64"],
  summary: "Mischief Makers is a side-scrolling platform game developed for the Nintendo 64 gaming console by Treasure, and published in 1997 by Enix in Japan and by Nintendo internationally. The player assumes the role of Marina Liteyears, a robotic maid who journeys to rescue her creator, Professor Theo, from the emperor of Planet Clancer. The gameplay is displayed in 2.5D, based on grabbing, shaking, and throwing objects within five worlds and 52 levels.",
  summaryEs: "Mischief Makers es un videojuego de plataformas/rompecabezas de scroll lateral en 2D desarrollado por Treasure y distribuido por Enix y Nintendo lanzado para Nintendo 64 en 1997. La protagonista del juego es la Cybot-Ultra-Intergaláctica G, Marina Liteyears, que es una criada robótica del despistado profesor Theo.",
  notes:
    "Static recompilation of Mischief Makers (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Mischief Makers (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
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
