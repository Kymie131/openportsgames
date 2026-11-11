import type { Port } from "@/lib/ports/schema";

export const suikodenIiRecomp: Port = {
  schema: "port",
  id: "suikoden-ii-recomp",
  title: "Suikoden II Recompiled",
  game: "Suikoden II",
  developers: ["alexbeavs"],
  publisher: "Konami",
  originalYear: 1998,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.1.0", date: "2026-09-14" },
  sources: ["https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Suikoden II is a role-playing video game developed and published by Konami for the PlayStation video game console and the second installment of the Suikoden video game series. It was released on December 17, 1998, in Japan; on September 29, 1999, in North America; and on July 28, 2000, in Europe. The game features a vast array of characters, with over 100 recruitable characters, of which over 40 are usable in combat.",
  summaryEs: "Suikoden II es un videojuego de rol desarrollado y publicado por Konami para la videoconsola PlayStation que es la segunda entrega de la serie de videojuegos Suikoden. Fue lanzado a finales de 1998 en Japón, en 1999 en Norteamérica y en el año 2000 en Europa. También se lanzó para Microsoft Windows en 2003 solo en China.",
  notes:
    "Recompilation of Suikoden II (PS1, USA SLUS-00958) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Suikoden II (PS1, USA SLUS-00958) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp/releases/download/v0.1.0/suikodenii-0.1.0-windows-x64.zip",
      size: "25.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp/releases/download/v0.1.0/suikodenii-0.1.0-linux-x64.zip",
      size: "23.8 MB",
    },
    {
      label: "macOS x64",
      url: "https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp/releases/download/v0.1.0/suikodenii-0.1.0-macos-x64.zip",
      size: "23.2 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/alexbeavs-ps1-ports/suikoden-ii-recomp/releases/download/v0.1.0/suikodenii-0.1.0-macos-arm64.zip",
      size: "22.7 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Suikoden%20II%20(Europe).png",
    alt: "Suikoden II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Suikoden%20II%20(Europe).png",
      alt: "Suikoden II (screenshot)",
      credit: "Libretro",
    },
  ],
};
