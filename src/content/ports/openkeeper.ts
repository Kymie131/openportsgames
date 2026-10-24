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
  originalSystems: ["Windows"],
  summary: "Dungeon Keeper 2 is a strategy game developed by Bullfrog Productions and published by Electronic Arts in 1999 for Microsoft Windows. In the sequel to Dungeon Keeper, the player takes the role of a 'dungeon keeper', building and defending an underground dungeon from the would-be heroes that would invade it, as well as from other keepers. In the campaign mode, the player is charged with recovering the portal gems from each area in order to open a portal to the surface. The player can also construct a dungeon without strict objectives, and multiplayer is supported over a network.",
  summaryEs: "Dungeon Keeper 2 es un videojuego de estrategia desarrollado por Bullfrog Productions y publicado por Electronic Arts para Microsoft Windows lanzado en Europa y América del Norte en junio de 1999. Fue la secuela de Dungeon Keeper y predecesor al cancelado Dungeon Keeper 3. Peter Molyneux no tenía un papel activo en la creación de Dungeon Keeper 2, aunque muchas de sus ideas siguieron en el juego.",
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
