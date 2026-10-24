import type { Port } from "@/lib/ports/schema";

export const marioParty4Recomp: Port = {
  schema: "port",
  id: "mario-party-4-recomp",
  title: "Mario Party 4 Recompiled",
  game: "Mario Party 4",
  developers: ["mariopartyrd"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mariopartyrd/marioparty4"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Mario Party 4 is a 2002 party video game developed by Hudson Soft and published by Nintendo for the GameCube. It is the fourth installment in the Mario Party series and the first one to be released for GameCube. Like the previous games in the series, it features eight playable characters from the Mario franchise—Mario, Luigi, Princess Peach, Yoshi, Wario, Donkey Kong, Princess Daisy, and Waluigi—competing in a board game, with the objective of each of the six game boards being to earn the most Stars.",
  summaryEs: "Mario Party 4 es la cuarta parte de la saga Mario Party, desarrollada por Hudson y distribuida por Nintendo y es el primer videojuego de la saga para el Nintendo GameCube. Su lanzamiento en Norteamérica fue el 21 de octubre de 2002.",
  notes:
    "Static recompilation of Mario Party 4 (GameCube) with ReXGlue. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Mario Party 4 (GameCube) con ReXGlue. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Mario%20Party%204%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%202).png",
    alt: "Mario Party 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Mario%20Party%204%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%202).png",
      alt: "Mario Party 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
