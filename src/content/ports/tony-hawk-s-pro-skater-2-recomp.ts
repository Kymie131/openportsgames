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
  originalSystems: ["PlayStation"],
  summary: "Tony Hawk's Pro Skater 2 is a 2000 skateboarding video game developed by Neversoft for PlayStation and Natsume for Game Boy Color. Published by Activision, it is the second installment in the Tony Hawk's series of sports games, and was released for the PlayStation in 2000, with subsequent ports to Windows and Dreamcast alongside a distinct version for Game Boy Color the same year. In 2001, the game was ported to Mac OS, Mac OS X, Nintendo 64, and Xbox, alongside a separate version for Game Boy Advance by Vicarious Visions.",
  summaryEs: "Tony Hawk's Pro Skater 2 es el segundo videojuego de la saga Tony Hawk's y fue desarrollado por Neversoft y distribuido por Activision para PlayStation, Nintendo 64, Windows, Windows Mobile, Mac OS, iOS, Dreamcast, Game Boy Color, Game Boy Advance y Xbox. Este es el primer juego de la franquicia qué fue lanzado para Xbox, no obstante, se tenía planeado en lanzar una versión para PlayStation 2, pero su lanzamiento fue cancelado para adelantarlo con Tony Hawk's Pro Skater 3 en 2001.",
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
