import type { Port } from "@/lib/ports/schema";

export const VirtuaRacing: Port = {
  schema: "port",
  id: "virtua-racing",
  title: "Virtua Racing",
  game: "Virtua Racing",
  developers: ["matiaszanolli"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/matiaszanolli/sega-vr-disasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
