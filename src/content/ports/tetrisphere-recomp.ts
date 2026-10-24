import type { Port } from "@/lib/ports/schema";

export const tetrisphereRecomp: Port = {
  schema: "port",
  id: "tetrisphere-recomp",
  title: "Tetrisphere Recompiled",
  game: "Tetrisphere",
  developers: ["djultra64"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/djultra64/Blocksphere"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Tetrisphere is a puzzle video game developed by H2O Entertainment and published by Nintendo for the Nintendo 64. It was released in North America on August 11, 1997, and in PAL regions in February 1998. The game, originally titled Phear, was initially intended for release on the Atari Jaguar in early 1995 but was reworked into a Tetris game for the N64 after Nintendo, a licensee for The Tetris Company, obtained the publishing rights.",
  summaryEs: "Tetrisphere es un videojuego de puzles publicado por Nintendo en 1997.",
  notes:
    "Static recompilation of Tetrisphere (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Tetrisphere (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Tetrisphere%20(Europe).png",
    alt: "Tetrisphere (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Tetrisphere%20(Europe).png",
      alt: "Tetrisphere (screenshot)",
      credit: "Libretro",
    },
  ],
};
