import type { Port } from "@/lib/ports/schema";

export const zelda2AdventureOfLinkRecomp: Port = {
  schema: "port",
  id: "zelda-2-adventure-of-link-recomp",
  title: "Zelda II: The Adventure of Link Recompiled",
  game: "Zelda II: The Adventure of Link",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1987,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/troyedwardsjr/z2rs"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Zelda II: The Adventure of Link is a 1987 action role-playing game developed and published by Nintendo. It is the second installment in the Legend of Zelda series, and was released in Japan for the Famicom Disk System on January 14, 1987, less than a year after the Japanese release and seven months before the North American release of the original The Legend of Zelda. Zelda II was released in North America and the PAL region for the Nintendo Entertainment System in late 1988, almost two years after its initial release in Japan.",
  summaryEs: "Zelda II: The Adventure of Link, conocido en Japón como Link no Bouken y a veces llamado The Legend of Zelda 2, es un videojuego publicado en 1987 para la Nintendo Entertainment System y el segundo de la saga de juegos The Legend of Zelda. Fue relanzado para Game Boy Advance en 2004 bajo la colección Classic NES Series y en 2003 para Nintendo Gamecube en el recopilatorio The Legend of Zelda: Collector's Edition.",
  notes:
    "Listed on the PortsDR community index with no public repository. You need your own game files.",
  notesEs:
    "Listado en el índice comunitario PortsDR, sin repositorio público. Necesitas tus propios archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Zelda%20II%20-%20The%20Adventure%20of%20Link%20(Europe)%20(Rev%201).png",
    alt: "Zelda II: The Adventure of Link (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Zelda%20II%20-%20The%20Adventure%20of%20Link%20(Europe)%20(Rev%201).png",
      alt: "Zelda II: The Adventure of Link (screenshot)",
      credit: "Libretro",
    },
  ],
};
