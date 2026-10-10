import type { Port } from "@/lib/ports/schema";

export const tenchuStealthAssassinsRecomp: Port = {
  schema: "port",
  id: "tenchu-stealth-assassins-recomp",
  title: "Tenchu: Stealth Assassins Recompiled",
  game: "Tenchu: Stealth Assassins",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/tenchu-stealth-assassins-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Tenchu: Stealth Assassins (PS1, USA SLUS-00706) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tenchu: Stealth Assassins (PS1, USA SLUS-00706) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tenchu%20-%20Stealth%20Assassins%20(Europe)%20(En,Fr,It).png",
    alt: "Tenchu: Stealth Assassins (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tenchu%20-%20Stealth%20Assassins%20(Europe)%20(En,Fr,It).png",
      alt: "Tenchu: Stealth Assassins (screenshot)",
      credit: "Libretro",
    },
  ],
};
