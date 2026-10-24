import type { Port } from "@/lib/ports/schema";

export const kulaWorldRecomp: Port = {
  schema: "port",
  id: "kula-world-recomp",
  title: "Kula World Recompiled",
  game: "Kula World",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/kula-world-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Kula World, released as Roll Away in North America and KulaQuest in Japan, is a puzzle-platform video game developed by Game Design Sweden AB and published by Sony Computer Entertainment for the PlayStation. Sony's subsidiary Psygnosis released the game in North America. The player character, a kula beach ball, collect keys to unlock the level exits, as well as coins and jewels along the way. The game makes use of alternating physics, changing the direction of gravity as the ball moves.",
  summaryEs: "Kula World es un videojuego de puzle de la PlayStation desarrollado por Game Design Sweden AB y distribuido por SCEE.",
  notes:
    "Recompilation of Kula World (PS1, Europe SCES-01000) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Kula World (PS1, Europe SCES-01000) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Kula%20World%20(Europe).png",
    alt: "Kula World (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Kula%20World%20(Europe).png",
      alt: "Kula World (screenshot)",
      credit: "Libretro",
    },
  ],
};
