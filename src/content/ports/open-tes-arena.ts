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
  originalSystem: "MS-DOS",
  features: ["Cross-platform desktop builds", "Modern renderer and input handling"],
  featuresEs: ["Builds de escritorio multiplataforma", "Renderizador y manejo de entrada modernos"],
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
