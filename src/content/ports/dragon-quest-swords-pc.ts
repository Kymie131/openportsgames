import type { Port } from "@/lib/ports/schema";

export const dragonQuestSwordsPc: Port = {
  schema: "port",
  id: "dragon-quest-swords-pc",
  title: "Dragon Quest Swords (PC)",
  game: "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors",
  developers: ["vs-sr-dev"],
  publisher: "Square Enix",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vs-sr-dev/pc-dragonquestswords"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary:
    "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors is a 2007 action role-playing game developed by Genius Sonority and published by Square Enix for the Wii. It uses the Wii Remote as a sword for on-rails first-person combat.",
  summaryEs:
    "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors es un videojuego de rol de acción de 2007 desarrollado por Genius Sonority y publicado por Square Enix para Wii. Usa el mando de Wii como espada en combates en primera persona sobre raíles.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Dragon%20Quest%20Swords%20-%20The%20Masked%20Queen%20and%20the%20Tower%20of%20Mirrors%20(USA).png",
    alt: "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors (box art)",
    credit: "libretro",
  },
  notes: "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors (Square Enix, 2007) running on Windows through static recompilation. You need your own copy of the game.",
  notesEs: "Dragon Quest Swords: The Masked Queen and the Tower of Mirrors (Square Enix, 2007) en Windows mediante recompilación estática. Necesitas tu propia copia del juego.",
};
