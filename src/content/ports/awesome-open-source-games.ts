import type { Port } from "@/lib/ports/schema";

export const awesomeOpenSourceGames: Port = {
  schema: "port",
  id: "awesome-open-source-games",
  title: "Awesome Open Source Games",
  game: "Awesome Open Source Games",
  developers: ["michelpereira"],
  publisher: "michelpereira",
  originalYear: 2020,
  portType: "source-port",
  kind: "tool",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/michelpereira/awesome-open-source-games"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://openportsgames.com/covers/generated/awesome-open-source-games.svg",
    alt: "Awesome Open Source Games (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Curated list of games whose source code is available on GitHub. It is a resource index, not a single port.",
  notesEs:
    "Lista curada de juegos cuyo código fuente está disponible en GitHub. Es un índice de recursos, no un port concreto.",
};
