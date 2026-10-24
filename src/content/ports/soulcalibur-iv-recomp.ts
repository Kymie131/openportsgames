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
  originalSystems: ["Xbox 360"],
  summary: "Soulcalibur IV is a 2008 fighting game developed and published by Namco Bandai Games for the PlayStation 3 and Xbox 360. As the fifth main entry in the Soulcalibur series, it marks a significant evolution in gameplay with enhanced graphics and new features compared to its predecessor Soulcalibur III (2005), including the introduction of three guest characters from the Star Wars franchise: Darth Vader, Yoda, and the Apprentice.",
  summaryEs: "Soulcalibur IV Es la sexta entrega de la serie Soul contando al primero que dio inicio a la franquicia, Soul Edge conocido en América como SoulBlade cabe destacar que antes de Soulcalibur IV salió a la venta en 2007 Soulcalibur Legends con exclusividad para Wii pero este no se enfocaba a las luchas sino más al estilo de aventuras.",
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
