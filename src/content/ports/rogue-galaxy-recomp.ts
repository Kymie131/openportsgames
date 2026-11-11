import type { Port } from "@/lib/ports/schema";

export const rogueGalaxyRecomp: Port = {
  schema: "port",
  id: "rogue-galaxy-recomp",
  title: "Rogue Galaxy Recompiled",
  game: "Rogue Galaxy",
  developers: ["victor-takai"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2005,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/victor-takai/rogue-galaxy-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  wip: true,
  originalSystems: ["PlayStation 2"],
  summary:
    "Rogue Galaxy is a 2005 action role-playing game developed by Level-5 and published by Sony Computer Entertainment for the PlayStation 2. Jaster Rogue joins a band of space pirates and travels across the galaxy in search of the legendary planet Eden.",
  summaryEs:
    "Rogue Galaxy es un juego de rol de acción de 2005 desarrollado por Level-5 y publicado por Sony Computer Entertainment para PlayStation 2. Jaster Rogue se une a unos piratas espaciales y recorre la galaxia en busca del legendario planeta Edén.",
  notes:
    "Native Windows static recompilation built on PS2Recomp. It is a work in progress and builds the game from your own disc; no game data is included.",
  notesEs:
    "Recompilación estática nativa para Windows creada con PS2Recomp. Está en desarrollo y compila el juego desde tu propio disco; no incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a3/RG_EU_Cover_300.jpg",
    alt: "Rogue Galaxy (box art)",
    credit: "Wikipedia",
  },
};
