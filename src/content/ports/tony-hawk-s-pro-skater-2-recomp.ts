import type { Port } from "@/lib/ports/schema";

export const tonyHawkSProSkater2Recomp: Port = {
  schema: "port",
  id: "tony-hawk-s-pro-skater-2-recomp",
  title: "Tony Hawk's Pro Skater 2 Recompiled",
  game: "Tony Hawk's Pro Skater 2",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 2000,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tony-hawk-s-pro-skater-2-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Tony Hawk's Pro Skater 2 (PS1, USA SLUS-01066) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tony Hawk's Pro Skater 2 (PS1, USA SLUS-01066) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tony%20Hawk's%20Pro%20Skater%202%20(Europe,%20Australia).png",
    alt: "Tony Hawk's Pro Skater 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tony%20Hawk's%20Pro%20Skater%202%20(Europe,%20Australia).png",
      alt: "Tony Hawk's Pro Skater 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
