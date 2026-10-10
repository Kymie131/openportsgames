import type { Port } from "@/lib/ports/schema";

export const threadsOfFateRecomp: Port = {
  schema: "port",
  id: "threads-of-fate-recomp",
  title: "Threads of Fate Recompiled",
  game: "Threads of Fate",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/threads-of-fate-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Threads of Fate (PS1, USA SLUS-01019) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Threads of Fate (PS1, USA SLUS-01019) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Threads%20of%20Fate%20(USA).png",
    alt: "Threads of Fate (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Threads%20of%20Fate%20(USA).png",
      alt: "Threads of Fate (screenshot)",
      credit: "Libretro",
    },
  ],
};
