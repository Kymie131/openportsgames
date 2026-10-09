import type { Port } from "@/lib/ports/schema";

export const colinMcraeRally20Recomp: Port = {
  schema: "port",
  id: "colin-mcrae-rally-2-0-recomp",
  title: "Colin McRae Rally 2.0 Recompiled",
  game: "Colin McRae Rally 2.0",
  developers: ["alexbeavs"],
  publisher: "Codemasters",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/colin-mcrae-rally-2-0-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Colin McRae Rally 2.0 (PS1, USA SLUS-01222) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Colin McRae Rally 2.0 (PS1, USA SLUS-01222) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
