import type { Port } from "@/lib/ports/schema";

export const Battletanx: Port = {
  schema: "port",
  id: "battletanx",
  title: "BattleTanx",
  game: "BattleTanx",
  developers: ["TheGh0stShip", "AbuN64"],
  publisher: "The 3DO Company",
  originalYear: 1998,
  portType: "decompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: [
    "https://github.com/TheGh0stShip/BattleTanx",
    "https://github.com/AbuN64/battletanx-decomp",
  ],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/67/BattleTanx.jpg",
    alt: "BattleTanx (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Matching decompilation of BattleTanx for the Nintendo 64 (USA Rev 0, NBXE), with a verified ROM contract and reproducible build gates. The decompilation is complete; it ships no game files, so you must supply your own cartridge dump. An earlier in-progress decompilation by AbuN64 remains linked as provenance.",
  notesEs:
    "Descompilación matching de BattleTanx para Nintendo 64 (USA Rev 0, NBXE), con contrato de ROM verificado y comprobaciones de build reproducibles. La descompilación está completa; no incluye archivos del juego, así que debes aportar tu propio volcado del cartucho. Se mantiene enlazada como procedencia una descompilación anterior de AbuN64.",
};
