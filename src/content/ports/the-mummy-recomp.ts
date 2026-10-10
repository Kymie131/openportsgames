import type { Port } from "@/lib/ports/schema";

export const theMummyRecomp: Port = {
  schema: "port",
  id: "the-mummy-recomp",
  title: "The Mummy Recompiled",
  game: "The Mummy",
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
  sources: ["https://github.com/alexbeavs-ps1-ports/the-mummy-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of The Mummy (PS1, USA SLUS-01187) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de The Mummy (PS1, USA SLUS-01187) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Mummy_video_game_cover.jpeg",
    alt: "The Mummy (box art)",
    credit: "Wikipedia",
  },
};
