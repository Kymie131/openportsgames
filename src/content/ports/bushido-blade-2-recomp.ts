import type { Port } from "@/lib/ports/schema";

export const bushidoBlade2Recomp: Port = {
  schema: "port",
  id: "bushido-blade-2-recomp",
  title: "Bushido Blade 2 Recompiled",
  game: "Bushido Blade 2",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/bushido-blade-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Bushido Blade 2 (PS1, USA SLUS-00663) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Bushido Blade 2 (PS1, USA SLUS-00663) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
