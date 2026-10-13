import type { Port } from "@/lib/ports/schema";

export const Xoreos: Port = {
  schema: "port",
  id: "xoreos",
  title: "Xoreos",
  game: "xoreos",
  developers: ["xoreos"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/xoreos/xoreos"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
