import type { Port } from "@/lib/ports/schema";

export const azureDreamsRecomp: Port = {
  schema: "port",
  id: "azure-dreams-recomp",
  title: "Azure Dreams Recompiled",
  game: "Azure Dreams",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/azure-dreams-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Azure Dreams is a dungeon crawler role-playing video game developed by Konami Computer Entertainment Tokyo and published by Konami for the PlayStation. A Game Boy Color game with the same name was developed by Konami Computer Entertainment Nagoya and released two years later. A spiritual sequel, Tao's Adventure: Curse of the Demon Seal, was released on the Nintendo DS in 2005.",
  summaryEs: "Azure Dreams, lanzado en Japón como Other Life: Azure Dreams es un videojuego para PlayStation distribuido por Konami que fue lanzado en el año 1997. Más tarde, una versión para Game Boy fue presentada. En 2005 salió una semi-secuela, Tao´s adventure: Curse of the Demon Seal, para la Nintendo DS.",
  notes:
    "Recompilation of Azure Dreams (PS1, USA SLUS-00614) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Azure Dreams (PS1, USA SLUS-00614) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Azure%20Dreams%20(Europe)%20(En,Fr,De).png",
    alt: "Azure Dreams (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Azure%20Dreams%20(Europe)%20(En,Fr,De).png",
      alt: "Azure Dreams (screenshot)",
      credit: "Libretro",
    },
  ],
};
