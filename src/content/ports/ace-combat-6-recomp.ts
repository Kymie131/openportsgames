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
  originalSystems: ["Xbox 360"],
  summary: "Ace Combat 6: Fires of Liberation is a 2007 arcade-style combat flight simulation video game developed by Project Aces and published by Namco Bandai Games exclusively for the Xbox 360. It is the seventh entry in the Ace Combat franchise and the first mainline installment to not see a release on a PlayStation platform. Set in 2015 in the series' fictional setting of Strangereal, the game's story follows \"Talisman\", a fighter pilot who helps liberate his country Emmeria from a surprise invasion by its neighbor, Estovakia.",
  summaryEs: "Ace Combat 6: Fires of Liberation es la sexta entrega de la serie Ace Combat, desarrollada por Project Aces y publicada por Namco Bandai Games, exclusivamente para Xbox 360.",
  notes:
    "Static recompilation of Ace Combat 6: Fires of Liberation (Xbox 360) with ReXGlue, with 60 FPS and resolution scaling. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Ace Combat 6: Fires of Liberation (Xbox 360) con ReXGlue, con 60 FPS y escalado de resolución. Requiere una copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Ace_Combat_6_Fires_of_Liberation_Game_Cover.jpg",
    alt: "Ace Combat 6: Fires of Liberation (box art)",
    credit: "Wikipedia",
  },
};
