import type { Port } from "@/lib/ports/schema";

export const nightmareCreaturesIiRecomp: Port = {
  schema: "port",
  id: "nightmare-creatures-ii-recomp",
  title: "Nightmare Creatures II Recompiled",
  game: "Nightmare Creatures II",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Nightmare Creatures II (PS1, USA SLUS-01112) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Nightmare Creatures II (PS1, USA SLUS-01112) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Nightmare%20Creatures%20II%20(Europe)%20(En,Fr,De).png",
    alt: "Nightmare Creatures II (box art)",
    credit: "Box art",
  },
};
