import type { Port } from "@/lib/ports/schema";

export const dkc3Recomp: Port = {
  schema: "port",
  id: "dkc3-recomp",
  title: "DKC3Recomp",
  game: "Donkey Kong Country 3: Dixie Kong's Double Trouble",
  developers: ["elliotttate"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/DKC3Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "Donkey Kong Country 3: Dixie Kong's Double Trouble! is a 1996 platform game developed by Rare and published by Nintendo for the Super Nintendo Entertainment System (SNES). It is the third installment of the Donkey Kong Country series, and serves as a sequel to 1995's Donkey Kong Country 2: Diddy's Kong Quest. It was also re-released for the Game Boy Advance (GBA) in 2005. The game was made available to download on the Wii's Virtual Console service in 2007, as well as for the Wii U's Virtual Console in 2014.",
  summaryEs: "Donkey Kong Country 3: Dixie Kong's Double Trouble! es un videojuego de plataformas de 1996 desarrollado por Rare y publicado por Nintendo para Super Nintendo Entertainment System (SNES). Fue lanzado en noviembre de 1996 en Norteamérica y Japón, y el 13 de diciembre en Europa y Australia. Es la tercera entrega de la serie Donkey Kong Country y sirve como secuela directa de Donkey Kong Country 2: Diddy's Kong Quest. También se relanzó para Game Boy Advance (GBA) en 2005.",
  notes:
    "Static recompilation of Donkey Kong Country 3 (SNES, USA En/Fr) with snesrecomp. It is in bring-up: it covers boot, the launcher, save states and Lakeside Limbo, with verified 16:10, 16:9 and 21:9 widescreen.",
  notesEs:
    "Recompilación estática de Donkey Kong Country 3 (SNES, USA En/Fr) con snesrecomp. Está en fase de puesta en marcha: cubre el arranque, el lanzador, los estados de guardado y Lakeside Limbo, con widescreen de 16:10, 16:9 y 21:9 verificado.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong's%20Double%20Trouble!%20(USA)%20(En%2CFr).png",
    alt: "Donkey Kong Country 3: Dixie Kong's Double Trouble (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Donkey%20Kong%20Country%203%20-%20Dixie%20Kong's%20Double%20Trouble!%20(USA)%20(En,Fr).png",
      alt: "Donkey Kong Country 3: Dixie Kong's Double Trouble (screenshot)",
      credit: "Libretro",
    },
  ],
};
