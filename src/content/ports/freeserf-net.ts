import type { Port } from "@/lib/ports/schema";

export const FreeserfNet: Port = {
  schema: "port",
  id: "freeserf-net",
  title: "Freeserf.net",
  game: "freeserf.net",
  developers: ["Pyrdacor"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Pyrdacor/freeserf.net"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
