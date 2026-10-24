import type { Port } from "@/lib/ports/schema";

export const NewPlayControlPikmin: Port = {
  schema: "port",
  id: "new-play-control-pikmin",
  title: "New Play Control! Pikmin",
  game: "New Play Control! Pikmin",
  developers: ["projectPiki"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/projectPiki/pik1wii"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/13/Pikmin_cover_art.jpg",
    alt: "New Play Control! Pikmin (cover)",
    credit: "Wikipedia",
  },
  summary: "New Play Control! is a series of first-party GameCube games ported to the Wii by Nintendo. Games in the New Play Control! series feature enhancements such as widescreen support, enhanced graphics and the implementation of the Wii's motion controls with the Wii Remote and Nunchuk.",
  summaryEs: "New Play Control!, conocido en Japón como Play on Wii Selection , es una serie de videojuegos de Nintendo GameCube rediseñados por Nintendo para la consola Wii. Los videouegos de la serie New Play Control! presentan una serie de mejoras, sobre todo la implementación de controles Wii con el uso de Wii Remote y Nunchuk, así como la inclusión de soporte de pantalla panorámica y gráficos mejorados.",
  notes:
    "A decompilation of New Play Control! Pikmin 1 (USA) brought to you by fans of the series.",
  notesEs: "Una decompilación de New Play Control! Pikmin 1 (USA) hecha por fans de la saga.",
};
