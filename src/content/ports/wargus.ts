import type { Port } from "@/lib/ports/schema";

export const wargusPort: Port = {
  schema: "port",
  id: "wargus",
  title: "Wargus",
  game: "Warcraft II",
  developers: ["Wargus contributors"],
  publisher: "Blizzard Entertainment",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "beta",
  release: { version: "3.3.2", date: "2022-08-10" },
  sources: ["https://github.com/wargus/wargus"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for Warcraft II, intended to be compatible with the retail data files.",
};
