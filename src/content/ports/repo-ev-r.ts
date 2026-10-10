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
  originalSystem: "Microsoft Windows",
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
