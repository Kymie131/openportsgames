import type { Port } from "@/lib/ports/schema";

export const doom64ExPlus: Port = {
  schema: "port",
  id: "doom64-ex-plus",
  title: "Doom 64 EX Plus",
  game: "Doom 64",
  developers: ["atsb"],
  publisher: "Midway Games",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "5.2.0.0", date: "2025-10-20" },
  sources: ["https://github.com/atsb/Doom64EX-Plus"],
  license: {
    spdx: "NOASSERTION",
    note: "custom Limited Use Software License in COPYING",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Nintendo 64",
  features: [
    "Source-based Doom 64 expansion",
    "Rerelease of the original maps plus new content",
    "Modern lighting and widescreen support",
  ],
  notes:
    "Complete source port of Doom 64. The project is archived on GitHub and its license is a custom Limited Use Software License, so the terms are not an OSI license.",
};
