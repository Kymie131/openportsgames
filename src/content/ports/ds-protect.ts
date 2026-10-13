import type { Port } from "@/lib/ports/schema";

export const DsProtect: Port = {
  schema: "port",
  id: "ds-protect",
  title: "DS Protect",
  game: "DS Protect",
  developers: ["taxicat1"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/taxicat1/dsprot"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
