import type { Port } from "@/lib/ports/schema";

export const zeldaTmc3ds: Port = {
  schema: "port",
  id: "zelda-tmc-3ds",
  title: "The Minish Cap (3DS)",
  game: "The Legend of Zelda: The Minish Cap",
  developers: ["EstebanPdN"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/zelda-tmc-3ds"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  notes:
    "Native Nintendo 3DS port of The Minish Cap, based on Project Picori. Requires your own ROM.",
  notesEs:
    "Port nativo para Nintendo 3DS de The Minish Cap, basado en Project Picori. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/e98002ab38ca88f2ca5e461cc99c5d2b.jpg",
    alt: "The Legend of Zelda: The Minish Cap (cover)",
    credit: "SteamGridDB",
  },
};
