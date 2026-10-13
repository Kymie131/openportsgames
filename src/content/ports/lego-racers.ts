import type { Port } from "@/lib/ports/schema";

export const LegoRacers: Port = {
  schema: "port",
  id: "lego-racers",
  title: "Lego Racers",
  game: "Lego Racers",
  developers: ["isledecomp"],
  publisher: "Unknown",
  originalYear: 1999,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/isledecomp/racers"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
