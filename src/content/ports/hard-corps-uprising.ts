import type { Port } from "@/lib/ports/schema";

export const HardCorpsUprising: Port = {
  schema: "port",
  id: "hard-corps-uprising",
  title: "Hard Corps: Uprising",
  game: "Hard Corps: Uprising",
  developers: ["saulob"],
  publisher: "Konami",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/saulob/hard-corps-uprising-recompiled"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/Hard_Corps_Uprising_%28cover_art%29.png",
    alt: "Hard Corps: Uprising (cover)",
    credit: "Wikipedia",
  },
  summary: "Hard Corps: Uprising is a run and gun game developed by Arc System Works and published by Konami for the Xbox 360 and the PlayStation 3. The game was released digitally on Xbox Live Arcade on February 16, 2011 and on the PlayStation Network in March 2011. In Hard Corps: Uprising, the player assumes the role of an elite soldier simply called Bahamut, along with other main characters. Konami has added three additional player characters via downloadable content.",
  summaryEs: "Hard Corps: Uprising es un videojuego de tipo Matamarcianos en 2D desarrollado por la compañía Arc System Works y publicado por Konami. Es una precuela de Contra: Hard Corps.Es el primer juego de la saga en no llevar el nombre Contra, Kenji Yamamoto, el productor, ha dicho que la intención es hacer que Hard Corps sea una nueva línea de la Franquicia. El jugador tendrá el papel del Coronel Bahamut, junto con otros personajes principales. Konami está buscando la adición de Personajes adicionales a través de contenido de descarga o DLC.",
  notes:
    "Hard Corps: Uprising native PC port via static recompilation, the Xbox 360 XBLA Contra spin-off, with TRG launcher.",
  notesEs:
    "Port para PC nativo de Hard Corps: Uprising mediante recompilación estática, el spin-off de Contra de Xbox 360 XBLA, con lanzador TRG.",
};
