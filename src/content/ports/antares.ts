import type { Port } from "@/lib/ports/schema";

export const Antares: Port = {
  schema: "port",
  id: "antares",
  title: "Antares",
  game: "Antares",
  developers: ["arescentral"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/arescentral/antares"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
