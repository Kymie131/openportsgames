import type { Port } from "@/lib/ports/schema";

export const tonyHawkSProSkater4Recomp: Port = {
  schema: "port",
  id: "tony-hawk-s-pro-skater-4-recomp",
  title: "Tony Hawk's Pro Skater 4 Recompiled",
  game: "Tony Hawk's Pro Skater 4",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 2002,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tony-hawk-s-pro-skater-4-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tony Hawk's Pro Skater 4 is a 2002 skateboarding game developed by Neversoft and published by Activision under their Activision O2 label. The game was ported by different developers to various systems. It is the fourth installment in the Tony Hawk's series. The game was released in 2002 for the GameCube, PlayStation, PlayStation 2, Xbox, and Game Boy Advance. In 2003, it was released for Windows and Mac OS X by developer Beenox and publisher Aspyr. In 2004, a Tapwave Zodiac version was released.",
  summaryEs: "Tony Hawk's Pro Skater 4, también conocido como THPS4, es la cuarta entrega de la saga de videojuegos Tony Hawk's. Fue desarrollado por Neversoft y distribuido por Activision, fue lanzado en 2002 para PlayStation, Xbox, GameCube, PlayStation 2, Game Boy Advance y en 2003 para teléfonos móviles, Mac OS X, Microsoft Windows y en 2004 para Zodiac. Este es el último juego de la saga Tony Hawk's en ser lanzado para PlayStation 1.",
  notes:
    "Recompilation of Tony Hawk's Pro Skater 4 (PS1, USA SLUS-01485) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tony Hawk's Pro Skater 4 (PS1, USA SLUS-01485) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tony%20Hawk's%20Pro%20Skater%204%20(Europe).png",
    alt: "Tony Hawk's Pro Skater 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tony%20Hawk's%20Pro%20Skater%204%20(Europe).png",
      alt: "Tony Hawk's Pro Skater 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
