import type { Port } from "@/lib/ports/schema";

export const BraveFrontier: Port = {
  schema: "port",
  id: "brave-frontier",
  title: "Brave Frontier",
  game: "Brave Frontier",
  developers: ["decompfrontier"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/decompfrontier/client"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
