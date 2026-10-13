import type { Port } from "@/lib/ports/schema";

export const Madnesspatch: Port = {
  schema: "port",
  id: "madnesspatch",
  title: "MadnessPatch",
  game: "MadnessPatch",
  developers: ["Wemino"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Wemino/MadnessPatch"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
