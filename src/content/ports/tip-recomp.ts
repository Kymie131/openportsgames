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
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Viva Piñata: Trouble in Paradise is a 2008 simulation video game for the Xbox 360. It is the sequel to the 2006 video game, Viva Piñata, and the third game in the Viva Piñata series. Developed by Rare and published by Microsoft Game Studios, the game builds atop its predecessor, in which the player tends a garden and the piñata creatures that come to live there. New features to the series include a cooperative multiplayer mode, a new plot, additional types of piñata creatures, Xbox Live Vision Camera support, and two new areas for capturing piñatas.",
  summaryEs: "Viva Piñata: Trouble in Paradise es el sucesor del videojuego de simulación Viva Piñata desarrollado por Rare en el que ahora ofrece nuevas piñatas, objetos y lugares.",
  notes:
    "Native recompilation of Viva Pinata: Trouble in Paradise (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Viva Pinata: Trouble in Paradise (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a0/Viva_Pinata_Trouble_in_Paradise.jpg",
    alt: "Viva Pinata: Trouble in Paradise (cover art)",
    credit: "Wikipedia",
  },
};
