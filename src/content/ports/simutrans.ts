import type { Port } from "@/lib/ports/schema";

export const Simutrans: Port = {
  schema: "port",
  id: "simutrans",
  title: "Simutrans",
  game: "simutrans",
  developers: ["simutrans"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/simutrans/simutrans"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
