import type { Port } from "@/lib/ports/schema";

export const medievilIiRecomp: Port = {
  schema: "port",
  id: "medievil-ii-recomp",
  title: "MediEvil II Recompiled",
  game: "MediEvil II",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.2.4-alpha", date: "2026-10-20" },
  sources: ["https://github.com/alexbeavs-ps1-ports/medievil-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "MediEvil II is a action-adventure game published by Sony Computer Entertainment for PlayStation, released in 2000.",
  summaryEs: "MediEvil II es un videojuego de acci�n y aventura publicado por Sony Computer Entertainment para PlayStation, lanzado en 2000.",
  summaryGenerated: true,
  notes:
    "Recompilation of MediEvil II (PS1, USA SCUS-94564) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de MediEvil II (PS1, USA SCUS-94564) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-ii-recomp/releases/download/v0.2.4-alpha/MediEvilIIRecomp-v0.2.4-alpha-linux-x86_64.AppImage",
      size: "37.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-ii-recomp/releases/download/v0.2.4-alpha/MediEvilIIRecomp-v0.2.4-alpha-windows-x64.zip",
      size: "31.4 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/MediEvil%20II%20(USA).png",
    alt: "MediEvil II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/MediEvil%20II%20(USA).png",
      alt: "MediEvil II (screenshot)",
      credit: "Libretro",
    },
  ],
};
