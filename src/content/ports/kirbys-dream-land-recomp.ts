import type { Port } from "@/lib/ports/schema";

export const kirbysDreamLandRecomp: Port = {
  schema: "port",
  id: "kirbys-dream-land-recomp",
  title: "Kirby's Dream Land Recompiled",
  game: "Kirby's Dream Land",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1992,
  portType: "recompilation",
  genre: "platformer",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/Kirby-Dream-Land-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy"],
  summary: "Kirby's Dream Land is a 1992 platform game developed by HAL Laboratory and published by Nintendo for the Game Boy. It is the first game in the Kirby series and marks the debut of Kirby. It introduced many conventions that would appear in later games in the series. The game follows Kirby as he goes through five levels to retrieve the Sparkling Stars and food of Dream Land from King Dedede.",
  summaryEs: "Kirby's Dream Land, es un videojuego de la videoconsola portátil Game Boy, desarrollado por HAL Laboratory. Fue el primer juego de la serie de Kirby. Primero fue lanzado en Japón el 27 de abril de 1992, en Estados Unidos y Canadá el 1 de agosto de 1992, en México el 6 de septiembre de 1992 y en Europa fue lanzado el 3 de agosto de 1992.",
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Kirby's%20Dream%20Land%20(USA,%20Europe).png",
    alt: "Kirby's Dream Land (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Snaps/Kirby's%20Dream%20Land%20(USA,%20Europe).png",
      alt: "Kirby's Dream Land (screenshot)",
      credit: "Libretro",
    },
  ],
};
