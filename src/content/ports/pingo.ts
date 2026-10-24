import type { Port } from "@/lib/ports/schema";

export const pingo: Port = {
  schema: "port",
  id: "pingo",
  title: "Pingo",
  game: "Pingo",
  developers: ["Grzybojad"],
  publisher: "Grzybojad",
  originalYear: 2019,
  portType: "reimplementation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "open",
  category: "homebrew",
  platforms: ["psvita"],
  status: "stable",
  release: { version: "2.1", date: "2019-09-03" },
  sources: ["https://github.com/Grzybojad/Pingo"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Pingo is an AI desktop pet that chats, roasts, remembers, and helps with tasks. Connect local models, official cloud; customize personality, voice, and look; let it observe your screen, keep memory and diary notes, use Skills, knowledge bases, and MCP, and play games with you.",
  summaryEs: "Pingo es un videojuego de puzles publicado por jianbinggaming.",
  notes:
    "Pingo is a tile-painting puzzle game for PS Vita: fill the board with colours by swapping tiles. It is a free homebrew release with no original game.",
  notesEs:
    "Pingo es un puzzle de pintar baldosas para PS Vita: llena el tablero de colores intercambiando fichas. Es un homebrew gratuito y no necesita juego original.",
};
