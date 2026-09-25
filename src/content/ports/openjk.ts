import type { Port } from "@/lib/ports/schema";

export const openJk: Port = {
  schema: "port",
  id: "openjk",
  title: "OpenJK",
  game: "Star Wars Jedi Knight: Jedi Academy",
  developers: ["Raven Software"],
  publisher: "LucasArts",
  originalYear: 2003,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/JACoders/OpenJK"],
  website: "https://builds.openjk.org",
  license: {
    spdx: "GPL-2.0",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Community engine for Jedi Academy (and Jedi Outcast single-player) released by Raven Software. Distributed as a rolling 'latest' release. Requires original game files.",
};
