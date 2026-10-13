import type { Port } from "@/lib/ports/schema";

export const SpaceRangers: Port = {
  schema: "port",
  id: "space-rangers",
  title: "Space Rangers",
  game: "Space Rangers",
  developers: ["pakompom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pakompom/SpaceRangers1_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
