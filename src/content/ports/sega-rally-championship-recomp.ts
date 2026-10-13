import type { Port } from "@/lib/ports/schema";

export const segaRallyChampionshipRecomp: Port = {
  schema: "port",
  id: "sega-rally-championship-recomp",
  title: "Sega Rally Championship Recompiled",
  game: "Sega Rally Championship",
  developers: ["xandoxan65"],
  publisher: "Sega",
  originalYear: 1995,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/xandoxan65/segarally95-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Arcade",
  notes:
    "Recompilation of Sega Rally Championship (Model 2 arcade) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación de Sega Rally Championship (arcade Model 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/eb/Sega_Rally_flyer.jpg",
    alt: "Sega Rally Championship (arcade flyer)",
    credit: "Wikipedia",
  },
};
