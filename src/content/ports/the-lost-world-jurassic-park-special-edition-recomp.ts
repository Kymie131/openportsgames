import type { Port } from "@/lib/ports/schema";

export const theLostWorldJurassicParkSpecialEditionRecomp: Port = {
  schema: "port",
  id: "the-lost-world-jurassic-park-special-edition-recomp",
  title: "The Lost World: Jurassic Park Special Edition Recompiled",
  game: "The Lost World: Jurassic Park Special Edition",
  developers: ["alexbeavs"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: [
    "https://github.com/alexbeavs-ps1-ports/the-lost-world-jurassic-park-special-edition-recomp",
  ],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of The Lost World: Jurassic Park Special Edition (PS1, USA SLUS-00515) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de The Lost World: Jurassic Park Special Edition (PS1, USA SLUS-00515) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
