import type { Port } from "@/lib/ports/schema";

export const repoEvR: Port = {
  schema: "port",
  id: "repo-ev-r",
  title: "R.E.P.O. (Android)",
  game: "R.E.P.O.",
  developers: ["Zhes-20"],
  publisher: "semiwork",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Zhes-20/R.E.P.O.E.V.R"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "R.E.P.O. is an online cooperative survival horror video game developed and published by Swedish game studio Semiwork for Windows. It was released in early access on 26 February 2025 on Steam. It is developed in the Unity game engine.",
  summaryEs: "R.E.P.O. es un videojuego cooperativo de survival horror desarrollado por Semiwork para PC. Fue lanzado en Steam como acceso anticipado el 28 de febrero de 2025. En su año de estreno, fue uno de los 5 videojuegos nuevos más vendidos en la plataforma.",
  notes:
    "Unofficial Android and iOS port of R.E.P.O. with touch and smartphone-VR modes, and crossplay with Steam through EVRMod. It needs the original PC game files.",
  notesEs:
    "Port no oficial de R.E.P.O. para Android e iOS, con modos táctil y de RV para móvil, y crossplay con Steam mediante EVRMod. Necesita los archivos del juego original de PC.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/R.E.P.O._cover.jpg",
    alt: "R.E.P.O. (box art)",
    credit: "Wikipedia",
  },
};
