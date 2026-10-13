import type { Port } from "@/lib/ports/schema";

export const NewPlayControlPikmin: Port = {
  schema: "port",
  id: "new-play-control-pikmin",
  title: "New Play Control! Pikmin",
  game: "New Play Control! Pikmin",
  developers: ["projectPiki"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/projectPiki/pik1wii"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
