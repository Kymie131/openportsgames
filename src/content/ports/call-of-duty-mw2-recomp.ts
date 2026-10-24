import type { Port } from "@/lib/ports/schema";

export const callOfDutyMw2Recomp: Port = {
  schema: "port",
  id: "call-of-duty-mw2-recomp",
  title: "Call of Duty: Modern Warfare 2 Recompiled",
  game: "Call of Duty: Modern Warfare 2",
  developers: ["PaulCombal"],
  publisher: "Activision",
  originalYear: 2009,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/PaulCombal/mw2-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare. It was released worldwide on November 10, 2009, for Windows, PlayStation 3, and Xbox 360. A separate version for the Nintendo DS, titled Modern Warfare: Mobilized, was also released on the same day. A version for OS X was developed by Aspyr and released in May 2014, and the Xbox 360 version was made backward compatible for the Xbox One in 2018.",
  summaryEs: "Call of Duty: Modern Warfare 2 es un videojuego de acción de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Es la sexta entrega de la serie Call of Duty y la secuela directa de Call of Duty 4: Modern Warfare. Fue lanzado en todo el mundo el 10 de noviembre de 2009 para Windows, PlayStation 3 y Xbox 360. Una versión separada para la Nintendo DS, titulada Modern Warfare: Mobilized, también se lanzó el mismo día.",
  notes:
    "Recompilation of Call of Duty: Modern Warfare 2 (Xbox 360) to native Windows and Linux. It requires the game itself.",
  notesEs:
    "Recompilación de Call of Duty: Modern Warfare 2 (Xbox 360) a Windows y Linux nativos. Requiere el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png",
    alt: "Call of Duty: Modern Warfare 2 (box art)",
    credit: "Wikipedia",
  },
};
