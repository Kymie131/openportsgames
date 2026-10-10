import type { Port } from "@/lib/ports/schema";

export const tonyHawkSProSkater3Recomp: Port = {
  schema: "port",
  id: "tony-hawk-s-pro-skater-3-recomp",
  title: "Tony Hawk's Pro Skater 3 Recompiled",
  game: "Tony Hawk's Pro Skater 3",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 2001,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tony-hawk-s-pro-skater-3-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Tony Hawk's Pro Skater 3 (PS1, USA SLUS-01419) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tony Hawk's Pro Skater 3 (PS1, USA SLUS-01419) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tony%20Hawk's%20Pro%20Skater%203%20(Europe).png",
    alt: "Tony Hawk's Pro Skater 3 (box art)",
    credit: "Box art",
  },
};
