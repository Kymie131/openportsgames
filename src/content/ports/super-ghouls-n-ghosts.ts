import type { Port } from "@/lib/ports/schema";

export const SuperGhoulsNGhosts: Port = {
  schema: "port",
  id: "super-ghouls-n-ghosts",
  title: "Super Ghouls ‘n Ghosts",
  game: "Super Ghouls ‘n Ghosts",
  developers: ["FredYeye"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/FredYeye/Super-Ghouls-n-Ghosts-Disassembly"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
