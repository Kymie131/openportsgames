import type { Port } from "@/lib/ports/schema";

export const concreteJunglePc: Port = {
  schema: "port",
  id: "concrete-jungle-pc",
  title: "Predator: Concrete Jungle (PC)",
  game: "Predator: Concrete Jungle",
  developers: ["Adolini1715"],
  publisher: "Vivendi Universal Games",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1", date: "2026-11-02" },
  sources: ["https://github.com/Adolini1715/Concrete-Jungle-PC"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox"],
  summary:
    "Predator: Concrete Jungle is a 2005 action game developed by Eurocom and published by Vivendi Universal Games. A Predator hunts across a futuristic city after a mission goes wrong on Earth.",
  summaryEs:
    "Predator: Concrete Jungle es un juego de acción de 2005 desarrollado por Eurocom y publicado por Vivendi Universal Games. Un Predator caza en una ciudad futurista tras una misión que sale mal en la Tierra.",
  notes:
    "Native PC port of the Xbox game by static recompilation. Build it from your own disc with Install.bat; no game data is included.",
  notesEs:
    "Port nativo para PC del juego de Xbox mediante recompilación estática. Compílalo desde tu propio disco con Install.bat; no incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Predator_concrete_jungle_PS2.jpg",
    alt: "Predator: Concrete Jungle (box art)",
    credit: "Wikipedia",
  },
};
