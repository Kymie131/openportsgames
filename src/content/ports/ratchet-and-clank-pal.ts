import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankPal: Port = {
  schema: "port",
  id: "ratchet-and-clank-pal",
  title: "Ratchet & Clank (PAL)",
  game: "Ratchet & Clank (PAL)",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac1-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
