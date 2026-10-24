import type { Port } from "@/lib/ports/schema";

export const tonyHawkSProSkaterRecomp: Port = {
  schema: "port",
  id: "tony-hawk-s-pro-skater-recomp",
  title: "Tony Hawk's Pro Skater Recompiled",
  game: "Tony Hawk's Pro Skater",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tony-hawk-s-pro-skater-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tony Hawk's Pro Skater, released as Tony Hawk's Skateboarding in the United Kingdom, Australia, New Zealand, and parts of Europe, is a 1999 skateboarding video game developed by Neversoft and published by Activision. It is the first installment in the Tony Hawk's series. It was released for the PlayStation on September 29, 1999 and was later ported to the Nintendo 64, Game Boy Color, Dreamcast, and N-Gage.",
  summaryEs: "Tony Hawk's Pro Skater, distribuido como Tony Hawk's Skateboarding en el Reino Unido, Australia, Nueva Zelanda y partes de Europa, es un videojuego de skateboarding desarrollado por Neversoft y publicado por Activision. Su lanzamiento original tuvo lugar en la consola PlayStation el 29 de septiembre de 1999, aunque su éxito comercial propició adaptaciones posteriores para Nintendo 64, Game Boy Color, Dreamcast e incluso la plataforma portátil N-Gage.",
  notes:
    "Recompilation of Tony Hawk's Pro Skater (PS1, USA SLUS-00860) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tony Hawk's Pro Skater (PS1, USA SLUS-00860) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tony%20Hawk's%20Pro%20Skater%20(Japan).png",
    alt: "Tony Hawk's Pro Skater (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tony%20Hawk's%20Pro%20Skater%20(Japan).png",
      alt: "Tony Hawk's Pro Skater (screenshot)",
      credit: "Libretro",
    },
  ],
};
