import type { Port } from "@/lib/ports/schema";

export const condemned2Recomp: Port = {
  schema: "port",
  id: "condemned-2-recomp",
  title: "Condemned 2 Recompiled",
  game: "Condemned 2: Bloodshot",
  developers: ["psxrestore"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/psxrestore/Condemned2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Condemned 2: Bloodshot, is a 2008 first-person action and survival horror video game for PlayStation 3 and Xbox 360. Developed by Monolith Productions and published by Sega, it was released for both systems in North America and Australia in March 2008, and in Europe the following month. It is a sequel to the 2005 game Condemned: Criminal Origins.",
  summaryEs: "Condemned 2: Bloodshot es un videojuego de terror desarrollado por Monolith Productions y publicado por Sega para Xbox 360 y PlayStation 3. Es la secuela del videojuego Condemned: Criminal Origins publicado en 2005. Fue lanzado el 11 de marzo de 2008 en Norteamérica y el 4 de abril de ese mismo año en Europa.",
  notes:
    "Static recompilation of Condemned 2: Bloodshot (Xbox 360) with ReXGlue, with mouse look and graphics settings. Playable start to finish, still with rough edges.",
  notesEs:
    "Recompilación estática de Condemned 2: Bloodshot (Xbox 360) con ReXGlue, con ratón y ajustes gráficos. Jugable de principio a fin, todavía con bordes por pulir.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/42/Condemned_2_Bloodshot.jpg",
    alt: "Condemned 2: Bloodshot (box art)",
    credit: "Wikipedia",
  },
};
