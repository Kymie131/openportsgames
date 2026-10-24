import type { Port } from "@/lib/ports/schema";

export const openTesaArena: Port = {
  schema: "port",
  id: "open-tes-arena",
  title: "OpenTESArena",
  game: "The Elder Scrolls: Arena",
  developers: ["OpenTESArena Team"],
  publisher: "Bethesda Softworks",
  originalYear: 1994,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.18.0", date: "2026-08-13" },
  sources: ["https://github.com/afritz1/OpenTESArena"],
  discord: "https://discord.gg/DgHe2jG",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: ["Cross-platform desktop builds", "Modern renderer and input handling"],
  featuresEs: ["Builds de escritorio multiplataforma", "Renderizador y manejo de entrada modernos"],
  summary: "The Elder Scrolls: Arena is a 1994 action role-playing game developed and published by Bethesda Softworks. The first game in the Elder Scrolls series, it was released for MS-DOS on March 25, 1994. The game follows the player trying to uncover a conspiracy against Emperor Uriel Septim VII.",
  summaryEs: "The Elder Scrolls: Arena es un videojuego de rol desarrollado para PCs que aún lleven el sistema operativo MS-DOS, aunque se puede emular en sistemas más modernos como Microsoft Windows. Es la primera entrega de la serie The Elder Scrolls. El juego fue desarrollado por Bethesda Softworks, y fue lanzado en el año 1994 en Estados Unidos.",
  notes: "Cross-platform engine for The Elder Scrolls: Arena. The original game data is required.",
  notesEs:
    "Motor multiplataforma para The Elder Scrolls: Arena. Se requieren los datos del juego original.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/afritz1/OpenTESArena/main/Preview.PNG",
      alt: "The Elder Scrolls: Arena running on OpenTESArena",
      credit: "OpenTESArena",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/89/Elder_Scrolls_Arena_Cover.jpg",
    alt: "The Elder Scrolls: Arena (box art)",
    credit: "Wikipedia",
  },
};
