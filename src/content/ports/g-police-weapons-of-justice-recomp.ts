import type { Port } from "@/lib/ports/schema";

export const gPoliceWeaponsOfJusticeRecomp: Port = {
  schema: "port",
  id: "g-police-weapons-of-justice-recomp",
  title: "G-Police: Weapons of Justice Recompiled",
  game: "G-Police: Weapons of Justice",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1999,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of G-Police: Weapons of Justice (PS1, USA SLUS-00798) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de G-Police: Weapons of Justice (PS1, USA SLUS-00798) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/G-Police%20-%20Weapons%20of%20Justice%20(Europe).png",
    alt: "G-Police: Weapons of Justice (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/G-Police%20-%20Weapons%20of%20Justice%20(Europe).png",
      alt: "G-Police: Weapons of Justice (screenshot)",
      credit: "Libretro",
    },
  ],
};
