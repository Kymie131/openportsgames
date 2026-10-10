import type { Port } from "@/lib/ports/schema";

export const rollcageStageIiRecomp: Port = {
  schema: "port",
  id: "rollcage-stage-ii-recomp",
  title: "Rollcage Stage II Recompiled",
  game: "Rollcage Stage II",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/rollcage-stage-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Rollcage Stage II (PS1, USA SLUS-00867) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Rollcage Stage II (PS1, USA SLUS-00867) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rollcage%20Stage%20II%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Rollcage Stage II (box art)",
    credit: "Box art",
  },
};
