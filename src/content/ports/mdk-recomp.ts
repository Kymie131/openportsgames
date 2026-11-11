import type { Port } from "@/lib/ports/schema";

export const mdkRecomp: Port = {
  schema: "port",
  id: "mdk-recomp",
  title: "MDK Recompiled",
  game: "MDK",
  developers: ["alexbeavs"],
  publisher: "Interplay",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.4", date: "2026-10-02" },
  sources: ["https://github.com/alexbeavs-ps1-ports/mdk-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "MDK is a 1997 third-person shooter video game developed by Shiny Entertainment for Windows and subsequently ported to Mac OS by Shokwave, and to the PlayStation by Neversoft. The game was published on all systems by Playmates Interactive Entertainment (PIE) in North America, while Shiny handled the European release.",
  summaryEs: "MDK es un videojuego en tercera persona creado por Shiny Entertainment en 1997. Fue lanzado para PC, PlayStation y Macintosh. El juego fue elogiado por la calidad de los gráficos para ese tiempo, y la banda sonora. Tuvo una secuela llamada MDK 2 en el año 2000.",
  notes:
    "Recompilation of MDK (PS1, Europe SLES-00599) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de MDK (PS1, Europe SLES-00599) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/mdk-recomp/releases/download/v0.1.4/mdk-recomp-0.1.4-windows-x64.zip",
      size: "28.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/mdk-recomp/releases/download/v0.1.4/mdk-recomp-0.1.4-linux-x64.zip",
      size: "26.5 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/mdk-recomp/releases/download/v0.1.4/mdk-recomp-0.1.4-macos-x64.zip",
      size: "24.7 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/mdk-recomp/releases/download/v0.1.4/mdk-recomp-0.1.4-macos-arm64.zip",
      size: "24.4 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/MDK%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "MDK (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/MDK%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "MDK (screenshot)",
      credit: "Libretro",
    },
  ],
};
