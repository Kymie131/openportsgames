import type { Port } from "@/lib/ports/schema";

export const Battletanx: Port = {
  schema: "port",
  id: "battletanx",
  title: "BattleTanx",
  game: "BattleTanx",
  developers: ["AbuN64"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AbuN64/battletanx-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
