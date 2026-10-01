import type { Port } from "@/lib/ports/schema";

export const openFodder: Port = {
  schema: "port",
  id: "openfodder",
  title: "OpenFodder",
  game: "Cannon Fodder",
  developers: ["OpenFodder Team"],
  publisher: "Virgin Interactive",
  originalYear: 1993,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "beta",
  release: { version: "2.0.0", date: "2025-12-16" },
  sources: ["https://github.com/OpenFodder/openfodder"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for the Cannon Fodder series, supporting several of the original titles.",
};
