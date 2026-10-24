import type { Port } from "@/lib/ports/schema";

export const cncRenegade: Port = {
  schema: "port",
  id: "cnc-renegade",
  title: "Command & Conquer: Renegade (Source)",
  game: "Command & Conquer: Renegade",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/electronicarts/CnC_Renegade"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Command & Conquer: Renegade is a first- and third-person shooter video game developed by Westwood Studios and is part of the Command & Conquer series. It is the only Command & Conquer game that uses the first-person view and was the last installment in the series to be produced under Westwood Studios banner. It was released on February 26, 2002 by EA Games. The game received generally favorable reviews from critics.",
  summaryEs: "Command & Conquer: Renegade es un videojuego de disparos en primera persona para PC, que forma parte de la serie Command & Conquer. Se trata del primer videojuego de la serie en primera persona.",
  notes:
    "Official source release of Command & Conquer: Renegade published by EA. It can be built on Windows and uses the retail game assets. The upstream repository is archived (read-only).",
  notesEs:
    "Publicación oficial del código fuente de Command & Conquer: Renegade por parte de EA. Se puede compilar en Windows y usa los recursos del juego comercial. El repositorio original está archivado (solo lectura).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/49/Cncren-cover.jpg",
    alt: "Command & Conquer: Renegade (box art)",
    credit: "Wikipedia",
  },
};
