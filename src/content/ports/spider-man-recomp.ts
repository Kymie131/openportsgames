import type { Port } from "@/lib/ports/schema";

export const spiderManRecomp: Port = {
  schema: "port",
  id: "spider-man-recomp",
  title: "Spider-Man Recompiled",
  game: "Spider-Man",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/spider-man-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Marvel's Spider-Man is a series of superhero action-adventure video games, media franchise, and shared universe developed by Insomniac Games and published by Sony Interactive Entertainment (SIE) for PlayStation consoles and Windows. Based on characters appearing in Marvel Comics publications, the games are inspired by the long-running comic book lore, while additionally deriving from various adaptations in other media.",
  summaryEs: "Spider-Man puede referirse a:",
  notes:
    "Recompilation of Spider-Man (PS1, USA SLUS-00875) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Spider-Man (PS1, USA SLUS-00875) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Spider-Man%20(Europe).png",
    alt: "Spider-Man (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Spider-Man%20(Europe).png",
      alt: "Spider-Man (screenshot)",
      credit: "Libretro",
    },
  ],
};
