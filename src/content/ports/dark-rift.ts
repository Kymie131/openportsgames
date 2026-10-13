import type { Port } from "@/lib/ports/schema";

export const DarkRift: Port = {
  schema: "port",
  id: "dark-rift",
  title: "Dark Rift",
  game: "Dark Rift",
  developers: ["Unnunu"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Unnunu/darkrift"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
