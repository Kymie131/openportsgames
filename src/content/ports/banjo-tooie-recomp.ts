import type { Port } from "@/lib/ports/schema";

export const banjoTooieRecomp: Port = {
  schema: "port",
  id: "banjo-tooie-recomp",
  title: "Banjo-Tooie Recompiled",
  game: "Banjo-Tooie",
  developers: ["some-scurvy-dog"],
  publisher: "Rare",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/some-scurvy-dog/banjo-tooie-scurvy-dog-port"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes: "Native Windows PC port of Banjo-Tooie (Nintendo 64). It needs your own copy of the game.",
  notesEs:
    "Port nativo para Windows de Banjo-Tooie (Nintendo 64). Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Banjo-Tooie%20(USA).png",
    alt: "Banjo-Tooie (box art)",
    credit: "Box art",
  },
};
