import type { Port } from "@/lib/ports/schema";

export const mortalKombat4Recomp: Port = {
  schema: "port",
  id: "mortal-kombat-4-recomp",
  title: "Mortal Kombat 4 Recompiled",
  game: "Mortal Kombat 4",
  developers: ["alexbeavs"],
  publisher: "Midway",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mortal-kombat-4-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mortal Kombat 4 is a 1997 fighting game developed and published by Midway for arcades. It is the fourth main installment in the Mortal Kombat franchise, and a sequel to 1995's Mortal Kombat 3. It is also the first title in the series to use 3D computer graphics, as well as the last in the series to have an arcade release. The game was ported to the PlayStation, Nintendo 64, Microsoft Windows, and Game Boy Color in 1998, followed by an updated version, titled Mortal Kombat Gold, for the Dreamcast in 1999.",
  summaryEs: "Mortal Kombat 4 es el séptimo videojuego de la saga Mortal Kombat, lanzado para Arcade en 1997 también para Nintendo 64, PlayStation, PC y Game Boy Color en 1998 de manos de Midway Games.",
  notes:
    "Recompilation of Mortal Kombat 4 (PS1, USA SLUS-00605) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mortal Kombat 4 (PS1, USA SLUS-00605) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mortal%20Kombat%204%20(Europe).png",
    alt: "Mortal Kombat 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mortal%20Kombat%204%20(Europe).png",
      alt: "Mortal Kombat 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
