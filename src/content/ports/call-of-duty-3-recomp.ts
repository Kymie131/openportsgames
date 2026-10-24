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
  originalSystems: ["Xbox 360"],
  summary: "Call of Duty 3 is a 2006 first-person shooter game developed by Treyarch and published by Activision. It is the third major installment in the Call of Duty series. It was released for PlayStation 2, Xbox, Xbox 360, PlayStation 3 and Wii. It was a launch title for the PlayStation 3 and Wii in North America, Europe and Australia. It is also the only major installment to not release on PC.",
  summaryEs: "Call of Duty 3 es la tercera entrega de la serie de videojuegos Call of Duty. El título fue publicado al mercado tanto en las consolas de séptima generación como en Xbox y PlayStation 2. Anteriormente, se tuvo planeado lanzar una versión para Nintendo Gamecube, pero fue cancelada.",
  notes:
    "Recompilation of Call of Duty 3 (Xbox 360) to native Windows. It requires your own game files.",
  notesEs:
    "Recompilación de Call of Duty 3 (Xbox 360) a Windows nativo. Requiere tus propios archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/51/Call_of_Duty_3_Game_Cover.jpg",
    alt: "Call of Duty 3 (box art)",
    credit: "Wikipedia",
  },
};
