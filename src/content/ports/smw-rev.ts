import type { Port } from "@/lib/ports/schema";

export const smwRev: Port = {
  schema: "port",
  id: "smw-rev",
  title: "SMW Rev",
  game: "Super Mario World",
  developers: ["snesrev"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "platformer",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1", date: "2023-08-16" },
  sources: ["https://github.com/snesrev/smw"],
  discord: "https://discord.gg/AJJbJAzNNJ",
  website: "https://discord.gg/AJJbJAzNNJ",
  license: {
    spdx: "MIT",
    note: "MIT per LICENSE.txt; the GitHub license field reports NOASSERTION",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Super Nintendo",
  notes:
    "SNES ROM reimplementation. The project publishes no game assets, so a legally obtained copy of Super Mario World is required.",
};
