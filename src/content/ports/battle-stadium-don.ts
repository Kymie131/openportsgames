import type { Port } from "@/lib/ports/schema";

export const battleStadiumDon: Port = {
  schema: "port",
  id: "battle-stadium-don",
  title: "Battle Stadium D.O.N (PC)",
  game: "Battle Stadium D.O.N",
  developers: ["dvilelaf"],
  publisher: "Bandai Namco Games",
  originalYear: 2006,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.0", date: "2026-11-02" },
  sources: ["https://github.com/dvilelaf/battlestadium-don"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["PlayStation 2"],
  summary:
    "Battle Stadium D.O.N is a 2006 crossover fighting game developed by Eighting and Q Entertainment and published by Bandai Namco Games. It pits characters from Dragon Ball, One Piece and Naruto against each other in arena battles.",
  summaryEs:
    "Battle Stadium D.O.N es un juego de lucha crossover de 2006 desarrollado por Eighting y Q Entertainment y publicado por Bandai Namco Games. Enfrenta a personajes de Dragon Ball, One Piece y Naruto en combates de arena.",
  notes:
    "PC port of the PlayStation 2 game by static recompilation, with Linux and Windows builds. It requires your own disc; no game material is included.",
  notesEs:
    "Port para PC del juego de PlayStation 2 mediante recompilación estática, con versiones para Linux y Windows. Requiere tu propio disco; no incluye material del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/dvilelaf/battlestadium-don/releases/download/v1.0/don-windows-f537322.zip",
      size: "86.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/dvilelaf/battlestadium-don/releases/download/v1.0/don-linux-5d2b93e.tar.gz",
      size: "118.9 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/dvilelaf/battlestadium-don/releases/download/v1.0/BattleStadiumDON-1.0-x86_64.AppImage",
      size: "107.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9e/Battlestadiumdon.jpg",
    alt: "Battle Stadium D.O.N (box art)",
    credit: "Wikipedia",
  },
};
