import type { Port } from "@/lib/ports/schema";

export const BossRally: Port = {
  schema: "port",
  id: "boss-rally",
  title: "Boss Rally",
  game: "Boss Rally",
  developers: ["jeff-strutb"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jeff-strutb/brally"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
