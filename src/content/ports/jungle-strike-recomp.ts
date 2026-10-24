import type { Port } from "@/lib/ports/schema";

export const jungleStrikeRecomp: Port = {
  schema: "port",
  id: "jungle-strike-recomp",
  title: "Jungle Strike Recompiled",
  game: "Jungle Strike",
  developers: ["PortsDR"],
  publisher: "Electronic Arts",
  originalYear: 1993,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Junior-Jones/Jungle-Strike-SNES-Static-Recomp"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  summary: "Jungle Strike is a video game developed and published by Electronic Arts in 1993 for the Sega Genesis. The game was later released for the Super NES and an enhanced version for MS-DOS. A 1994 Amiga version was developed by Ocean Software, the Super NES and MS-DOS versions developed by Gremlin Interactive, and portable console versions by Black Pearl Software. It is the direct sequel to Desert Strike and is the second installment in the Strike series. The game is a helicopter-based shoot 'em up, mixing action and strategy. The plot concerns two villains intent on destroying Washington, D.C.",
  summaryEs: "Jungle Strike es un videojuego de acción y aventura publicado por Electronic Arts en 1993.",
  notes: "Tracked by PortsDR. No public repo is linked yet, and you supply the game files.",
  notesEs: "Seguido por PortsDR. Todavía no hay repo público, y tú aportas los archivos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Jungle%20Strike%20(Europe).png",
    alt: "Jungle Strike (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Jungle%20Strike%20(Europe).png",
      alt: "Jungle Strike (screenshot)",
      credit: "Libretro",
    },
  ],
};
