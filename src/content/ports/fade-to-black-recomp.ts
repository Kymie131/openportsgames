import type { Port } from "@/lib/ports/schema";

export const fadeToBlackRecomp: Port = {
  schema: "port",
  id: "fade-to-black-recomp",
  title: "Fade to Black Recompiled",
  game: "Fade to Black",
  developers: ["alexbeavs"],
  publisher: "Electronic Arts",
  originalYear: 1995,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/fade-to-black-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Fade to Black (PS1, USA SLUS-00236) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Fade to Black (PS1, USA SLUS-00236) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
