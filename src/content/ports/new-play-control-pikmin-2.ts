import type { Port } from "@/lib/ports/schema";

export const NewPlayControlPikmin2: Port = {
  schema: "port",
  id: "new-play-control-pikmin-2",
  title: "New Play Control! Pikmin 2",
  game: "New Play Control! Pikmin 2",
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
  sources: ["https://github.com/projectPiki/pik2wii"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
