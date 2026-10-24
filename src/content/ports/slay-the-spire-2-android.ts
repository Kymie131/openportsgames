import type { Port } from "@/lib/ports/schema";

export const slayTheSpire2Android: Port = {
  schema: "port",
  id: "slay-the-spire-2-android",
  title: "Slay the Spire 2 (Android)",
  game: "Slay the Spire 2",
  developers: ["Ekyso"],
  publisher: "Mega Crit",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Ekyso/StS2-Launcher"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Slay the Spire II is a roguelike deck-building game developed and published by Mega Crit. Similar to its 2019 predecessor Slay the Spire, players select a character to traverse multiple levels of the Spire while collecting and playing cards to defeat monsters. Slay the Spire II introduces two new characters in addition to three returning characters, as well as support for four player co-operative play.",
  summaryEs: "Slay the Spire 2 es un videojuego de estrategia en 2025.",
  notes:
    "Unofficial Android launcher for Slay the Spire 2, still in alpha. It needs the original game.",
  notesEs:
    "Lanzador no oficial para Android de Slay the Spire 2, todavía en alfa. Necesita el juego original.",
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/2868840/header.jpg",
    alt: "Slay the Spire 2 (cover)",
    credit: "Steam",
  },
};
