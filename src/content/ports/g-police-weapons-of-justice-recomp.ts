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
  release: { version: "0.1.0", date: "2026-09-14" },
  sources: ["https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "G-Police: Weapons of Justice is a 1999 combat flight simulation video game and sequel to G-Police, developed by Psygnosis for the PlayStation.",
  summaryEs: "G-Police: Weapons of Justice es un videojuego de simulación de vuelo de combate de 1999 y secuela de G-Police, desarrollado por Psygnosis para PlayStation.",
  notes:
    "Recompilation of G-Police: Weapons of Justice (PS1, USA SLUS-00798) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de G-Police: Weapons of Justice (PS1, USA SLUS-00798) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp/releases/download/v0.1.0/gpoliceweaponsofjustice-0.1.0-windows-x64.zip",
      size: "25.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp/releases/download/v0.1.0/gpoliceweaponsofjustice-0.1.0-linux-x64.zip",
      size: "23.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp/releases/download/v0.1.0/gpoliceweaponsofjustice-0.1.0-macos-x64.zip",
      size: "23.2 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/g-police-weapons-of-justice-recomp/releases/download/v0.1.0/gpoliceweaponsofjustice-0.1.0-macos-arm64.zip",
      size: "22.7 MB",
    },
  ],
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
