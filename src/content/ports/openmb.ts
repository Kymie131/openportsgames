import type { Port } from "@/lib/ports/schema";

export const Openmb: Port = {
  schema: "port",
  id: "openmb",
  title: "OpenMB",
  game: "OpenMB",
  developers: ["cookgreen"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/cookgreen/OpenMB"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
