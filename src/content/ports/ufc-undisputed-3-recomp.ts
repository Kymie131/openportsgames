import type { Port } from "@/lib/ports/schema";

export const ufcUndisputed3Recomp: Port = {
  schema: "port",
  id: "ufc-undisputed-3-recomp",
  title: "UFC Undisputed 3 Recompiled",
  game: "UFC Undisputed 3",
  developers: ["paulogaab21"],
  publisher: "THQ",
  originalYear: 2012,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Shadowww9858/Ufc3recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "UFC Undisputed 3 is a mixed martial arts video game featuring Ultimate Fighting Championship properties and fighters developed by Yuke's and published by THQ. It was released for PlayStation 3 and Xbox 360. It is a sequel to UFC Undisputed 2010, making it the third and last game to be released under THQ's 2007 agreement with the UFC.",
  summaryEs: "UFC Undisputed 3 es un videojuego de artes marciales mixtas desarrollado por Yuke's para PlayStation 3 y Xbox 360. Se basa en la marca Ultimate Fighting Championship (UFC) y fue lanzado el 14 de febrero de 2012 en Norteamérica y el 17 en Europa. El 5 de junio de 2012, se anunció que THQ había vendido la licencia de UFC a Electronic Arts y cerró el taller que trabajó en la franquicia.",
  notes:
    "Native PC recompilation of UFC Undisputed 3 (Xbox 360) with ReXGlue. The game is not included.",
  notesEs:
    "Recompilación nativa para PC de UFC Undisputed 3 (Xbox 360) con ReXGlue. El juego no se incluye.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d0/UFC_Undisputed_3_cover.png",
    alt: "UFC Undisputed 3 (box art)",
    credit: "Wikipedia",
  },
};
