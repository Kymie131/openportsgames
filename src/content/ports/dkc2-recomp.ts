import type { Port } from "@/lib/ports/schema";

export const dkc2Recomp: Port = {
  schema: "port",
  id: "dkc2-recomp",
  title: "DKC2Recomp",
  game: "Donkey Kong Country 2: Diddy's Kong Quest",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1995,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/DKC2Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "Donkey Kong Country 2: Diddy's Kong Quest is a 1995 platform game developed by Rare and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released on 21 November 1995 in Japan, 4 December in North America, and 14 December in Europe. It is the second installment of the Donkey Kong Country series and the sequel to Donkey Kong Country (1994). It was re-released for the Game Boy Advance (GBA) in 2004. The game was made available for download on the Virtual Console for the Wii and Wii U in 2007 and 2015, respectively.",
  summaryEs: "Donkey Kong Country 2: Diddy's Kong Quest es un videojuego de plataformas desarrollado por Rare y publicado por Nintendo en noviembre de 1995 en Norteamérica y Japón, y en diciembre en Europa. Es la segunda entrega de la serie Donkey Kong Country y la secuela directa del juego homónimo. La trama se centra en Diddy Kong y su prometida Dixie Kong, que intentan rescatar a Donkey tras ser capturado por King K. Rool. La acción se desarrolla en la Isla Cocodrilo, compuesta por ocho mundos variados con un total de cincuenta y dos niveles.",
  notes:
    "Static recompilation of Donkey Kong Country 2 (SNES) with snesrecomp. The original repository is archived; active development moved to elliotttate/DKC2Recomp.",
  notesEs:
    "Recompilación estática de Donkey Kong Country 2 (SNES) con snesrecomp. El repositorio original está archivado; el desarrollo activo pasó a elliotttate/DKC2Recomp.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%202%20-%20Diddy's%20Kong%20Quest%20(USA)%20(En%2CFr).png",
    alt: "Donkey Kong Country 2: Diddy's Kong Quest (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Donkey%20Kong%20Country%202%20-%20Diddy's%20Kong%20Quest%20(USA)%20(En,Fr).png",
      alt: "Donkey Kong Country 2: Diddy's Kong Quest (screenshot)",
      credit: "Libretro",
    },
  ],
};
