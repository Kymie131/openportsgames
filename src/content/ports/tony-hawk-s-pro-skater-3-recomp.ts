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
  originalSystems: ["PlayStation"],
  summary: "Tony Hawk's Pro Skater 3 is a 2001 skateboarding video game and the third installment in the Tony Hawk's series. It was published by Activision under the Activision O2 label in 2001 for the PlayStation, PlayStation 2, Game Boy Color and GameCube. In 2002, it was published for the Xbox, Game Boy Advance, Windows, Mac OS, and the Nintendo 64. It was the final official release for the Nintendo 64 and the only game that was released for the system in 2002, the first game released for the PlayStation 2 supporting online play and was a launch title for the GameCube in North America and PAL regions.",
  summaryEs: "Tony Hawk's Pro Skater 3 es un videojuego de skateboarding que corresponde a la tercera entrega en la serie de Tony Hawk's. Fue desarrollado por Neversoft y publicado por Activision en 2001 para Nintendo GameCube, Game Boy Color, PlayStation 2, y PlayStation. En 2002, fue publicado para Nintendo 64, Xbox, Microsoft Windows y Game Boy Advance. Fue el primer juego de la saga lanzado para Nintendo Gamecube PlayStation 2, siendo este último que soportó el juego en línea, y el último juego lanzado para Nintendo 64 en los Estados Unidos.",
  notes:
    "Recompilation of Tony Hawk's Pro Skater 3 (PS1, USA SLUS-01419) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tony Hawk's Pro Skater 3 (PS1, USA SLUS-01419) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tony%20Hawk's%20Pro%20Skater%203%20(Europe).png",
    alt: "Tony Hawk's Pro Skater 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tony%20Hawk's%20Pro%20Skater%203%20(Europe).png",
      alt: "Tony Hawk's Pro Skater 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
