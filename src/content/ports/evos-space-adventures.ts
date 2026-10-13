import type { Port } from "@/lib/ports/schema";

export const EvosSpaceAdventures: Port = {
  schema: "port",
  id: "evos-space-adventures",
  title: "Evo's Space Adventures",
  game: "Evo's Space Adventures",
  developers: ["mkst"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mkst/esa"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
