import type { Port } from "@/lib/ports/schema";

export const keeperFx: Port = {
  schema: "port",
  id: "keeperfx",
  title: "KeeperFX",
  game: "Dungeon Keeper",
  developers: ["Bullfrog Productions"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.4.0", date: "2026-07-04" },
  sources: ["https://github.com/dkfans/keeperfx"],
  discord: "https://discord.gg/hE4p7vy2Hb",
  website: "https://keeperfx.net/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystems: ["MS-DOS"],
  features: [
    "Higher resolutions and frame rate decoupled from the game logic",
    "Extra campaigns, maps, creatures and mod support",
    "Multiplayer over a modern protocol with a dedicated master server",
  ],
  featuresEs: [
    "Resoluciones mayores y framerate desacoplado de la lógica del juego",
    "Campañas, mapas, criaturas y soporte de mods adicionales",
    "Multijugador sobre un protocolo moderno con servidor maestro dedicado",
  ],
  summary: "Dungeon Keeper is a strategy video game developed by Bullfrog Productions and published by Electronic Arts. It was released on 27 June 1997 for MS-DOS and Windows 95. In Dungeon Keeper, the player builds and manages a dungeon, protecting it from invading \"hero\" characters intent on stealing its accumulated treasures, killing monsters and ultimately the player's demise. The ultimate goal is to conquer the world by destroying the heroic forces and rival dungeon keepers in each realm. A character known as the Avatar appears as the final hero.",
  summaryEs: "Dungeon Keeper es un videojuego de estrategia y rol para PC publicado por Bullfrog Productions en 1997.",
  notes:
    "Started as a Dungeon Keeper decompilation and is now a full rewrite plus a fan expansion. Windows only, with native cross-platform builds listed as future work. Requires the original Dungeon Keeper files.",
  notesEs:
    "Empezó como decompilación de Dungeon Keeper y hoy es una reescritura completa más una expansión fan. Solo Windows, con builds nativas multiplataforma anunciadas como trabajo futuro. Requiere los archivos originales de Dungeon Keeper.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Dungeon%20Keeper.png",
    alt: "Dungeon Keeper (box art)",
    credit: "Box art",
  },
};
