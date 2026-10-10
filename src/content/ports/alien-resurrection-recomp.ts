import type { Port } from "@/lib/ports/schema";

export const alienResurrectionRecomp: Port = {
  schema: "port",
  id: "alien-resurrection-recomp",
  title: "Alien Resurrection Recompiled",
  game: "Alien Resurrection",
  developers: ["alexbeavs"],
  publisher: "Fox Interactive",
  originalYear: 2000,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/alien-resurrection-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Alien Resurrection (PS1, Europe SLES-02913) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Alien Resurrection (PS1, Europe SLES-02913) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Alien%20Resurrection%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Alien Resurrection (box art)",
    credit: "Box art",
  },
};
