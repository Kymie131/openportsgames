import type { Port } from "@/lib/ports/schema";

export const theForceEngine: Port = {
  schema: "port",
  id: "the-force-engine",
  title: "The Force Engine",
  game: "Star Wars: Dark Forces",
  developers: ["The Force Engine contributors"],
  publisher: "LucasArts",
  originalYear: 1995,
  genre: "action-adventure",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.22.420", date: "2025-09-10" },
  sources: ["https://github.com/luciusDXL/TheForceEngine"],
  discord: "https://discord.gg/hpsJnY9",
  website: "https://TheForceEngine.github.io",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: ["Reimplementation of the Rebel Assault engine", "Modern rendering and audio backends"],
  featuresEs: [
    "Reimplementación del motor de Rebel Assault",
    "Backends modernos de renderizado y audio",
  ],
  notes:
    "Engine reimplementation targeting the games built on the Dark Forces engine. Original game assets are not distributed.",
  notesEs:
    "Reimplementación del motor orientada a los juegos construidos con el motor Dark Forces. Los recursos del juego original no se distribuyen.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Star%20Wars%20-%20Dark%20Forces.png",
    alt: "Star Wars: Dark Forces (box art)",
    credit: "Box art",
  },
};
