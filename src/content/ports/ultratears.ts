import type { Port } from "@/lib/ports/schema";

export const ultratears: Port = {
  schema: "port",
  id: "ultratears",
  title: "UltraTears (Tears of the Kingdom)",
  game: "The Legend of Zelda: Tears of the Kingdom",
  developers: ["kuraeow"],
  publisher: "Nintendo",
  originalYear: 2023,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.4.0", date: "2026-11-11" },
  sources: ["https://github.com/kuraeow/ultratears"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch. It expands Breath of the Wild with sky islands, underground depths, Ultrahand construction and new abilities.",
  summaryEs:
    "The Legend of Zelda: Tears of the Kingdom es un videojuego de acción y aventura de 2023 desarrollado y publicado por Nintendo para Nintendo Switch. Amplía Breath of the Wild con islas celestes, profundidades subterráneas, construcción con Ultrahand y nuevas habilidades.",
  notes:
    "Native static recompilation of Tears of the Kingdom 1.4.3 for Windows, Linux and Steam Deck. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación estática nativa de Tears of the Kingdom 1.4.3 para Windows, Linux y Steam Deck. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://openportsgames.com/covers/generated/the-legend-of-zelda-tears-of-the-kingdom.svg",
    alt: "The Legend of Zelda: Tears of the Kingdom (generated cover)",
    credit: "OpenPortsGames",
  },
};
