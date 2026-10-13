import type { Port } from "@/lib/ports/schema";

export const ShiningForce: Port = {
  schema: "port",
  id: "shining-force",
  title: "Shining Force",
  game: "Shining Force",
  developers: ["ShiningForceCentral"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ShiningForceCentral/SF1DISASM"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
