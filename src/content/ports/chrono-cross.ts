import type { Port } from "@/lib/ports/schema";

export const ChronoCross: Port = {
  schema: "port",
  id: "chrono-cross",
  title: "Chrono Cross",
  game: "Chrono Cross",
  developers: ["jdperos"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jdperos/chrono-cross-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
