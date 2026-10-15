import type { Port } from "@/lib/ports/schema";

export const sf64Psp: Port = {
  schema: "port",
  id: "sf64-psp",
  title: "Star Fox 64 (PSP)",
  game: "Star Fox 64",
  developers: ["TheMrIron2"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheMrIron2/sf64-psp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Port of Star Fox 64 to the PlayStation Portable, based on the decompilation. Requires your own ROM.",
  notesEs:
    "Port de Star Fox 64 a la PlayStation Portable, basado en la decompilación. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/2b962f0b627cf45414b498eb963dde7d.png",
    alt: "Star Fox 64 (cover)",
    credit: "SteamGridDB",
  },
};
