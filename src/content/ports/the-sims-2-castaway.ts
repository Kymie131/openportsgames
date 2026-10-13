import type { Port } from "@/lib/ports/schema";

export const TheSims2Castaway: Port = {
  schema: "port",
  id: "the-sims-2-castaway",
  title: "The Sims 2: Castaway",
  game: "The Sims 2: Castaway",
  developers: ["HaydnTrigg"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/HaydnTrigg/Castaway"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
