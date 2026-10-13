import type { Port } from "@/lib/ports/schema";

export const HaloReach: Port = {
  schema: "port",
  id: "halo-reach",
  title: "Halo Reach",
  game: "Halo Reach",
  developers: ["ChimpsAtSea"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ChimpsAtSea/Reach"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
