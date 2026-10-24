import type { Port } from "@/lib/ports/schema";

export const spiderMan2EnterElectroRecomp: Port = {
  schema: "port",
  id: "spider-man-2-enter-electro-recomp",
  title: "Spider-Man 2: Enter Electro Recompiled",
  game: "Spider-Man 2: Enter Electro",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/spider-man-2-enter-electro-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Spider-Man 2: Enter: Electro is a 2001 action-adventure video game based on the Marvel Comics character Spider-Man. It was developed by Vicarious Visions and published by Activision exclusively for the PlayStation. It is the sequel to Spider-Man (2000) and directly follows the events of the game, as Spider-Man attempts to thwart a criminal conspiracy orchestrated by Electro.",
  summaryEs: "Spider-Man 2: Enter Electro es un videojuego de acción y aventuras de 2001 basado en el personaje Spider-Man de Marvel Comics. Fue desarrollado por Vicarious Visions y publicado por Activision en exclusiva para PlayStation. Es la secuela de Spider-Man (2000) y sigue directamente los acontecimientos del juego, mientras Spider-Man intenta frustrar una conspiración criminal orquestada por Electro.",
  notes:
    "Recompilation of Spider-Man 2: Enter Electro (PS1, USA SLUS-01378) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Spider-Man 2: Enter Electro (PS1, USA SLUS-01378) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Spider-Man%202%20-%20Enter%20-%20Electro%20(Europe).png",
    alt: "Spider-Man 2: Enter Electro (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Spider-Man%202%20-%20Enter%20-%20Electro%20(Europe).png",
      alt: "Spider-Man 2: Enter Electro (screenshot)",
      credit: "Libretro",
    },
  ],
};
