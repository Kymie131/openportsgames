import type { Port } from "@/lib/ports/schema";

export const tokyoHighwayBattleRecomp: Port = {
  schema: "port",
  id: "tokyo-highway-battle-recomp",
  title: "Tokyo Highway Battle Recompiled",
  game: "Tokyo Highway Battle",
  developers: ["alexbeavs"],
  publisher: "Jaleco",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.1", date: "2026-09-30" },
  sources: ["https://github.com/alexbeavs-ps1-ports/tokyo-highway-battle-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Tokyo Highway Battle is a 1996 racing video game developed by Genki for the PlayStation and Sega Saturn. It was released in Japan as Shutokou Battle: Drift King for the PlayStation, and Shutokō Battle '97 for the Saturn. The game is part of the Shutokou Battle franchise.",
  summaryEs: "Tokyo Highway Battle es un videojuego de carreras desarrollado por Genki y publicado por Jaleco en 1996 para PlayStation y Sega Saturn. Fue lanzado en Japón como Shutokō Battle: Drift King para PlayStation y Shutokō Battle '97 para Sega Saturn. El juego es parte de la franquicia Shutokō Battle.",
  notes:
    "Recompilation of Tokyo Highway Battle (PS1, USA SLUS-00229) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Tokyo Highway Battle (PS1, USA SLUS-00229) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/tokyo-highway-battle-recomp/releases/download/v0.1.1/tokyo-highway-battle-0.1.1-linux-x64.zip",
      size: "23.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/tokyo-highway-battle-recomp/releases/download/v0.1.1/tokyo-highway-battle-0.1.1-macos-arm64.zip",
      size: "21.9 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/alexbeavs-ps1-ports/tokyo-highway-battle-recomp/releases/download/v0.1.1/tokyo-highway-battle-0.1.1-macos-x64.zip",
      size: "22.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/tokyo-highway-battle-recomp/releases/download/v0.1.1/tokyo-highway-battle-0.1.1-windows-x64.zip",
      size: "25.0 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Tokyo%20Highway%20Battle%20(Europe).png",
    alt: "Tokyo Highway Battle (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Tokyo%20Highway%20Battle%20(Europe).png",
      alt: "Tokyo Highway Battle (screenshot)",
      credit: "Libretro",
    },
  ],
};
