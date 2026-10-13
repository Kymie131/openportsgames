import type { Port } from "@/lib/ports/schema";

export const openkeeper: Port = {
  schema: "port",
  id: "openkeeper",
  title: "OpenKeeper",
  game: "Dungeon Keeper 2",
  developers: ["tonihele"],
  publisher: "Electronic Arts",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/tonihele/OpenKeeper"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source remake of Dungeon Keeper 2 that runs the original game assets. It needs your own copy of the game.",
  notesEs:
    "Remake de código abierto de Dungeon Keeper 2 que ejecuta los recursos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/48/Dungeon_Keeper_2_-_cover_art.jpg",
    alt: "Dungeon Keeper 2 (cover)",
    credit: "Wikipedia",
  },
};
