import type { Port } from "@/lib/ports/schema";

export const Fuel: Port = {
  schema: "port",
  id: "fuel",
  title: "FUEL",
  game: "FUEL",
  developers: ["widberg"],
  publisher: "Unknown",
  originalYear: 2009,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/widberg/FUELDecompilation"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
