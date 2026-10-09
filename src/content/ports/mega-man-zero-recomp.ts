import type { Port } from "@/lib/ports/schema";

export const megaManZeroRecomp: Port = {
  schema: "port",
  id: "mega-man-zero-recomp",
  title: "Mega Man Zero Recompiled",
  game: "Mega Man Zero",
  developers: ["mstan"],
  publisher: "Capcom",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/MegaManZeroRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Mega Man Zero (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Mega Man Zero (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
