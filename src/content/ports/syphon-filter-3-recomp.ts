import type { Port } from "@/lib/ports/schema";

export const syphonFilter3Recomp: Port = {
  schema: "port",
  id: "syphon-filter-3-recomp",
  title: "Syphon Filter 3 Recompiled",
  game: "Syphon Filter 3",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/syphon-filter-3-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Syphon Filter 3 (PS1, USA SCUS-94640) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Syphon Filter 3 (PS1, USA SCUS-94640) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Syphon%20Filter%203%20(Europe).png",
    alt: "Syphon Filter 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Syphon%20Filter%203%20(Europe).png",
      alt: "Syphon Filter 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
