import type { Port } from "@/lib/ports/schema";

export const mortalKombatTrilogyRecomp: Port = {
  schema: "port",
  id: "mortal-kombat-trilogy-recomp",
  title: "Mortal Kombat Trilogy Recompiled",
  game: "Mortal Kombat Trilogy",
  developers: ["alexbeavs"],
  publisher: "Midway",
  originalYear: 1996,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/mortal-kombat-trilogy-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Mortal Kombat Trilogy is a 1996 fighting game released by Midway as the second and final update to Mortal Kombat 3 for the PlayStation, Nintendo 64, Sega Saturn and PCs. Further versions were also released for the Game.com and R-Zone. It features a similar basic gameplay system and the same story as Ultimate Mortal Kombat 3, but adds characters and stages restored from Mortal Kombat and Mortal Kombat II. New additions to the game included the \"Aggressor\" bar and the Brutality mechanic. The game was met with mixed to positive reviews upon release.",
  summaryEs: "Mortal Kombat Trilogy (MKT) es el quinto videojuego de la serie de videojuegos de lucha Mortal Kombat, la segunda actualización de la tercera entrega, publicado por Midway Games en 1996 inicialmente para Nintendo 64, y, tras negociaciones, fue publicado también para PlayStation, Sega Saturn y PC.",
  notes:
    "Recompilation of Mortal Kombat Trilogy (PS1, USA SLUS-00330) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Mortal Kombat Trilogy (PS1, USA SLUS-00330) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Mortal%20Kombat%20Trilogy%20(Europe).png",
    alt: "Mortal Kombat Trilogy (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Mortal%20Kombat%20Trilogy%20(Europe).png",
      alt: "Mortal Kombat Trilogy (screenshot)",
      credit: "Libretro",
    },
  ],
};
