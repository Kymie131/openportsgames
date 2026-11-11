import type { Port } from "@/lib/ports/schema";

export const apocalypseRecomp: Port = {
  schema: "port",
  id: "apocalypse-recomp",
  title: "Apocalypse Recompiled",
  game: "Apocalypse",
  developers: ["alexbeavs"],
  publisher: "Activision",
  originalYear: 1998,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/apocalypse-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Apocalypse is a third-person shooter platform video game released for the PlayStation, developed by Neversoft Entertainment and published by Activision in 1998. It features actor Bruce Willis, who provides the likeness and voice for the main character, Trey Kincaid.",
  summaryEs: "Apocalypse es un videojuego de disparos en 1998.",
  notes:
    "Recompilation of Apocalypse (PS1, Europe SLES-00460) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Apocalypse (PS1, Europe SLES-00460) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/apocalypse-recomp/releases/download/v0.1.1/apocalypse-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/apocalypse-recomp/releases/download/v0.1.1/apocalypse-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/apocalypse-recomp/releases/download/v0.1.1/apocalypse-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/apocalypse-recomp/releases/download/v0.1.1/apocalypse-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Apocalypse%20(Europe).png",
    alt: "Apocalypse (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Apocalypse%20(Europe).png",
      alt: "Apocalypse (screenshot)",
      credit: "Libretro",
    },
  ],
};
