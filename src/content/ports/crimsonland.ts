import type { Port } from "@/lib/ports/schema";

export const Crimsonland: Port = {
  schema: "port",
  id: "crimsonland",
  title: "Crimsonland",
  game: "Crimsonland",
  developers: ["banteg"],
  publisher: "Unknown",
  originalYear: 2003,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/banteg/crimson"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
