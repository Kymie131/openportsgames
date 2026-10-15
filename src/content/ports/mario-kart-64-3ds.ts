import type { Port } from "@/lib/ports/schema";

export const marioKart643ds: Port = {
  schema: "port",
  id: "mario-kart-64-3ds",
  title: "Mario Kart 64 (3DS)",
  game: "Mario Kart 64",
  developers: ["EstebanPdN"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/mario-kart-64-3ds"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  notes:
    "Native Nintendo 3DS port built from the Mario Kart 64 decompilation. Requires your own ROM.",
  notesEs:
    "Port nativo para Nintendo 3DS construido desde la decompilación de Mario Kart 64. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/e5494d23b18b5c822bcaa9fe8fd077bf.jpg",
    alt: "Mario Kart 64 (cover)",
    credit: "SteamGridDB",
  },
};
