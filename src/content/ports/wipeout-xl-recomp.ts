import type { Port } from "@/lib/ports/schema";

export const wipeoutXlRecomp: Port = {
  schema: "port",
  id: "wipeout-xl-recomp",
  title: "Wipeout XL Recompiled",
  game: "Wipeout XL",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Wipeout XL is a racing game published by Psygnosis for PlayStation, released in 1996.",
  summaryEs: "Wipeout XL es un videojuego de carreras publicado por Psygnosis para PlayStation, lanzado en 1996.",
  summaryGenerated: true,
  notes:
    "Recompilation of Wipeout XL (PS1, USA SCUS-94351) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Wipeout XL (PS1, USA SCUS-94351) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp/releases/download/v0.1.1/wipeout-xl-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp/releases/download/v0.1.1/wipeout-xl-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp/releases/download/v0.1.1/wipeout-xl-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/wipeout-xl-recomp/releases/download/v0.1.1/wipeout-xl-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Wipeout%20XL%20(Japan,%20Asia).png",
    alt: "Wipeout XL (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Wipeout%20XL%20(Japan,%20Asia).png",
      alt: "Wipeout XL (screenshot)",
      credit: "Libretro",
    },
  ],
};
