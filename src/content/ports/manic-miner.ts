import type { Port } from "@/lib/ports/schema";

export const ManicMiner: Port = {
  schema: "port",
  id: "manic-miner",
  title: "Manic Miner",
  game: "Manic Miner",
  developers: ["skoolkid"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/skoolkid/manicminer"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
