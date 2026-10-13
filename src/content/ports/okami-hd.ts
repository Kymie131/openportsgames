import type { Port } from "@/lib/ports/schema";

export const OkamiHd: Port = {
  schema: "port",
  id: "okami-hd",
  title: "Okami HD",
  game: "Okami HD",
  developers: ["Shintensu"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Shintensu/OkamiHD-Decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
