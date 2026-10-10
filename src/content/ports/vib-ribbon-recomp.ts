import type { Port } from "@/lib/ports/schema";

export const vibRibbonRecomp: Port = {
  schema: "port",
  id: "vib-ribbon-recomp",
  title: "Vib-Ribbon Recompiled",
  game: "Vib-Ribbon",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "recompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/vib-ribbon-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Vib-Ribbon (PS1, Europe SCES-02873) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Vib-Ribbon (PS1, Europe SCES-02873) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vib-Ribbon%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Vib-Ribbon (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Vib-Ribbon%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Vib-Ribbon (screenshot)",
      credit: "Libretro",
    },
  ],
};
