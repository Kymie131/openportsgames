import type { Port } from "@/lib/ports/schema";

export const dieHardTrilogyRecomp: Port = {
  schema: "port",
  id: "die-hard-trilogy-recomp",
  title: "Die Hard Trilogy Recompiled",
  game: "Die Hard Trilogy",
  developers: ["alexbeavs"],
  publisher: "Fox Interactive",
  originalYear: 1996,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/die-hard-trilogy-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Die Hard Trilogy (PS1, USA SLUS-00119) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Die Hard Trilogy (PS1, USA SLUS-00119) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Die%20Hard%20Trilogy%20(Europe)%20(En,Fr,De,Es,It,Sv).png",
    alt: "Die Hard Trilogy (box art)",
    credit: "Box art",
  },
};
