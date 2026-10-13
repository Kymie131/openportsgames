import type { Port } from "@/lib/ports/schema";

export const ReracLauncher: Port = {
  schema: "port",
  id: "rerac-launcher",
  title: "Rerac launcher",
  game: "rerac launcher",
  developers: ["re-rac"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/re-rac/rerac-launcher"],
  license: { spdx: "ISC" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
