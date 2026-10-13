import type { Port } from "@/lib/ports/schema";

export const MegamanZero3: Port = {
  schema: "port",
  id: "megaman-zero-3",
  title: "Megaman Zero 3",
  game: "Megaman Zero 3",
  developers: ["mmzret"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mmzret/rmz3"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
