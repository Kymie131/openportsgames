import type { Port } from "@/lib/ports/schema";

export const fateUnlimitedCodesRecomp: Port = {
  schema: "port",
  id: "fate-unlimited-codes-recomp",
  title: "Fate/Unlimited Codes Recompiled",
  game: "Fate/Unlimited Codes",
  developers: ["elprogramadorloco-arch"],
  publisher: "Capcom",
  originalYear: 2008,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elprogramadorloco-arch/fuc-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation Portable"],
  summary: "Fate/Unlimited Codes is a fighting game developed by Eighting and published by Capcom. It was first released on June 11, 2008 for the Namco System 246 arcade system in Japan, later receiving a port to the PlayStation 2 in December 2008. An enhanced port for the PlayStation Portable would be released on June 18, 2009 in Japan. The game was subsequently localized and released digitally for the PlayStation Store in North America and Europe in September 2009, and later delisted in May 2012.",
  summaryEs: "Fate/Unlimited Codes es un videojuego de lucha publicado por Capcom en 2008.",
  notes:
    "Hybrid native project for Fate/Unlimited Codes that combines a PSP static recompilation of the gameplay with PS2 assets and controls, still in development. It ships no game files and needs your own copy.",
  notesEs:
    "Proyecto nativo híbrido de Fate/Unlimited Codes que combina una recompilación estática de PSP del gameplay con recursos y controles de PS2, todavía en desarrollo. No incluye archivos del juego y necesita tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5d/Fate-unlimited_codes_arcade_flyer.jpg",
    alt: "Fate/Unlimited Codes (box art)",
    credit: "Wikipedia",
  },
};
