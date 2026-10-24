import type { Port } from "@/lib/ports/schema";

export const bombermanPartyEditionRecomp: Port = {
  schema: "port",
  id: "bomberman-party-edition-recomp",
  title: "Bomberman Party Edition Recompiled",
  game: "Bomberman Party Edition",
  developers: ["PortsDR"],
  publisher: "Hudson Soft",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/BombermanPartyEditionRecomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Bomberman Party Edition, known in Japan and Europe as simply Bomberman, is a PlayStation version of the 1983 game Bomberman. In addition to vintage graphics for single player mode, an option for enhanced graphics is added. The game was released to the PlayStation Network as a PSone Classic on May 28, 2008, in Japan and December 10, 2009, in North America.",
  summaryEs: "Bomberman Party Edition, conocido simplemente como Bomberman en Japón y Europa, es una versión para PlayStation del juego Bomberman de 1983. Además de ofrecer gráficos clásicos en el modo de un jugador, añade la opción de gráficos mejorados. El juego fue lanzado en PlayStation Network como un PSone Classic el 28 de mayo de 2008 en Japón y el 10 de diciembre de 2009 en Norteamérica.",
  notes: "PortsDR lists this recompilation without a public repository. Own the game to play it.",
  notesEs:
    "PortsDR lista esta recompilación sin repositorio público. Necesitas el juego para jugarla.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Bomberman%20-%20Party%20Edition%20(USA).png",
    alt: "Bomberman Party Edition (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Bomberman%20-%20Party%20Edition%20(USA).png",
      alt: "Bomberman Party Edition (screenshot)",
      credit: "Libretro",
    },
  ],
};
