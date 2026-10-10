import type { Port } from "@/lib/ports/schema";

export const vandalHeartsRecomp: Port = {
  schema: "port",
  id: "vandal-hearts-recomp",
  title: "Vandal Hearts Recompiled",
  game: "Vandal Hearts",
  developers: ["HalmyLyseas"],
  publisher: "Konami",
  originalYear: 1996,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/HalmyLyseas/VandalHearts-PcPort"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Native PC port of Vandal Hearts built on a byte-exact matching decompilation. It builds for Windows and Linux and needs your own disc.",
  notesEs:
    "Port nativo para PC de Vandal Hearts construido sobre una decompilación byte-exact. Compila para Windows y Linux y necesita tu propio disco.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Vandal%20Hearts%20(Europe)%20(En,Fr,De).png",
    alt: "Vandal Hearts (box art)",
    credit: "Box art",
  },
};
