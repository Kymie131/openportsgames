import type { Port } from "@/lib/ports/schema";

export const RaceIntoSpace: Port = {
  schema: "port",
  id: "race-into-space",
  title: "Race into Space",
  game: "Race into Space",
  developers: ["raceintospace"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/raceintospace/raceintospace"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
