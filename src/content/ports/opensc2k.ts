import type { Port } from "@/lib/ports/schema";

export const Opensc2k: Port = {
  schema: "port",
  id: "opensc2k",
  title: "OpenSC2K",
  game: "OpenSC2K",
  developers: ["nicholas-ochoa"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nicholas-ochoa/OpenSC2K"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
