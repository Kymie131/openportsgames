import type { Port } from "@/lib/ports/schema";

export const menInBlackTheGameRecomp: Port = {
  schema: "port",
  id: "men-in-black-the-game-recomp",
  title: "Men in Black: The Game Recompiled",
  game: "Men in Black: The Game",
  developers: ["alexbeavs"],
  publisher: "Gremlin Interactive",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/men-in-black-the-game-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Men in Black: The Game is an adventure video game developed by Gigawatt Studios for Microsoft Windows in 1997. Though it is a licensed game based on the 1997 film Men in Black, the plot is unrelated and it is a survival horror game as opposed to being a comedy. It is most likely a homage to the original The Men In Black comic book created by Lowell Cunningham with its dark aesthetics and 2D cinematics that resemble comic book panels. The game was ported to the PlayStation in 1998 by The Collective.",
  summaryEs: "Men in Black: The Game es un videojuego de aventura desarrollado por Gigawatt Studios para Microsoft Windows en 1997. Aunque es un juego con licencia oficial basado en la película Men in Black de 1997, la trama no está relacionada y es un juego de survival horror en lugar de ser una comedia. El juego fue porteado a la PlayStation en 1998 por The Collective.",
  notes:
    "Recompilation of Men in Black: The Game (PS1, Europe SLES-01047) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Men in Black: The Game (PS1, Europe SLES-01047) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Men%20in%20Black%20-%20The%20Game%20(Europe).png",
    alt: "Men in Black: The Game (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Men%20in%20Black%20-%20The%20Game%20(Europe).png",
      alt: "Men in Black: The Game (screenshot)",
      credit: "Libretro",
    },
  ],
};
