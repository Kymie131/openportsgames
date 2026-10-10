import type { Port } from "@/lib/ports/schema";

export const colonyWarsRedSunRecomp: Port = {
  schema: "port",
  id: "colony-wars-red-sun-recomp",
  title: "Colony Wars: Red Sun Recompiled",
  game: "Colony Wars: Red Sun",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 2000,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/colony-wars-red-sun-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Colony Wars: Red Sun (PS1, USA SLUS-00866) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Colony Wars: Red Sun (PS1, USA SLUS-00866) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Colony%20Wars%20-%20Red%20Sun%20(Europe).png",
    alt: "Colony Wars: Red Sun (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Colony%20Wars%20-%20Red%20Sun%20(Europe).png",
      alt: "Colony Wars: Red Sun (screenshot)",
      credit: "Libretro",
    },
  ],
};
