import type { Port } from "@/lib/ports/schema";

export const kingdomHearts3582DaysRecomp: Port = {
  schema: "port",
  id: "kingdom-hearts-358-2-days-recomp",
  title: "Kingdom Hearts 358/2 Days Recompiled",
  game: "Kingdom Hearts 358/2 Days",
  developers: ["Yokimitsuro"],
  publisher: "Square Enix",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Yokimitsuro/khdays-port"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
  notes:
    "Experimental native PC runtime for Kingdom Hearts 358/2 Days (Nintendo DS). It needs your own copy of the game.",
  notesEs:
    "Runtime nativo experimental para PC de Kingdom Hearts 358/2 Days (Nintendo DS). Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20DS/Named_Boxarts/Kingdom%20Hearts%20-%20358-2%20Days%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Kingdom Hearts 358/2 Days (box art)",
    credit: "Box art",
  },
};
