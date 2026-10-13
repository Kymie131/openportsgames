import type { Port } from "@/lib/ports/schema";

export const RatchetDeadlocked: Port = {
  schema: "port",
  id: "ratchet-deadlocked",
  title: "Ratchet: Deadlocked",
  game: "Ratchet: Deadlocked",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2005,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac-deadlocked-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
