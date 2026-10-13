import type { Port } from "@/lib/ports/schema";

export const Terraria: Port = {
  schema: "port",
  id: "terraria",
  title: "Terraria",
  game: "Terraria",
  developers: ["PPrism"],
  publisher: "Unknown",
  originalYear: 2013,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PPrism/TerrariaOGC"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 3",
};
