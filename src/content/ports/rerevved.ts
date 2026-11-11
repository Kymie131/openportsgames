import type { Port } from "@/lib/ports/schema";

export const rerevved: Port = {
  schema: "port",
  id: "rerevved",
  title: "ReRevved (Civilization Revolution)",
  game: "Sid Meier's Civilization Revolution",
  developers: ["ReRevvedRecomp"],
  publisher: "2K Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.7.1", date: "2026-11-10" },
  sources: ["https://github.com/ReRevvedRecomp/rerevved"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Sid Meier's Civilization Revolution is a 2008 turn-based strategy game developed by Firaxis Games and published by 2K Games. It condenses the Civilization formula into shorter matches with a console-friendly interface.",
  summaryEs:
    "Sid Meier's Civilization Revolution es un juego de estrategia por turnos de 2008 desarrollado por Firaxis Games y publicado por 2K Games. Condensa la fórmula Civilization en partidas más cortas con una interfaz pensada para consola.",
  notes:
    "Static recompilation of the Xbox 360 version with Windows, Linux and macOS builds. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de la versión de Xbox 360 con versiones para Windows, Linux y macOS. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/ReRevvedRecomp/rerevved/releases/download/v0.7.1/rerevved-v0.7.1-windows-x64.zip",
      size: "169 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/ReRevvedRecomp/rerevved/releases/download/v0.7.1/rerevved-v0.7.1-linux-x64.tar.gz",
      size: "195.6 MB",
    },
    {
      label: "macOS (Apple Silicon)",
      url: "https://github.com/ReRevvedRecomp/rerevved/releases/download/v0.7.1/rerevved-v0.7.1-macos-arm64.tar.gz",
      size: "170.3 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/32/Civilization_Revolution_Game_Cover.png",
    alt: "Sid Meier's Civilization Revolution (box art)",
    credit: "Wikipedia",
  },
};
