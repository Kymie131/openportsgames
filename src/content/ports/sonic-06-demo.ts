import type { Port } from "@/lib/ports/schema";

export const Sonic06Demo: Port = {
  schema: "port",
  id: "sonic-06-demo",
  title: "Sonic 06 Demo",
  game: "Sonic 06 Demo",
  developers: ["PranchaD"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PranchaD/re-Sonic06Demo"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
