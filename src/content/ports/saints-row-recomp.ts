import type { Port } from "@/lib/ports/schema";

export const saintsRowRecomp: Port = {
  schema: "port",
  id: "saints-row-recomp",
  title: "Saints Row Recompiled",
  game: "Saints Row",
  developers: ["whompay"],
  publisher: "THQ",
  originalYear: 2006,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/whompay/SaintsReborn"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Saints Row is a 2006 action-adventure game developed by Volition and published by THQ exclusively for the Xbox 360. It was released in North America on August 29, 2006, followed by an Australian release two days later and a European release on September 1, 2006. Set within the fictional city of Stilwater, based on Detroit, the single-player story follows a player-created character who joins the 3rd Street Saints gang after they save his life, and helps them rise to prominence by undermining enemy criminal syndicates, while slowly building up his own reputation within the gang.",
  summaryEs: "Saints Row es un videojuego de acción y aventura desarrollado por la empresa Volition y publicado por THQ para la plataforma Xbox 360. Se lanzó el 29 de agosto de 2006 en América del Norte, dos días más tarde en Australia y el 1 de septiembre de ese mismo año en Europa y su versión móvil.",
  notes: "A ReXGlue-based static recompilation of Saints Row (Xbox 360). Requires your own copy.",
  notesEs:
    "Recompilación estática de Saints Row (Xbox 360) basada en ReXGlue. Requiere tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/59/Saints_Row_Box_Art.jpg",
    alt: "Saints Row (cover)",
    credit: "Wikipedia",
  },
};
