import type { Port } from "@/lib/ports/schema";

export const openkeeper: Port = {
  schema: "port",
  id: "openkeeper",
  title: "OpenKeeper",
  game: "Dungeon Keeper II",
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
  originalSystems: ["Windows"],
  summary:
    "Dungeon Keeper II is a strategy game developed by Bullfrog Productions and published by Electronic Arts in 1999. The player builds and defends an underground dungeon against heroes and rival keepers.",
  summaryEs:
    "Dungeon Keeper II es un juego de estrategia desarrollado por Bullfrog Productions y publicado por Electronic Arts en 1999. El jugador construye y defiende una mazmorra subterránea frente a héroes y otros guardianes.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/48/Dungeon_Keeper_2_-_cover_art.jpg",
    alt: "Dungeon Keeper 2 (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Open-source remake of Dungeon Keeper 2 that runs the original game assets. It needs your own copy of the game.",
  notesEs:
    "Remake de código abierto de Dungeon Keeper 2 que ejecuta los recursos del juego original. Necesita tu propia copia del juego.",
};
