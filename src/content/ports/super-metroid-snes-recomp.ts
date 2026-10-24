import type { Port } from "@/lib/ports/schema";

export const superMetroidSnesRecomp: Port = {
  schema: "port",
  id: "super-metroid-snes-recomp",
  title: "SuperMetroidRecomp",
  game: "Super Metroid",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1994,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMetroidRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "Super Metroid is a 1994 action-adventure game developed by Nintendo and Intelligent Systems and published by Nintendo for the Super Nintendo Entertainment System (SNES). It is the third Metroid game, following the Game Boy game Metroid II: Return of Samus (1991). The player controls bounty hunter Samus Aran, who travels to the planet Zebes to retrieve an infant Metroid creature stolen by the Space Pirate leader Ridley.",
  summaryEs: "Super Metroid (también conocido como 'Metroid 3') es un juego de acción y aventuras desarrollado y publicado por Nintendo para la Super Nintendo Entertainment System en 1994. Es la tercera entrega de la serie Metroid, siguiendo los eventos del juego de Game Boy, Metroid II: Return of Samus (1991). Los jugadores controlan a la cazarrecompensas Samus Aran, que viaja al planeta Zebes para recuperar una criatura Metroid infantil robada por el líder de los Piratas Espaciales, Ridley.",
  notes:
    "Static recompilation of Super Metroid (SNES) with the snesrecomp framework: the 65816 code is translated to C and compiled natively.",
  notesEs:
    "Recompilación estática de Super Metroid (SNES) con el framework snesrecomp: el código 65816 se traduce a C y se compila a nativo.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Metroid%20-%20Redux%20(USA).png",
    alt: "Super Metroid (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Metroid%20-%20Redux%20(USA).png",
      alt: "Super Metroid (screenshot)",
      credit: "Libretro",
    },
  ],
};
