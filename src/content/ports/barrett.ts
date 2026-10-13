import type { Port } from "@/lib/ports/schema";

export const Barrett: Port = {
  schema: "port",
  id: "barrett",
  title: "Barrett",
  game: "Barrett",
  developers: ["lunarmeadow"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/lunarmeadow/barrett"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
