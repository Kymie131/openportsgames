import type { Port } from "@/lib/ports/schema";

export const jetMotoAnthology: Port = {
  schema: "port",
  id: "jet-moto-anthology",
  title: "Jet Moto Anthology",
  game: "Jet Moto",
  developers: ["GTTeancum"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/Jet-Moto-Anthology"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  features: [
    "Anthology of Jet Moto games rebuilt for PC",
    "Modern enhancements",
  ],
  notes:
    "Native recompilation project for Jet Moto series. Requires original game assets.",
  notesEs:
    "Proyecto de recompilación nativa de la serie Jet Moto. Requiere los archivos originales del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fd/Jet_Moto_Coverart.png",
    alt: "Jet Moto",
    credit: "Wikipedia",
  },
};
