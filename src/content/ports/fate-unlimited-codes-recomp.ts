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
  originalSystem: "PlayStation Portable",
  notes:
    "Hybrid native project for Fate/Unlimited Codes that combines a PSP static recompilation of the gameplay with PS2 assets and controls, still in development. It ships no game files and needs your own copy.",
  notesEs:
    "Proyecto nativo híbrido de Fate/Unlimited Codes que combina una recompilación estática de PSP del gameplay con recursos y controles de PS2, todavía en desarrollo. No incluye archivos del juego y necesita tu propia copia.",
};
