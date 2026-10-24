import type { Port } from "@/lib/ports/schema";

export const vibRibbonRecomp: Port = {
  schema: "port",
  id: "vib-ribbon-recomp",
  title: "Vib-Ribbon Recompiled",
  game: "Vib-Ribbon",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/vib-ribbon-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Vib-Ribbon is a 1999 rhythm video game developed by NanaOn-Sha and released by Sony Computer Entertainment for the PlayStation. The game came out in Japan on 9 December 1999 and in Europe on 30 August 2000, but was never released for the PlayStation in North America; it was re-released on the PlayStation 3 via PlayStation Network in October 2014, which finally brought the game to North America in addition to Japan and Europe. NanaOn-Sha had previously developed the PaRappa the Rapper series of games for Sony.",
  summaryEs: "Vib-Ribbon es un videojuego musical creado por Masaya Matsuura y desarrollado por NanaOn-Sha para PlayStation. Salió a la venta el 9 de diciembre de 1999 en Japón y un año más tarde en Europa. Se trata de un juego rítmico cuya particularidad es que el software queda cargado en la memoria RAM, lo que permite retirar el CD del juego y utilizar canciones de cualquier otro disco compacto. El juego se puede jugar en PlayStation 2 debido a la retrocompatibilidad.",
  notes:
    "Recompilation of Vib-Ribbon (PS1, Europe SCES-02873) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Vib-Ribbon (PS1, Europe SCES-02873) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vib-Ribbon%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Vib-Ribbon (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Vib-Ribbon%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Vib-Ribbon (screenshot)",
      credit: "Libretro",
    },
  ],
};
