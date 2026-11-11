import type { Port } from "@/lib/ports/schema";

export const medievilRecomp: Port = {
  schema: "port",
  id: "medievil-recomp",
  title: "MediEvil Recompiled",
  game: "MediEvil",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.4", date: "2026-10-17" },
  sources: ["https://github.com/alexbeavs-ps1-ports/medievil-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "MediEvil is a 1998 action-adventure game developed and published by Sony Computer Entertainment for the PlayStation. The game is set in the medieval Kingdom of Gallowmere and centers around the charlatan protagonist, Sir Daniel Fortesque, as he makes an attempt to stop antagonist Zarok's invasion of the kingdom whilst simultaneously redeeming himself.",
  summaryEs: "MediEvil es un videojuego de acción-aventura del género hack and slash desarrollado por SCE Studio Cambridge y publicado por Sony Computer Entertainment para la PlayStation. El juego está ambientado en el reino medieval de Gallowmere y se centra en el protagonista del charlatán, Sir Daniel Fortesque, que intenta detener la invasión del reino por parte del antagonista Zarok mientras se redime a sí mismo.",
  notes:
    "Recompilation of MediEvil (PS1, USA SCUS-94227) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de MediEvil (PS1, USA SCUS-94227) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-recomp/releases/download/v0.1.4/medievil-recomp-0.1.4-windows-x64.zip",
      size: "44.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-recomp/releases/download/v0.1.4/medievil-recomp-0.1.4-linux-x64.zip",
      size: "42.2 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-recomp/releases/download/v0.1.4/medievil-recomp-0.1.4-macos-x64.zip",
      size: "40.1 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/medievil-recomp/releases/download/v0.1.4/medievil-recomp-0.1.4-macos-arm64.zip",
      size: "39.6 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/MediEvil%20(Europe)%20(Beta%2012).png",
    alt: "MediEvil (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/MediEvil%20(Europe)%20(Beta%2012).png",
      alt: "MediEvil (screenshot)",
      credit: "Libretro",
    },
  ],
};
