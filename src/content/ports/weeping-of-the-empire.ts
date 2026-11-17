import type { Port } from "@/lib/ports/schema";

export const weepingOfTheEmpire: Port = {
  schema: "port",
  id: "weeping-of-the-empire",
  title: "Weeping of the Empire (Tears of the Kingdom)",
  game: "The Legend of Zelda: Tears of the Kingdom",
  developers: ["daniel-madrid-07"],
  publisher: "Nintendo",
  originalYear: 2023,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/daniel-madrid-07/weeping-of-the-empire"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "The Legend of Zelda: Tears of the Kingdom is a 2023 action-adventure game developed and published by Nintendo for the Nintendo Switch. It expands Breath of the Wild with sky islands, underground depths, Ultrahand construction and new abilities.",
  summaryEs:
    "The Legend of Zelda: Tears of the Kingdom es un videojuego de acción y aventura de 2023 desarrollado y publicado por Nintendo para Nintendo Switch. Amplía Breath of the Wild con islas celestes, profundidades subterráneas, construcción con Ultrahand y nuevas habilidades.",
  notes:
    "Native Windows recompilation of Tears of the Kingdom 1.0.0 with a Vulkan renderer. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Tears of the Kingdom 1.0.0 con renderizador Vulkan. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://openportsgames.com/covers/generated/the-legend-of-zelda-tears-of-the-kingdom.svg",
    alt: "The Legend of Zelda: Tears of the Kingdom (generated cover)",
    credit: "OpenPortsGames",
  },
};
