import type { Port } from "@/lib/ports/schema";

export const misadventuresOfTronBonneRecomp: Port = {
  schema: "port",
  id: "misadventures-of-tron-bonne-recomp",
  title: "The Misadventures of Tron Bonne Recompiled",
  game: "The Misadventures of Tron Bonne",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/misadventures-of-tron-bonne-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of The Misadventures of Tron Bonne (PS1, Europe SLES-02795) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de The Misadventures of Tron Bonne (PS1, Europe SLES-02795) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
