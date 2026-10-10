import type { Port } from "@/lib/ports/schema";

export const oddworldAbeSOddyseeRecomp: Port = {
  schema: "port",
  id: "oddworld-abe-s-oddysee-recomp",
  title: "Oddworld: Abe's Oddysee Recompiled",
  game: "Oddworld: Abe's Oddysee",
  developers: ["alexbeavs"],
  publisher: "GT Interactive",
  originalYear: 1997,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/oddworld-abe-s-oddysee-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Oddworld: Abe's Oddysee (PS1, USA SLUS-00190) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Oddworld: Abe's Oddysee (PS1, USA SLUS-00190) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Oddworld%20-%20Abe's%20Oddysee%20(Europe).png",
    alt: "Oddworld: Abe's Oddysee (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Oddworld%20-%20Abe's%20Oddysee%20(Europe).png",
      alt: "Oddworld: Abe's Oddysee (screenshot)",
      credit: "Libretro",
    },
  ],
};
