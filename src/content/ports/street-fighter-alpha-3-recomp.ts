import type { Port } from "@/lib/ports/schema";

export const streetFighterAlpha3Recomp: Port = {
  schema: "port",
  id: "street-fighter-alpha-3-recomp",
  title: "Street Fighter Alpha 3 Recompiled",
  game: "Street Fighter Alpha 3",
  developers: ["TechnicallyComputers"],
  publisher: "Capcom",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TechnicallyComputers/Street-Fighter-Alpha-3-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Static recompilation of Street Fighter Alpha 3 (PlayStation) built with the PSXRecomp toolkit. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Street Fighter Alpha 3 (PlayStation) construida con el kit PSXRecomp. Requiere tu propia copia del juego.",
};
