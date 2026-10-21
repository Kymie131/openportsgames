import type { Port } from "@/lib/ports/schema";

export const ecstaticaRecompiled: Port = {
  schema: "port",
  id: "ecstatica-recompiled",
  title: "Ecstatica Recompiled",
  game: "Ecstatica",
  developers: ["spacefarergames"],
  publisher: "Psygnosis",
  originalYear: 1994,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/spacefarergames/EcstaticaRecompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b5/Ecstatica_Coverart.png",
    alt: "Ecstatica (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Ecstatica Recompiled (Ecstatica I and II): a 64-bit native modernization of both ellipsoid survival games for Windows 10/11, with full HD support, modern controller support and enhanced music/artwork. Free, non-profit fan project. The README does not state the original platform, so the original system is left as Unknown. Pre-release: 1.0 Staging.",
  notesEs:
    "Ecstatica Recompiled (Ecstatica I y II): modernización nativa de 64 bits de ambos juegos de supervivencia elipsoidales para Windows 10/11, con soporte Full HD, mandos modernos y música/arte mejorados. Proyecto fan gratuito y sin ánimo de lucro. El README no indica la plataforma original, así que el sistema original queda como Unknown. Pre-release: 1.0 Staging.",
};
