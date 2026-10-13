import type { Port } from "@/lib/ports/schema";

export const Jetpac: Port = {
  schema: "port",
  id: "jetpac",
  title: "Jetpac",
  game: "Jetpac",
  developers: ["mrcook"],
  publisher: "Unknown",
  originalYear: 1983,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mrcook/jetpac-disassembly"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
