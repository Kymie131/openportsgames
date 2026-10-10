import type { Port } from "@/lib/ports/schema";

export const suikodenIiRecomp: Port = {
  schema: "port",
  id: "suikoden-ii-recomp",
  title: "Suikoden II Recompiled",
  game: "Suikoden II",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Suikoden II (PS1, USA SLUS-00958) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Suikoden II (PS1, USA SLUS-00958) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Suikoden%20II%20(Europe).png",
    alt: "Suikoden II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Suikoden%20II%20(Europe).png",
      alt: "Suikoden II (screenshot)",
      credit: "Libretro",
    },
  ],
};
