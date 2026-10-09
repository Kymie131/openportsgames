import type { Port } from "@/lib/ports/schema";

export const parasiteEveRecomp: Port = {
  schema: "port",
  id: "parasite-eve-recomp",
  title: "Parasite Eve Recompiled",
  game: "Parasite Eve",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/parasite-eve-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Parasite Eve (PS1, USA SLUS-00662 / SLUS-00668) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Parasite Eve (PS1, USA SLUS-00662 / SLUS-00668) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
