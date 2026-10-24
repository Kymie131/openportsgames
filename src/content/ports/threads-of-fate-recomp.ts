import type { Port } from "@/lib/ports/schema";

export const threadsOfFateRecomp: Port = {
  schema: "port",
  id: "threads-of-fate-recomp",
  title: "Threads of Fate Recompiled",
  game: "Threads of Fate",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/threads-of-fate-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Threads of Fate is an action role-playing game developed and published by Square for the PlayStation, released for Japan in 1999 and for North America in 2000. The story is split between two protagonists in search of an ancient relic said to grant any wish; the amnesiac Rue who seeks to revive a dead friend, and the banished princess Mint who dreams of conquering the world. Gameplay focuses on action-based combat while exploring dungeon levels featuring minor platforming elements.",
  summaryEs: "Threads of Fate es un videojuego de acción y aventura publicado por Square en 1999.",
  notes:
    "Recompilation of Threads of Fate (PS1, USA SLUS-01019) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Threads of Fate (PS1, USA SLUS-01019) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Threads%20of%20Fate%20(USA).png",
    alt: "Threads of Fate (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Threads%20of%20Fate%20(USA).png",
      alt: "Threads of Fate (screenshot)",
      credit: "Libretro",
    },
  ],
};
