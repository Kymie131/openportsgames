import type { Port } from "@/lib/ports/schema";

export const tipRecomp: Port = {
  schema: "port",
  id: "tip-recomp",
  title: "TiP Recomp",
  game: "Viva Pinata: Trouble in Paradise",
  developers: ["SolarCookies"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/SolarCookies/TiP-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Viva Pinata: Trouble in Paradise (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Viva Pinata: Trouble in Paradise (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Xbox-360S-Console-Set.jpg",
    alt: "Viva Pinata: Trouble in Paradise (box art)",
    credit: "Wikipedia",
  },
};
