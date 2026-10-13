import type { Port } from "@/lib/ports/schema";

export const Machines: Port = {
  schema: "port",
  id: "machines",
  title: "Machines",
  game: "machines",
  developers: ["WiredForWar"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/WiredForWar/machines"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
