import type { Port } from "@/lib/ports/schema";

export const Speedbreaker: Port = {
  schema: "port",
  id: "speedbreaker",
  title: "SpeedBreaker",
  game: "SpeedBreaker",
  developers: ["SpeedBreakerProject"],
  publisher: "Unknown",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SpeedBreakerProject/speedbreaker"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "SpeedBreaker is a racing game for Xbox 360, released in 2005.",
  summaryEs: "SpeedBreaker es un videojuego de carreras para Xbox 360, lanzado en 2005.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/speedbreaker.svg",
    alt: "SpeedBreaker (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Unofficial static recompilation of the Xbox 360 version of Need for Speed: Most Wanted (2005): a native port for Steam Deck, Steam Machine, Steam Frame, Linux and Mac (iPhone/iPad: sideload the experimental IPA or build it yourself). Bring your own disc: no game files included. Not affiliated with EA or Valve.",
  notesEs:
    "Recompilación estática no oficial de la versión de Xbox 360 de Need for Speed: Most Wanted (2005): port nativo para Steam Deck, Linux y Mac. Aporta tu propio disco: no incluye archivos del juego.",
};
