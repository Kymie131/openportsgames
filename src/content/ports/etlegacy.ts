import type { Port } from "@/lib/ports/schema";

export const etLegacy: Port = {
  schema: "port",
  id: "etlegacy",
  title: "ET Legacy",
  game: "Wolfenstein: Enemy Territory",
  developers: ["ET Legacy Team"],
  publisher: "Activision",
  originalYear: 2003,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/etlegacy/etlegacy"],
  discord: "https://discord.gg/UBAZFys",
  website: "https://www.etlegacy.com",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: [
    "Continuation of the open source Enemy Territory code",
    "Modern engine improvements and fixes",
  ],
  notes:
    "Community continuation of the open source Wolfenstein: Enemy Territory codebase. No tagged releases are published.",
  screenshots: [
    {
      src: "https://github.com/etlegacy/etlegacy/actions/workflows/ci.yml/badge.svg?branch=master",
      alt: "CI",
      credit: "etlegacy",
    },
    {
      src: "https://github.com/etlegacy/etlegacy/actions/workflows/build.yml/badge.svg?branch=master",
      alt: "ETLBuild",
      credit: "etlegacy",
    },
    {
      src: "https://snapcraft.io/etlegacy/badge.svg",
      alt: "etlegacy",
      credit: "etlegacy",
    },
  ],
};
