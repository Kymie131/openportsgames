import type { Port } from "@/lib/ports/schema";

export const openTyrian: Port = {
  schema: "port",
  id: "opentyrian",
  title: "OpenTyrian",
  game: "Tyrian",
  developers: ["Jason Emery"],
  publisher: "Epic MegaGames",
  originalYear: 1995,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "2.1.20260913", date: "2026-09-14" },
  sources: ["https://github.com/opentyrian/opentyrian"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: ["Cross-platform SDL2 builds", "Supports the full game data set"],
  featuresEs: ["Builds SDL2 multiplataforma", "Compatible con todo el conjunto de datos del juego"],
  notes:
    "Open source port of the vertical scrolling shooter Tyrian. The game data is not included and must be supplied by the player.",
  notesEs:
    "Port de código abierto del shooter de desplazamiento vertical Tyrian. Los datos del juego no se incluyen y debe aportarlos el jugador.",
};
