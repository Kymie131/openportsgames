import type { Port } from "@/lib/ports/schema";

export const devilutionX: Port = {
  schema: "port",
  id: "devilutionx",
  title: "DevilutionX",
  game: "Diablo",
  developers: ["Blizzard North"],
  publisher: "Blizzard Entertainment",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.5.5", date: "2025-10-30" },
  sources: ["https://github.com/diasurgical/devilutionX"],
  docs: "https://github.com/diasurgical/devilutionX/wiki",
  license: {
    spdx: "NOASSERTION",
    note: "revival project with a custom license statement",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Reverse-engineered engine for Diablo and the Hellfire expansion, rebuilt for modern systems. Requires the original Diablo 1 and Hellfire data files.",
};