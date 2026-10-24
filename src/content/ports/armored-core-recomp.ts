import type { Port } from "@/lib/ports/schema";

export const armoredCoreRecomp: Port = {
  schema: "port",
  id: "armored-core-recomp",
  title: "Armored Core Recompiled",
  game: "Armored Core",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/armored-core-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Armored Core is a 1997 third-person shooter mecha video game developed by FromSoftware for the PlayStation. The first installment in the Armored Core series, it was released outside Japan by Sony Computer Entertainment. A digital port was released in 2007 in Japan and 2015 in North America on the PlayStation Network as a part of the PSone Classics line of games.",
  summaryEs: "Armored Core es un videojuego de mecha lanzado en 1997. Este es el primero en la serie Armored Core para la PlayStation Portable, PlayStation, PlayStation 2, Xbox 360 y plataformas de telefonía móvil. Este es un videojuego de acción de perspectiva en tercera persona.",
  notes:
    "Recompilation of Armored Core (PS1, Europe SCES-00842) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Armored Core (PS1, Europe SCES-00842) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Armored%20Core%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Armored Core (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Armored%20Core%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Armored Core (screenshot)",
      credit: "Libretro",
    },
  ],
};
