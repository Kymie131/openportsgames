import type { Port } from "@/lib/ports/schema";

export const Openreliant: Port = {
  schema: "port",
  id: "openreliant",
  title: "OpenReliant",
  game: "OpenReliant",
  developers: ["OpenReliant"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenReliant/openreliant"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
