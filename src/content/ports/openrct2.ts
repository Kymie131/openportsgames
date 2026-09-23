import type { Port } from "@/lib/ports/schema";

export const openRct2: Port = {
  schema: "port",
  id: "openrct2",
  title: "OpenRCT2",
  game: "RollerCoaster Tycoon 2",
  developers: ["Chris Sawyer Productions"],
  publisher: "Infogrames",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.5.5", date: "2026-09-06" },
  sources: ["https://github.com/OpenRCT2/OpenRCT2"],
  website: "https://openrct2.org/",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Open source reimplementation of RollerCoaster Tycoon 2, expanding the original. Requires the original RCT2 game files.",
};
