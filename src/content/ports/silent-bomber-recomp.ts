import type { Port } from "@/lib/ports/schema";

export const silentBomberRecomp: Port = {
  schema: "port",
  id: "silent-bomber-recomp",
  title: "Silent Bomber Recompiled",
  game: "Silent Bomber",
  developers: ["alexbeavs"],
  publisher: "Bandai",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/silent-bomber-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Silent Bomber is a 1999 action video game developed by CyberConnect and published by Bandai for the PlayStation. Silent Bomber is based on the classic top down shoot 'em up genre but with a twist: Instead of shooting the enemy, the player blows them up using bombs. It was the second and last game to be developed by CyberConnect, after Tail Concerto, before they rebranded as CyberConnect2 in 2001. In 2006, it was released for the PlayStation Network in Japan.",
  summaryEs: "Silent Bomber es un videojuego de acción y aventura en 1999.",
  notes:
    "Recompilation of Silent Bomber (PS1, Europe SLES-02792) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Silent Bomber (PS1, Europe SLES-02792) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/silent-bomber-recomp/releases/download/v0.1.1/silent-bomber-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/alexbeavs-ps1-ports/silent-bomber-recomp/releases/download/v0.1.1/silent-bomber-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/alexbeavs-ps1-ports/silent-bomber-recomp/releases/download/v0.1.1/silent-bomber-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/silent-bomber-recomp/releases/download/v0.1.1/silent-bomber-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Silent%20Bomber%20(Europe).png",
    alt: "Silent Bomber (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Silent%20Bomber%20(Europe).png",
      alt: "Silent Bomber (screenshot)",
      credit: "Libretro",
    },
  ],
};
