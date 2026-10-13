import type { Port } from "@/lib/ports/schema";

export const WcwNwoThunder: Port = {
  schema: "port",
  id: "wcw-nwo-thunder",
  title: "WCW/nWo Thunder",
  game: "WCW/nWo Thunder",
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
  sources: ["https://github.com/martinbean/thunder"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
