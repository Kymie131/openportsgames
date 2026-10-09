import type { Port } from "@/lib/ports/schema";

export const etLegacy: Port = {
  schema: "port",
  id: "etlegacy",
  title: "ET Legacy",
  game: "Wolfenstein: Enemy Territory",
  developers: ["ET Legacy Team"],
  publisher: "Activision",
  originalYear: 2003,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/etlegacy/etlegacy"],
  discord: "https://discord.gg/UBAZFys",
  website: "https://www.etlegacy.com",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: [
    "Continuation of the open source Enemy Territory code",
    "Modern engine improvements and fixes",
  ],
  featuresEs: [
    "Continuación del código abierto de Enemy Territory",
    "Mejoras y arreglos modernos del motor",
  ],
  notes:
    "Community continuation of the open source Wolfenstein: Enemy Territory codebase. No tagged releases are published.",
  notesEs:
    "Continuación comunitaria del código abierto de Wolfenstein: Enemy Territory. No se publican releases etiquetadas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Wolfenstein_Enemy_Territory_logo.png",
    alt: "Wolfenstein: Enemy Territory (box art)",
    credit: "Wikipedia",
  },
};
