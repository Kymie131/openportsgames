import type { Port } from "@/lib/ports/schema";

export const braveFencerMusashiRecomp: Port = {
  schema: "port",
  id: "brave-fencer-musashi-recomp",
  title: "Brave Fencer Musashi Recompiled",
  game: "Brave Fencer Musashi",
  developers: ["alexbeavs"],
  publisher: "Square",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/brave-fencer-musashi-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Brave Fencer Musashi (PS1, USA SLUS-00726) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Brave Fencer Musashi (PS1, USA SLUS-00726) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Brave%20Fencer%20Musashi%20(USA).png",
    alt: "Brave Fencer Musashi (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Brave%20Fencer%20Musashi%20(USA).png",
      alt: "Brave Fencer Musashi (screenshot)",
      credit: "Libretro",
    },
  ],
};
