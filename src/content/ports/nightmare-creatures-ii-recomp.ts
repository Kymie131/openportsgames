import type { Port } from "@/lib/ports/schema";

export const nightmareCreaturesIiRecomp: Port = {
  schema: "port",
  id: "nightmare-creatures-ii-recomp",
  title: "Nightmare Creatures II Recompiled",
  game: "Nightmare Creatures II",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.0", date: "2026-09-14" },
  sources: ["https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Nightmare Creatures II is a survival horror video game developed by Kalisto Entertainment and published by Konami for the PlayStation and Dreamcast. It is the sequel to Nightmare Creatures.",
  summaryEs: "Nightmare Creatures II es un videojuego de terror, desarrollado por Kalisto Entertainment y publicado por Konami para las consolas PlayStation y Dreamcast. Es la secuela de Nightmare Creatures.",
  notes:
    "Recompilation of Nightmare Creatures II (PS1, USA SLUS-01112) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Nightmare Creatures II (PS1, USA SLUS-01112) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp/releases/download/v0.1.0/nightmarecreaturesii-0.1.0-windows-x64.zip",
      size: "25.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp/releases/download/v0.1.0/nightmarecreaturesii-0.1.0-linux-x64.zip",
      size: "23.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp/releases/download/v0.1.0/nightmarecreaturesii-0.1.0-macos-x64.zip",
      size: "23.2 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/nightmare-creatures-ii-recomp/releases/download/v0.1.0/nightmarecreaturesii-0.1.0-macos-arm64.zip",
      size: "22.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Nightmare%20Creatures%20II%20(Europe)%20(En,Fr,De).png",
    alt: "Nightmare Creatures II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Nightmare%20Creatures%20II%20(Europe)%20(En,Fr,De).png",
      alt: "Nightmare Creatures II (screenshot)",
      credit: "Libretro",
    },
  ],
};
