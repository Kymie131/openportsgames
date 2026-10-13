import type { Port } from "@/lib/ports/schema";

export const Heavymetal: Port = {
  schema: "port",
  id: "heavymetal",
  title: "Heavymetal",
  game: "heavymetal",
  developers: ["sp00nznet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/heavymetal"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
