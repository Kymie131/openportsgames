import type { Port } from "@/lib/ports/schema";

export const tailConcertoRecomp: Port = {
  schema: "port",
  id: "tail-concerto-recomp",
  title: "Tail Concerto Recompiled",
  game: "Tail Concerto",
  developers: ["alexbeavs"],
  publisher: "Atlus",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tail-concerto-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tail Concerto is an action-adventure platform video game developed by CyberConnect and published by Bandai for the PlayStation. It is the first game to be developed by CyberConnect, as well as the first installment in the Little Tail Bronx series, which takes place in a steampunk fantasy world of floating islands populated by anthropomorphic dogs and cats. The game revolves around a teenaged canine police officer named Waffle Ryebread and his encounters with the Black Cats Gang, a group of sky pirates who aim to steal magic crystals.",
  summaryEs: "Tail Concerto es un videojuego de acción y aventura en 1998.",
  notes:
    "Recompilation of Tail Concerto (PS1, USA SLUS-00660) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tail Concerto (PS1, USA SLUS-00660) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tail%20Concerto%20(Japan).png",
    alt: "Tail Concerto (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tail%20Concerto%20(Japan).png",
      alt: "Tail Concerto (screenshot)",
      credit: "Libretro",
    },
  ],
};
