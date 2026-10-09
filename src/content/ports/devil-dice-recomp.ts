import type { Port } from "@/lib/ports/schema";

export const devilDiceRecomp: Port = {
  schema: "port",
  id: "devil-dice-recomp",
  title: "Devil Dice Recompiled",
  game: "Devil Dice",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/devil-dice-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Devil Dice (PS1, Europe SCES-01312) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Devil Dice (PS1, Europe SCES-01312) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
