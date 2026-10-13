import type { Port } from "@/lib/ports/schema";

export const Meleepc: Port = {
  schema: "port",
  id: "meleepc",
  title: "MeleePC",
  game: "MeleePC",
  developers: ["999sian"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/999sian/melee-pc"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
