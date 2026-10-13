import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankUpYourArsenal: Port = {
  schema: "port",
  id: "ratchet-and-clank-up-your-arsenal",
  title: "Ratchet & Clank: Up Your Arsenal",
  game: "Ratchet & Clank: Up Your Arsenal",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac3-uya-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
