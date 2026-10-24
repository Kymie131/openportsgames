import type { Port } from "@/lib/ports/schema";

export const metalSlugXRecomp: Port = {
  schema: "port",
  id: "metal-slug-x-recomp",
  title: "Metal Slug X Recompiled",
  game: "Metal Slug X",
  developers: ["alexbeavs"],
  publisher: "SNK",
  originalYear: 2001,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/metal-slug-x-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Metal Slug 2 is a 1998 run and gun video game developed and published by SNK for the Neo Geo arcade and home platforms. It is the second installment in the Metal Slug series and the first to not be developed by Nazca Corporation, who developed the 1996 game Metal Slug, as they were acquired and absorbed into SNK. The original version of the game had extensive slowdown and performance issues, eventually leading SNK to release a modified version in 1999, titled Metal Slug X: Super Vehicle-001 (メタルスラッグX).",
  summaryEs: "Metal Slug X es un videojuego que forma parte de la saga Metal Slug. Fue estrenado para la consola Neo-Geo el 27 de mayo de 1999, y para PlayStation el 25 de enero de 2001. También forma parte del Metal Slug Anthology para la Wii, PlayStation 2 y PlayStation Portable. Metal Slug X es un spin-off de la versión Metal Slug 2 con nuevas características y remasterizado, logrando un éxito mayor.",
  notes:
    "Recompilation of Metal Slug X (PS1, USA SLUS-01212) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Metal Slug X (PS1, USA SLUS-01212) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Metal%20Slug%20X%20(Europe).png",
    alt: "Metal Slug X (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Metal%20Slug%20X%20(Europe).png",
      alt: "Metal Slug X (screenshot)",
      credit: "Libretro",
    },
  ],
};
