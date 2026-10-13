import type { Port } from "@/lib/ports/schema";

export const Ezquake: Port = {
  schema: "port",
  id: "ezquake",
  title: "EzQuake",
  game: "ezQuake",
  developers: ["QW-Group"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/QW-Group/ezquake-source"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
