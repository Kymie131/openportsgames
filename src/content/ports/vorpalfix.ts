import type { Port } from "@/lib/ports/schema";

export const Vorpalfix: Port = {
  schema: "port",
  id: "vorpalfix",
  title: "VorpalFix",
  game: "VorpalFix",
  developers: ["Wemino"],
  publisher: "Unknown",
  originalYear: 2011,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Wemino/VorpalFix"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
