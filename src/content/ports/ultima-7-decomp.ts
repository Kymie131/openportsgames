import type { Port } from "@/lib/ports/schema";

export const Ultima7Decomp: Port = {
  schema: "port",
  id: "ultima-7-decomp",
  title: "Ultima 7 Decomp",
  game: "Ultima 7 Decomp",
  developers: ["Kitrinx"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Kitrinx/Ultima7_Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
