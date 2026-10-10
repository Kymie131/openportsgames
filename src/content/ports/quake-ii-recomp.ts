import type { Port } from "@/lib/ports/schema";

export const quakeIiRecomp: Port = {
  schema: "port",
  id: "quake-ii-recomp",
  title: "Quake II Recompiled",
  game: "Quake II",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/quake-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Quake II (PS1, USA SLUS-00757) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Quake II (PS1, USA SLUS-00757) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Quake%20II%20(Europe).png",
    alt: "Quake II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Quake%20II%20(Europe).png",
      alt: "Quake II (screenshot)",
      credit: "Libretro",
    },
  ],
};
