import type { Port } from "@/lib/ports/schema";

export const Triplea: Port = {
  schema: "port",
  id: "triplea",
  title: "Triplea",
  game: "triplea",
  developers: ["triplea-game"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/triplea-game/triplea"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "TripleA is a free and open-source turn based strategy game based on the Axis & Allies board game.",
  summaryEs: "triplea es un videojuego de estrategia en 2001.",
  downloads: [
    {
      label: "game-headed",
      url: "https://github.com/triplea-game/triplea/releases/download/2026-11.16.15914/game-headed.zip",
      size: "41.6 MB",
    },
    {
      label: "game-headless",
      url: "https://github.com/triplea-game/triplea/releases/download/2026-11.16.15914/game-headless.zip",
      size: "30.9 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/triplea-game/triplea/releases/download/2026-11.16.15914/TripleA_2026-11.16.15914_macos.dmg",
      size: "95.1 MB",
    },
    {
      label: "Windows EXE",
      url: "https://github.com/triplea-game/triplea/releases/download/2026-11.16.15914/TripleA_2026-11.16.15914_windows-64bit.exe",
      size: "86.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Ta-icon_menu.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    alt: "triplea (box art)",
    credit: "Wikipedia",
  },
  notes:
    "TripleA is a turn based strategy game and board game engine, similar to Axis & Allies or Risk.",
  notesEs:
    "TripleA es un juego de estrategia por turnos y motor de juegos de mesa, similar a Axis & Allies o Risk.",
};
