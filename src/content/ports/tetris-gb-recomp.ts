import type { Port } from "@/lib/ports/schema";

export const tetrisGbRecomp: Port = {
  schema: "port",
  id: "tetris-gb-recomp",
  title: "Tetris (Game Boy) Recompiled",
  game: "Tetris",
  developers: ["PortsDR"],
  publisher: "Nintendo",
  originalYear: 1989,
  portType: "recompilation",
  genre: "puzzle",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "Game Boy",
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Tetris%20(Japan)%20(En).png",
    alt: "Tetris (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Snaps/Tetris%20(Japan)%20(En).png",
      alt: "Tetris (screenshot)",
      credit: "Libretro",
    },
  ],
};
