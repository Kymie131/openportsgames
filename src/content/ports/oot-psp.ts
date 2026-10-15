import type { Port } from "@/lib/ports/schema";

export const ootPsp: Port = {
  schema: "port",
  id: "oot-psp",
  title: "Ocarina of Time (PSP)",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["z2442"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/z2442/oot-PSP"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Port of Ocarina of Time to the PlayStation Portable, based on the decompilation. Requires your own ROM.",
  notesEs:
    "Port de Ocarina of Time a la PlayStation Portable, basado en la decompilación. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/icon_thumb/a896144046a1b5bd6e3e034d00b4f73a.png",
    alt: "The Legend of Zelda: Ocarina of Time (cover)",
    credit: "SteamGridDB",
  },
};
