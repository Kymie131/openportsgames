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
  notes:
    "Engine reimplementation targeting the games built on the Dark Forces engine. Original game assets are not distributed.",
};
