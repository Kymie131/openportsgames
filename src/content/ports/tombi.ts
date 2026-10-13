import type { Port } from "@/lib/ports/schema";

export const Tombi: Port = {
  schema: "port",
  id: "tombi",
  title: "Tombi!",
  game: "Tombi!",
  developers: ["afsenovilla"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/afsenovilla/Tombi-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
