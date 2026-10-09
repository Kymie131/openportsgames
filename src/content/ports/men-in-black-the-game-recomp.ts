import type { Port } from "@/lib/ports/schema";

export const menInBlackTheGameRecomp: Port = {
  schema: "port",
  id: "men-in-black-the-game-recomp",
  title: "Men in Black: The Game Recompiled",
  game: "Men in Black: The Game",
  developers: ["alexbeavs"],
  publisher: "Gremlin Interactive",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/men-in-black-the-game-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Men in Black: The Game (PS1, Europe SLES-01047) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Men in Black: The Game (PS1, Europe SLES-01047) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
