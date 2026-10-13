import type { Port } from "@/lib/ports/schema";

export const soulcaliburIvRecomp: Port = {
  schema: "port",
  id: "soulcalibur-iv-recomp",
  title: "Soulcalibur IV Recompiled",
  game: "Soulcalibur IV",
  developers: ["FluffyQuack"],
  publisher: "Namco Bandai Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/FluffyQuack/rexglue-SoulCaliburIV"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Soulcalibur IV (Xbox 360) using the ReXGlue SDK, for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Soulcalibur IV (Xbox 360) con el SDK ReXGlue, para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6c/Soulcalibur_IV_cover.png",
    alt: "Soulcalibur IV (cover)",
    credit: "Wikipedia",
  },
};
