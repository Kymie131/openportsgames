import type { Port } from "@/lib/ports/schema";

export const Arkanoid: Port = {
  schema: "port",
  id: "arkanoid",
  title: "Arkanoid",
  game: "Arkanoid",
  developers: ["mcolom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mcolom/arkanoid_msx_disasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
