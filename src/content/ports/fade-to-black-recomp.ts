import type { Port } from "@/lib/ports/schema";

export const fadeToBlackRecomp: Port = {
  schema: "port",
  id: "fade-to-black-recomp",
  title: "Fade to Black Recompiled",
  game: "Fade to Black",
  developers: ["alexbeavs"],
  publisher: "Electronic Arts",
  originalYear: 1995,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/fade-to-black-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Fade to Black is a 1995 action-adventure game developed by Delphine Software International and published by Electronic Arts. It is the sequel to the 1992 video game Flashback. The game was released for MS-DOS with full Gouraud-shaded 3D graphics, and PlayStation with fully textured 3D.",
  summaryEs: "Fade to Black es un videojuego perteneciente a la categoría aventura de acción o aventura de disparo en 3D desarrollado por Delphine Software originalmente para PC en 1995. En 1996 tuvo una versión para PlayStation que, en el año 2008, fue reeditada en la PlayStation Network para PlayStation 3 y PSP. Unas versiones para Sega Saturn y Nintendo 64 lanzan este juego pero fueron cancelados sin motivo aparente. Es la secuela de Flashback: The Quest for Identity, juego anterior al más puro estilo de aventura de acción de plataformas.",
  notes:
    "Recompilation of Fade to Black (PS1, USA SLUS-00236) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Fade to Black (PS1, USA SLUS-00236) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Fade%20to%20Black%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Fade to Black (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Fade%20to%20Black%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Fade to Black (screenshot)",
      credit: "Libretro",
    },
  ],
};
