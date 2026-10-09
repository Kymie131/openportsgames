import type { Port } from "@/lib/ports/schema";

export const aceCombat6Recomp: Port = {
  schema: "port",
  id: "ace-combat-6-recomp",
  title: "Ace Combat 6 Recompiled",
  game: "Ace Combat 6: Fires of Liberation",
  developers: ["sal063"],
  publisher: "Bandai Namco",
  originalYear: 2007,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sal063/AC6_recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Ace Combat 6: Fires of Liberation (Xbox 360) with ReXGlue, with 60 FPS and resolution scaling. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Ace Combat 6: Fires of Liberation (Xbox 360) con ReXGlue, con 60 FPS y escalado de resolución. Requiere tu propia copia del juego.",
};
