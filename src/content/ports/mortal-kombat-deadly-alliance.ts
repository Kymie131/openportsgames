import type { Port } from "@/lib/ports/schema";

export const MortalKombatDeadlyAlliance: Port = {
  schema: "port",
  id: "mortal-kombat-deadly-alliance",
  title: "Mortal Kombat: Deadly Alliance",
  game: "Mortal Kombat: Deadly Alliance",
  developers: ["ShulkMaster"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ShulkMaster/mk-da"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
