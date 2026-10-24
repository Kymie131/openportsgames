import type { Port } from "@/lib/ports/schema";

export const uqmMegamod: Port = {
  schema: "port",
  id: "uqm-megamod",
  title: "UQM MegaMod (Star Control II)",
  game: "Star Control II",
  developers: ["JHGuitarFreak"],
  publisher: "Accolade",
  originalYear: 1992,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JHGuitarFreak/UQM-MegaMod-Archived"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Star Control II: The Ur-Quan Masters is a 1992 adventure shoot 'em up video game developed by Toys for Bob and originally published by Accolade in 1992 for MS-DOS. The game is a direct sequel to Star Control, and includes exoplanet-abundant star systems, hyperspace travel, extraterrestrial life, and interstellar diplomacy. There are 25 alien races with which communication is possible.",
  summaryEs: "Star Control II es un videojuego de acción y aventura publicado por Accolade en 1992.",
  notes:
    "UQM MegaMod packages The Ur-Quan Masters with extra content and runs it on Android. The repository is archived, so it is no longer updated. The upstream repository is archived (read-only).",
  notesEs:
    "UQM MegaMod empaqueta The Ur-Quan Masters con contenido extra y lo ejecuta en Android. El repositorio está archivado, por lo que ya no se actualiza. El repositorio original está archivado (solo lectura).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Star_Control_II_cover.jpg",
    alt: "Star Control II (box art)",
    credit: "Wikipedia",
  },
};
