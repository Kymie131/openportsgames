import type { Port } from "@/lib/ports/schema";

export const kartiaRecomp: Port = {
  schema: "port",
  id: "kartia-recomp",
  title: "Kartia: The Word of Fate Recompiled",
  game: "Kartia: The Word of Fate",
  developers: ["alexbeavs"],
  publisher: "Atlus",
  originalYear: 1998,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/kartia-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Kartia: The Word of Fate, known as Legend of Kartia in Europe and Rebus in Japan, is a tactical role-playing game developed and published by Atlus for the PlayStation. It is best known for the work of its art designer, Yoshitaka Amano, who had previously worked on the Final Fantasy series. Shigenori Soejima, another artist who would later be known for his work on the Persona series, also contributed to the game as an item graphics artist. The game was re-released on the Japanese PlayStation Network in 2011.",
  summaryEs: "Kartia: The Word of Fate es un videojuego de estrategia publicado por Konami en 1998.",
  notes:
    "Recompilation of Kartia: The Word of Fate (PS1, USA SLUS-00631) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Kartia: The Word of Fate (PS1, USA SLUS-00631) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Kartia%20-%20The%20Word%20of%20Fate%20(USA).png",
    alt: "Kartia: The Word of Fate (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Kartia%20-%20The%20Word%20of%20Fate%20(USA).png",
      alt: "Kartia: The Word of Fate (screenshot)",
      credit: "Libretro",
    },
  ],
};
