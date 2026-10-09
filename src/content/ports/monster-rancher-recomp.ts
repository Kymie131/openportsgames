import type { Port } from "@/lib/ports/schema";

export const monsterRancherRecomp: Port = {
  schema: "port",
  id: "monster-rancher-recomp",
  title: "Monster Rancher Recompiled",
  game: "Monster Rancher",
  developers: ["alexbeavs"],
  publisher: "Tecmo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Monster Rancher (PS1, USA SLUS-00568) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Monster Rancher (PS1, USA SLUS-00568) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
