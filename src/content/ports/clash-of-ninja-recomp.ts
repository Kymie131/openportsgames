import type { Port } from "@/lib/ports/schema";

export const clashOfNinjaRecomp: Port = {
  schema: "port",
  id: "clash-of-ninja-recomp",
  title: "Naruto: Clash of Ninja Recomp",
  game: "Naruto: Clash of Ninja",
  developers: ["mapleleafjack"],
  publisher: "D3 Publisher",
  originalYear: 2003,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.7.2", date: "2026-11-03" },
  sources: ["https://github.com/mapleleafjack/ClashOfNinja-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["GameCube"],
  summary:
    "Naruto: Clash of Ninja is a 2003 3D cel-shaded fighting game developed by Eighting and published by D3 Publisher. It adapts the early Naruto story arc into one-on-one arena battles.",
  summaryEs:
    "Naruto: Clash of Ninja es un juego de lucha 3D con sombreado cel de 2003 desarrollado por Eighting y publicado por D3 Publisher. Adapta el primer arco de Naruto en combates de arena uno contra uno.",
  notes:
    "Recompilation of the GameCube game with Windows, Linux and macOS launchers. It requires your own copy of the game.",
  notesEs:
    "Recompilación del juego de GameCube con lanzadores para Windows, Linux y macOS. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/mapleleafjack/ClashOfNinja-recomp/releases/download/v1.7.2/NarutoLauncher-macOS-arm64-v1.7.2.zip",
      size: "17.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mapleleafjack/ClashOfNinja-recomp/releases/download/v1.7.2/NarutoLauncher-Windows-x64-v1.7.2.zip",
      size: "3.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/mapleleafjack/ClashOfNinja-recomp/releases/download/v1.7.2/NarutoLauncher-Linux-x64-v1.7.2.tar.xz",
      size: "2.2 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Naruto%20-%20Clash%20of%20Ninja%20(USA).png",
    alt: "Naruto: Clash of Ninja (box art)",
    credit: "libretro",
  },
};
