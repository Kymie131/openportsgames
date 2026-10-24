import type { Port } from "@/lib/ports/schema";

export const suikodenRecomp: Port = {
  schema: "port",
  id: "suikoden-recomp",
  title: "Suikoden Recompiled",
  game: "Suikoden",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1995,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/suikoden-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Suikoden is a role-playing video game published by Konami. It is the first installment of the Suikoden series. Developed by Konami Computer Entertainment Tokyo, it was released initially in 1995 for the PlayStation in Japan. A North American release followed one year later, and a mainland European release came the following April. The game was also released for Windows and Sega Saturn in 1998, but only in Japan.",
  summaryEs: "Suikoden es un juego de rol publicado por Konami. Desarrollado por Konami Computer Entertainment Tokio, constituye la primera entrega de la serie de Suikoden y fue inicialmente publicado en diciembre de 1995 para PlayStation en Japón. El lanzamiento en Norteamérica tuvo lugar en diciembre de 1996, mientras que en Europa se publicó en marzo del 97. El juego también fue lanzado en 1998 y sólo en Japón para la Sega Saturn y para Windows. El 22 de diciembre de 2008, Suikoden apareció en PlayStation Store norteamericana para su uso en las consolas PlayStation 3 y PSP.",
  notes:
    "Recompilation of Suikoden (PS1, USA SLUS-00292) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Suikoden (PS1, USA SLUS-00292) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Suikoden%20(Europe).png",
    alt: "Suikoden (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Suikoden%20(Europe).png",
      alt: "Suikoden (screenshot)",
      credit: "Libretro",
    },
  ],
};
