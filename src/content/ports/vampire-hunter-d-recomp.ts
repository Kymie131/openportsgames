import type { Port } from "@/lib/ports/schema";

export const vampireHunterDRecomp: Port = {
  schema: "port",
  id: "vampire-hunter-d-recomp",
  title: "Vampire Hunter D Recompiled",
  game: "Vampire Hunter D",
  developers: ["alexbeavs"],
  publisher: "Jaleco",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/vampire-hunter-d-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Vampire Hunter D is a PlayStation video game based on the series of books and movies of the same name. Along with Countdown Vampires, it is one of the few survival horror games to revolve around vampires.",
  summaryEs: "Vampire Hunter D es un videojuego de acción y aventura publicado por Jaleco en 1999.",
  notes:
    "Recompilation of Vampire Hunter D (PS1, USA SLUS-01138) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Vampire Hunter D (PS1, USA SLUS-01138) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vampire%20Hunter%20D%20(Europe)%20(En,Fr,De).png",
    alt: "Vampire Hunter D (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Vampire%20Hunter%20D%20(Europe)%20(En,Fr,De).png",
      alt: "Vampire Hunter D (screenshot)",
      credit: "Libretro",
    },
  ],
};
