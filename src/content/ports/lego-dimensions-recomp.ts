import type { Port } from "@/lib/ports/schema";

export const legoDimensionsRecomp: Port = {
  schema: "port",
  id: "lego-dimensions-recomp",
  title: "LEGO Dimensions Recompiled",
  game: "LEGO Dimensions",
  developers: ["NeverCookFirst"],
  publisher: "Warner Bros. Interactive Entertainment",
  originalYear: 2015,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NeverCookFirst/DimensionsRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Lego Dimensions is a 2015 toys-to-life action-adventure game developed by Traveller's Tales and published by Warner Bros. Interactive Entertainment for the PlayStation 3, PlayStation 4, Xbox 360, Xbox One and Wii U. It is a crossover between Lego and over thirty different franchises, from which levels can be played through a USB toy pad peripheral. The Starter Pack, containing the game, the USB toy pad, three minifigures and one vehicle, was released in September 2015, while additional level packs and characters were released over the following two years.",
  summaryEs: "Lego Dimensions era un videojuego de acción y aventura de la franquicia LEGO, desarrollado por Traveller's Tales y publicado y distribuido por Warner Bros. Interactive Entertainment, para las plataformas PlayStation 4, PlayStation 3, Wii U, Xbox One y Xbox 360. Ya no se encuentra disponible a la venta y sus servidores se encuentran cerrados.",
  notes:
    "Native recompilation of LEGO Dimensions (Xbox 360) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de LEGO Dimensions (Xbox 360) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/ff/Lego_Dimensions_PS4_Box_Cover.jpg",
    alt: "LEGO Dimensions (cover)",
    credit: "Wikipedia",
  },
};
