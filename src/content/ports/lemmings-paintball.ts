import type { Port } from "@/lib/ports/schema";

export const LemmingsPaintball: Port = {
  schema: "port",
  id: "lemmings-paintball",
  title: "Lemmings Paintball",
  game: "Lemmings Paintball",
  developers: ["vonhoff"],
  publisher: "Unknown",
  originalYear: 1996,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vonhoff/lemball-decomp"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
