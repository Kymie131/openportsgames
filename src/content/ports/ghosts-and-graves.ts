import type { Port } from "@/lib/ports/schema";

export const GhostsAndGraves: Port = {
  schema: "port",
  id: "ghosts-and-graves",
  title: "Ghosts And Graves",
  game: "Ghosts And Graves",
  developers: ["AnthonyBongers"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AnthonyBongers/GhostsAndGraves"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo Entertainment System",
};
