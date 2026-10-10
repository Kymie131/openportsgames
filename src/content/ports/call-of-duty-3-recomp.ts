import type { Port } from "@/lib/ports/schema";

export const callOfDuty3Recomp: Port = {
  schema: "port",
  id: "call-of-duty-3-recomp",
  title: "Call of Duty 3 Recompiled",
  game: "Call of Duty 3",
  developers: ["FrankHUN88453"],
  publisher: "Activision",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/FrankHUN88453/CoD3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Call of Duty 3 (Xbox 360) to native Windows. It requires your own copy of the game.",
  notesEs:
    "Recompilación de Call of Duty 3 (Xbox 360) a Windows nativo. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/51/Call_of_Duty_3_Game_Cover.jpg",
    alt: "Call of Duty 3 (box art)",
    credit: "Wikipedia",
  },
};
