import type { Port } from "@/lib/ports/schema";

export const GoldeneyePcPort: Port = {
  schema: "port",
  id: "goldeneye-pc-port",
  title: "GoldenEye PC Port",
  game: "GoldenEye PC Port",
  developers: ["jkdansereau"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jkdansereau/goldeneye-pc-port"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
