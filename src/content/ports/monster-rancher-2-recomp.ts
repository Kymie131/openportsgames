import type { Port } from "@/lib/ports/schema";

export const monsterRancher2Recomp: Port = {
  schema: "port",
  id: "monster-rancher-2-recomp",
  title: "Monster Rancher 2 Recompiled",
  game: "Monster Rancher 2",
  developers: ["alexbeavs"],
  publisher: "Tecmo",
  originalYear: 1999,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/monster-rancher-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Monster Rancher 2 (PS1, USA SLUS-00917) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Monster Rancher 2 (PS1, USA SLUS-00917) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Monster%20Rancher%202%20(USA).png",
    alt: "Monster Rancher 2 (box art)",
    credit: "Box art",
  },
};
