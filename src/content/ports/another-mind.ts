import type { Port } from "@/lib/ports/schema";

export const AnotherMind: Port = {
  schema: "port",
  id: "another-mind",
  title: "Another Mind",
  game: "Another Mind",
  developers: ["halkuncode"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/halkuncode/anothermind-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
