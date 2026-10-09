import type { Port } from "@/lib/ports/schema";

export const digimonWorld2Recomp: Port = {
  schema: "port",
  id: "digimon-world-2-recomp",
  title: "Digimon World 2 Recompiled",
  game: "Digimon World 2",
  developers: ["alexbeavs"],
  publisher: "Bandai",
  originalYear: 2000,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/digimon-world-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Digimon World 2 (PS1, USA SLUS-01193) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Digimon World 2 (PS1, USA SLUS-01193) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
