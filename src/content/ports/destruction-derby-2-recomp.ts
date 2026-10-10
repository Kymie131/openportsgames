import type { Port } from "@/lib/ports/schema";

export const destructionDerby2Recomp: Port = {
  schema: "port",
  id: "destruction-derby-2-recomp",
  title: "Destruction Derby 2 Recompiled",
  game: "Destruction Derby 2",
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
  sources: ["https://github.com/alexbeavs-ps1-ports/destruction-derby-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Destruction Derby 2 (PS1, USA SCUS-94350) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Destruction Derby 2 (PS1, USA SCUS-94350) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Destruction%20Derby%202%20(Europe).png",
    alt: "Destruction Derby 2 (box art)",
    credit: "Box art",
  },
};
