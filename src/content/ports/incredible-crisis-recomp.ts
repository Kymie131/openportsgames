import type { Port } from "@/lib/ports/schema";

export const incredibleCrisisRecomp: Port = {
  schema: "port",
  id: "incredible-crisis-recomp",
  title: "Incredible Crisis Recompiled",
  game: "Incredible Crisis",
  developers: ["alexbeavs"],
  publisher: "Titus Interactive",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/incredible-crisis-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Incredible Crisis (PS1, USA SLUS-01225) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Incredible Crisis (PS1, USA SLUS-01225) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
