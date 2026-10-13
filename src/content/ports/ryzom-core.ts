import type { Port } from "@/lib/ports/schema";

export const RyzomCore: Port = {
  schema: "port",
  id: "ryzom-core",
  title: "Ryzom Core",
  game: "Ryzom Core",
  developers: ["ryzom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ryzom/ryzomcore"],
  license: { spdx: "AGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
