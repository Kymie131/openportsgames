import type { Port } from "@/lib/ports/schema";

export const EarthboundPhaseDistorter: Port = {
  schema: "port",
  id: "earthbound-phase-distorter",
  title: "EarthBound (Phase Distorter)",
  game: "EarthBound (Phase Distorter)",
  developers: ["TheRunaway5"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TheRunaway5/Phase-Distorter"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
