import type { Port } from "@/lib/ports/schema";

export const fallout1Ce: Port = {
  schema: "port",
  id: "fallout1-ce",
  title: "Fallout Community Edition",
  game: "Fallout",
  developers: ["Interplay Productions"],
  publisher: "Interplay Productions",
  originalYear: 1997,
  portType: "reimplementation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.1.0", date: "2024-03-03" },
  sources: ["https://github.com/alexbatalov/fallout1-ce"],
  license: {
    spdx: "NOASSERTION",
    note: "project states it derives from a public domain release of the Fallout source",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Community engine for Fallout rebuilt for modern operating systems. Requires the original Fallout game files.",
};