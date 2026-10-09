import type { Port } from "@/lib/ports/schema";

export const wipeoutXlRecomp: Port = {
  schema: "port",
  id: "wipeout-xl-recomp",
  title: "Wipeout XL Recompiled",
  game: "Wipeout XL",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Wipeout XL (PS1, USA SCUS-94351) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Wipeout XL (PS1, USA SCUS-94351) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
