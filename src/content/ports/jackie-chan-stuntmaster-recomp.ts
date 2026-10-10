import type { Port } from "@/lib/ports/schema";

export const jackieChanStuntmasterRecomp: Port = {
  schema: "port",
  id: "jackie-chan-stuntmaster-recomp",
  title: "Jackie Chan Stuntmaster Recompiled",
  game: "Jackie Chan Stuntmaster",
  developers: ["alexbeavs"],
  publisher: "Midway",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/jackie-chan-stuntmaster-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Jackie Chan Stuntmaster (PS1, USA SLUS-00684) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Jackie Chan Stuntmaster (PS1, USA SLUS-00684) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Jackie%20Chan%20Stuntmaster%20(Europe).png",
    alt: "Jackie Chan Stuntmaster (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Jackie%20Chan%20Stuntmaster%20(Europe).png",
      alt: "Jackie Chan Stuntmaster (screenshot)",
      credit: "Libretro",
    },
  ],
};
