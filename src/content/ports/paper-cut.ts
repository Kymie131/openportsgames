import type { Port } from "@/lib/ports/schema";

export const paperCut: Port = {
  schema: "port",
  id: "paper-cut",
  title: "Paper Cut (The Thousand-Year Door)",
  game: "Paper Mario: The Thousand-Year Door",
  developers: ["LLCOOLT"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "macos", "linux", "android"],
  status: "beta",
  release: { version: "0.5.1", date: "2026-11-15" },
  sources: ["https://github.com/LLCOOLT/paper-cut"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["GameCube"],
  summary:
    "Paper Mario: The Thousand-Year Door is a 2004 role-playing game developed by Intelligent Systems and published by Nintendo for the GameCube. Mario searches for the Crystal Stars in Rogueport to rescue Princess Peach.",
  summaryEs:
    "Paper Mario: The Thousand-Year Door es un videojuego de rol de 2004 desarrollado por Intelligent Systems y publicado por Nintendo para GameCube. Mario busca las Estrellas de Cristal en Rogueport para rescatar a la Princesa Peach.",
  notes:
    "Native recompilation of The Thousand-Year Door for Windows, macOS, Linux handhelds and Android. Ships no game files: you must supply your own disc.",
  notesEs:
    "Recompilación nativa de The Thousand-Year Door para Windows, macOS, consolas Linux y Android. No incluye archivos del juego: debes aportar tu propio disco.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/18/Paper_Mario_The_Thousand-Year_Door_%28artwork%29.jpg",
    alt: "Paper Mario: The Thousand-Year Door (box art)",
    credit: "Wikipedia",
  },
};
