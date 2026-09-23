import type { Port } from "@/lib/ports/schema";

export const openTtd: Port = {
  schema: "port",
  id: "openttd",
  title: "OpenTTD",
  game: "Transport Tycoon Deluxe",
  developers: ["Chris Sawyer"],
  publisher: "MicroProse",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "15.3", date: "2026-04-04" },
  sources: ["https://github.com/OpenTTD/OpenTTD"],
  website: "https://www.openttd.org/",
  license: {
    spdx: "GPL-2.0-or-later",
    note: "repository metadata lists NOASSERTION; the project states GPL-2.0-or-later",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Open source simulation game based on Transport Tycoon Deluxe. Ships with the freely redistributable OpenGFX graphics, so no original game data is required.",
};