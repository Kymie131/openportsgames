import type { Port } from "@/lib/ports/schema";

export const alundraRecomp: Port = {
  schema: "port",
  id: "alundra-recomp",
  title: "Alundra Recompiled",
  game: "Alundra",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/alundra-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Alundra , released in Europe as The Adventures of Alundra, is an action-adventure video game developed by Matrix Software and published by Sony Computer Entertainment for the PlayStation. It was originally released in 1997 in Japan, January 1998 in North America by Working Designs and June 1998 in PAL territories by Sony-owned Psygnosis. A standalone sequel, Alundra 2, was released in 1999.",
  summaryEs: "The Adventures of Alundra, comúnmente conocido como Alundra , es un videojuego, de aventuras, lanzado para PlayStation en el año 1997 en Japón y Estados Unidos y en 1998 en Europa. Fue desarrollado por Matrix Software y editado por Psygnosis. Obtuvo una acogida a priori polémica debido a su gran similitud con la famosa y mediática saga de videojuegos The Legend of Zelda. La versión de la PlayStation Store europea está en inglés y contiene el castellano.",
  notes:
    "Recompilation of Alundra (PS1, Europe SLES-01135) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Alundra (PS1, Europe SLES-01135) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Alundra%20(Europe).png",
    alt: "Alundra (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Alundra%20(Europe).png",
      alt: "Alundra (screenshot)",
      credit: "Libretro",
    },
  ],
};
