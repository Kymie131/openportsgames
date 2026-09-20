import type { Port } from "@/lib/ports/schema";

export const fallout2Ce: Port = {
  schema: "port",
  id: "fallout2-ce",
  title: "Fallout 2 Community Edition",
  game: "Fallout 2",
  developers: ["Interplay Productions"],
  publisher: "Interplay Productions",
  originalYear: 1998,
  portType: "reimplementation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.3.0", date: "2024-04-21" },
  sources: ["https://github.com/alexbatalov/fallout2-ce"],
  license: {
    spdx: "NOASSERTION",
    note: "project states it derives from a public domain release of the Fallout source",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Community engine for Fallout 2 rebuilt for modern operating systems. Requires the original Fallout 2 game files.",
};