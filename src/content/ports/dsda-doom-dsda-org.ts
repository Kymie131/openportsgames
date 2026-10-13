import type { Port } from "@/lib/ports/schema";

export const DsdaDoomDsdaOrg: Port = {
  schema: "port",
  id: "dsda-doom-dsda-org",
  title: "DSDA-Doom",
  game: "DSDA-Doom",
  developers: ["dsda-org"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dsda-org/dsda-doom"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
