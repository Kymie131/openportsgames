import type { Port } from "@/lib/ports/schema";

export const Barnyard: Port = {
  schema: "port",
  id: "barnyard",
  title: "Barnyard",
  game: "Barnyard",
  developers: ["InfiniteC0re"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/InfiniteC0re/OpenBarnyard"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
