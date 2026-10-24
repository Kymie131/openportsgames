import type { Port } from "@/lib/ports/schema";

export const devilDiceRecomp: Port = {
  schema: "port",
  id: "devil-dice-recomp",
  title: "Devil Dice Recompiled",
  game: "Devil Dice",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/devil-dice-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Devil Dice, known in Japan as XI, pronounced [sai], is a puzzle video game developed by Shift and published by Sony Computer Entertainment for the PlayStation. It was released in Japan in 1998 and Europe in 1999, and by THQ in North America in 1998. The game is a million-seller and a demo version was released as a PlayStation Classic game for the PlayStation 3 and PlayStation Portable (PSP) on 7 November 2007.",
  summaryEs: "Devil Dice es un videojuego de puzles publicado por Sony Interactive Entertainment en 1998.",
  notes:
    "Recompilation of Devil Dice (PS1, Europe SCES-01312) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Devil Dice (PS1, Europe SCES-01312) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Devil%20Dice%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Devil Dice (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Devil%20Dice%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Devil Dice (screenshot)",
      credit: "Libretro",
    },
  ],
};
