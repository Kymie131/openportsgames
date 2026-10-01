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
  website: "https://keeperfx.net/",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "MS-DOS",
  features: [
    "Higher resolutions and frame rate decoupled from the game logic",
    "Extra campaigns, maps, creatures and mod support",
    "Multiplayer over a modern protocol with a dedicated master server",
  ],
  notes:
    "Started as a Dungeon Keeper decompilation and is now a full rewrite plus a fan expansion. Windows only, with native cross-platform builds listed as future work. Requires the original Dungeon Keeper files.",
};
