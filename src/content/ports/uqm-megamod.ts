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
  originalSystem: "MS-DOS",
  notes:
    "UQM MegaMod packages The Ur-Quan Masters with extra content and runs it on Android. The repository is archived, so it is no longer updated.",
  notesEs:
    "UQM MegaMod empaqueta The Ur-Quan Masters con contenido extra y lo ejecuta en Android. El repositorio está archivado, por lo que ya no se actualiza.",
};
