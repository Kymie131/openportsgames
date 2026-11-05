import type { Port } from "@/lib/ports/schema";

export const opene2140: Port = {
  schema: "port",
  id: "opene2140",
  title: "OpenE2140",
  game: "Earth 2140",
  developers: ["OpenE2140"],
  publisher: "TopWare Interactive",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenE2140/OpenE2140"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS", "Windows"],
  summary:
    "Earth 2140 is a real-time strategy game developed by Reality Pump and published by TopWare Interactive in 1997. It depicts a future war between two human factions over the last remaining resources.",
  summaryEs:
    "Earth 2140 es un juego de estrategia en tiempo real desarrollado por Reality Pump y publicado por TopWare Interactive en 1997. Narra una guerra futura entre dos facciones humanas por los últimos recursos disponibles.",
  cover: {
    src: "https://openportsgames.com/covers/generated/opene2140.svg",
    alt: "Earth 2140 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "OpenE2140 is a remake of Earth 2140 built on OpenRA. It requires the original game assets.",
  notesEs:
    "OpenE2140 es un remake de Earth 2140 construido sobre OpenRA. Requiere los recursos originales del juego.",
};
