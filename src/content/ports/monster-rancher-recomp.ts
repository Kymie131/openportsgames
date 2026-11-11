import type { Port } from "@/lib/ports/schema";

export const monsterRancherRecomp: Port = {
  schema: "port",
  id: "monster-rancher-recomp",
  title: "Monster Rancher Recompiled",
  game: "Monster Rancher",
  developers: ["alexbeavs"],
  publisher: "Tecmo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Monster Rancher, known in Japan as Monster Farm , is a Japanese media franchise and series of life simulation role-playing video games created by Tecmo. The series consists of fifteen games across numerous different video game platforms, and an anime adaptation that aired from 1999 to 2000.",
  summaryEs: "Monster Rancher es un videojuego de simulación en 1997.",
  notes:
    "Recompilation of Monster Rancher (PS1, USA SLUS-00568) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Monster Rancher (PS1, USA SLUS-00568) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp/releases/download/v0.1.1/monster-rancher-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp/releases/download/v0.1.1/monster-rancher-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp/releases/download/v0.1.1/monster-rancher-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/monster-rancher-recomp/releases/download/v0.1.1/monster-rancher-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Monster%20Rancher%20(Europe).png",
    alt: "Monster Rancher (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Monster%20Rancher%20(Europe).png",
      alt: "Monster Rancher (screenshot)",
      credit: "Libretro",
    },
  ],
};
