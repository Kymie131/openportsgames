import type { Port } from "@/lib/ports/schema";

export const fearEffect2RetroHelixRecomp: Port = {
  schema: "port",
  id: "fear-effect-2-retro-helix-recomp",
  title: "Fear Effect 2: Retro Helix Recompiled",
  game: "Fear Effect 2: Retro Helix",
  developers: ["alexbeavs"],
  publisher: "Eidos Interactive",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/fear-effect-2-retro-helix-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Fear Effect 2: Retro Helix (PS1, USA SLUS-01266 / SLUS-01275) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Fear Effect 2: Retro Helix (PS1, USA SLUS-01266 / SLUS-01275) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
