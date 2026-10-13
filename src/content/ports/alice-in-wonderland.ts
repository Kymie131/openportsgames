import type { Port } from "@/lib/ports/schema";

export const AliceInWonderland: Port = {
  schema: "port",
  id: "alice-in-wonderland",
  title: "Alice in Wonderland",
  game: "Alice in Wonderland",
  developers: ["Alice-2010"],
  publisher: "Unknown",
  originalYear: 2010,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Alice-2010/Decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
