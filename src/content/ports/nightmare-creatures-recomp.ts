import type { Port } from "@/lib/ports/schema";

export const nightmareCreaturesRecomp: Port = {
  schema: "port",
  id: "nightmare-creatures-recomp",
  title: "Nightmare Creatures Recompiled",
  game: "Nightmare Creatures",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/nightmare-creatures-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Nightmare Creatures is a 1997 survival horror video game developed by Kalisto Entertainment for PlayStation, Windows, and Nintendo 64. A sequel, Nightmare Creatures II, was released three years later. A mobile phone version of Nightmare Creatures was developed and published by Gameloft in 2003. A second sequel, Nightmare Creatures III: Angel of Darkness, was cancelled in 2004.",
  summaryEs: "Nightmare Creatures es un videojuego de terror lanzado para PlayStation y Windows en 1997 y para Nintendo 64 en 1998. Fue desarrollado por Kalisto Entertainment y distribuido por Activision. El juego relata las aventuras de los dos protagonistas en diferentes periodos del tiempo que luchan contra el alquimista Adán y la Hermandad de Hécate, quienes están tratando de crear una raza de superhombres para que los sigan en sus planes. Por desgracia, en vez de superhombres, han creado una horda de monstruos para que los ayuden en su plan de conquistar el mundo.",
  notes:
    "Recompilation of Nightmare Creatures (PS1, USA SLUS-00582) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Nightmare Creatures (PS1, USA SLUS-00582) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Nightmare%20Creatures%20(Europe).png",
    alt: "Nightmare Creatures (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Nightmare%20Creatures%20(Europe).png",
      alt: "Nightmare Creatures (screenshot)",
      credit: "Libretro",
    },
  ],
};
