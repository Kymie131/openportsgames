import type { Port } from "@/lib/ports/schema";

export const kirby64Recomp: Port = {
  schema: "port",
  id: "kirby-64-recomp",
  title: "Kirby 64 Recompiled",
  game: "Kirby 64: The Crystal Shards",
  developers: ["Kirby64Ret"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Kirby64Ret/Kirby64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Kirby 64: The Crystal Shards (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Kirby 64: The Crystal Shards (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Hoshi%20no%20Kirby%2064%20(Japan)%20(Rev%202).png",
    alt: "Kirby 64: The Crystal Shards (box art)",
    credit: "Box art",
  },
};
