import type { Port } from "@/lib/ports/schema";

export const Creatures2: Port = {
  schema: "port",
  id: "creatures-2",
  title: "Creatures 2",
  game: "Creatures 2",
  developers: ["adamcolquhoun"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/adamcolquhoun/Creatures-2-Decompilation"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
