import type { Port } from "@/lib/ports/schema";

export const WcwNitro: Port = {
  schema: "port",
  id: "wcw-nitro",
  title: "WCW Nitro",
  game: "WCW Nitro",
  developers: ["martinbean"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/martinbean/nitro"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
