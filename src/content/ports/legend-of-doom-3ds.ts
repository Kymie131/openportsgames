import type { Port } from "@/lib/ports/schema";

export const legendOfDoom3ds: Port = {
  schema: "port",
  id: "legend-of-doom-3ds",
  title: "Legend of Doom (3DS)",
  game: "Legend of Doom",
  developers: ["EstebanPdN"],
  publisher: "id Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/legend-of-doom-3ds"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary: "Legend of Doom is a shooter game published by id Software for MS-DOS, released in 1993.",
  summaryEs: "Legend of Doom es un videojuego de disparos publicado por id Software para MS-DOS, lanzado en 1993.",
  summaryGenerated: true,
  notes:
    "Port of the Legend of Doom total conversion (a Doom mod) to New Nintendo 3DS, based on GZDoom 4.7.1.",
  notesEs:
    "Port de la conversión total Legend of Doom (un mod de Doom) a New Nintendo 3DS, basado en GZDoom 4.7.1.",
  cover: {
    src: "https://raw.githubusercontent.com/EstebanPdN/legend-of-doom-3ds/refs/heads/main/platform/3ds/assets/splash.png",
    alt: "Legend of Doom (cover)",
    credit: "SteamGridDB",
  },
};
