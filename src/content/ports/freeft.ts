import type { Port } from "@/lib/ports/schema";

export const Freeft: Port = {
  schema: "port",
  id: "freeft",
  title: "FreeFT",
  game: "FreeFT",
  developers: ["nadult"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nadult/FreeFT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
