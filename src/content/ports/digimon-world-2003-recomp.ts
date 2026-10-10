import type { Port } from "@/lib/ports/schema";

export const digimonWorld2003Recomp: Port = {
  schema: "port",
  id: "digimon-world-2003-recomp",
  title: "Digimon World 2003 Recompiled",
  game: "Digimon World 2003",
  developers: ["alexbeavs"],
  publisher: "Bandai",
  originalYear: 2002,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/digimon-world-2003-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Digimon World 2003 (PS1, Europe SLES-03936) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Digimon World 2003 (PS1, Europe SLES-03936) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Digimon%20World%202003%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Digimon World 2003 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Digimon%20World%202003%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Digimon World 2003 (screenshot)",
      credit: "Libretro",
    },
  ],
};
