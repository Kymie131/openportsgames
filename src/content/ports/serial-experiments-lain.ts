import type { Port } from "@/lib/ports/schema";

export const SerialExperimentsLain: Port = {
  schema: "port",
  id: "serial-experiments-lain",
  title: "Serial Experiments Lain",
  game: "Serial Experiments Lain",
  developers: ["Y0oshi"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Y0oshi/lain-psx-decompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
