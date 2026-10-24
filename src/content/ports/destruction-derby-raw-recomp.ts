import type { Port } from "@/lib/ports/schema";

export const destructionDerbyRawRecomp: Port = {
  schema: "port",
  id: "destruction-derby-raw-recomp",
  title: "Destruction Derby Raw Recompiled",
  game: "Destruction Derby Raw",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/destruction-derby-raw-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Destruction Derby Raw is a 2000 racing video game developed by Studio 33 and published by Sony Computer Entertainment for the PlayStation. it is the third main installment in Psygnosis's Destruction Derby series following Destruction Derby 2 (1996), and fourth overall after the Nintendo 64 exclusive Destruction Derby 64 (1999).",
  summaryEs: "Destruction Derby Raw es un videojuego de carreras desarrollado por Studio 33 y publicado por Sony Computer Entertainment Europe en Europa y por Midway Games en Norteamérica para la PlayStation y es la cuarta entrega de la serie Destruction Derby lanzado en 2000.",
  notes:
    "Recompilation of Destruction Derby Raw (PS1, USA SLUS-00912) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Destruction Derby Raw (PS1, USA SLUS-00912) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Destruction%20Derby%20Raw%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Destruction Derby Raw (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Destruction%20Derby%20Raw%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Destruction Derby Raw (screenshot)",
      credit: "Libretro",
    },
  ],
};
