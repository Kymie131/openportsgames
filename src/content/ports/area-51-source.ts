import type { Port } from "@/lib/ports/schema";

export const area51Source: Port = {
  schema: "port",
  id: "area-51-source",
  title: "Area 51 (Source Restoration)",
  game: "Area 51",
  developers: ["ProjectDreamland"],
  publisher: "Midway Games",
  originalYear: 2005,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ProjectDreamland/area51"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  wip: true,
  originalSystems: ["Windows"],
  summary: "Area 51 is a 2005 first-person shooter video game developed by Midway Studios Austin and published by Midway for the PlayStation 2, Xbox, and Windows. A GameCube version was also in development, but was canceled. It is a loose remake of the 1995 arcade game of the same name, and was followed in 2007 by the loosely related BlackSite: Area 51. The player controls Ethan Cole, a HAZMAT operative sent to the Area 51 base to assist in the cleanup of a mutagenic virus.",
  summaryEs: "Area 51 es un videojuego de disparos en primera persona desarrollado por Midway Games y lanzado en octubre de 2005, para Microsoft Windows y para las videoconsolas PlayStation 2 y Xbox, También se planeó para la versión de Nintendo Gamecube pero finalmente fue cancelada.",
  notes:
    "Preservation project working to make the leaked Area 51 (2005) PC source buildable on modern systems. Note: it uses the leaked source, is not yet playable, and needs the retail game data.",
  notesEs:
    "Proyecto de preservación que busca hacer compilable en sistemas modernos la fuente filtrada de Area 51 (2005) para PC. Aviso: usa la fuente filtrada, todavía no es jugable y necesita los datos del juego comercial.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/Area_51_cover_art.jpg",
    alt: "Area 51 (box art)",
    credit: "Wikipedia",
  },
};
