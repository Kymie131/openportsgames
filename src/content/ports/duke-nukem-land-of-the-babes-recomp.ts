import type { Port } from "@/lib/ports/schema";

export const dukeNukemLandOfTheBabesRecomp: Port = {
  schema: "port",
  id: "duke-nukem-land-of-the-babes-recomp",
  title: "Duke Nukem: Land of the Babes Recompiled",
  game: "Duke Nukem: Land of the Babes",
  developers: ["alexbeavs"],
  publisher: "GT Interactive",
  originalYear: 2000,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/duke-nukem-land-of-the-babes-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Duke Nukem: Land of the Babes (PS1, USA SLUS-01002) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Duke Nukem: Land of the Babes (PS1, USA SLUS-01002) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
};
