import type { Port } from "@/lib/ports/schema";

export const cps2Recomp: Port = {
  schema: "port",
  id: "cps2-recomp",
  title: "CPS-2 Recomp",
  game: "CPS-2 arcade collection",
  developers: ["tmcleroy"],
  publisher: "Capcom",
  originalYear: 1993,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  kind: "tool",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.4.0-beta.3", date: "2026-10-19" },
  sources: ["https://github.com/tmcleroy/cps2recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Arcade"],
  cover: {
    src: "https://openportsgames.com/covers/generated/cps-2-arcade-collection.svg",
    alt: "CPS-2 arcade collection (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "CPS-2 Recomp is a launcher of native PC ports for Capcom CPS-1 and CPS-2 arcade games, including Street Fighter Alpha 2. Bring your own ROM sets.",
  notesEs:
    "CPS-2 Recomp es un lanzador de ports nativos para PC de juegos de arcade CPS-1 y CPS-2 de Capcom, como Street Fighter Alpha 2. Aporta tus ROMs.",
};
