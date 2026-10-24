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
  originalSystems: ["PlayStation"],
  summary: "Rollcage Stage II, also released as Death Track Racing, is a 2000 racing video game developed by Attention to Detail and published by Sony Computer Entertainment for the PlayStation and Microsoft Windows. It is the sequel to Rollcage; unlike its predecessor, Psygnosis did not publish the game anywhere, In addition to basic racing, the game also utilizes combat elements. The game's playable vehicles are equipped with weapons, which are collected along the track as bonus items and can be used against competing cars.",
  summaryEs: "Rollcage Stage II es un videojuego de carreras publicado por SCE Studio Liverpool en 2000.",
  notes:
    "Recompilation of Rollcage Stage II (PS1, USA SLUS-00867) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Rollcage Stage II (PS1, USA SLUS-00867) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Rollcage%20Stage%20II%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Rollcage Stage II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Rollcage%20Stage%20II%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Rollcage Stage II (screenshot)",
      credit: "Libretro",
    },
  ],
};
