import type { Port } from "@/lib/ports/schema";

export const diabloRecomp: Port = {
  schema: "port",
  id: "diablo-recomp",
  title: "Diablo Recompiled",
  game: "Diablo",
  developers: ["alexbeavs"],
  publisher: "Blizzard Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/diablo-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Diablo (PS1, USA SLUS-00619) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Diablo (PS1, USA SLUS-00619) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Diablo%20(Europe)%20(En,Fr,De,Sv).png",
    alt: "Diablo (box art)",
    credit: "Box art",
  },
};
