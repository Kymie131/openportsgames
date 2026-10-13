import type { Port } from "@/lib/ports/schema";

export const BloonsTd5: Port = {
  schema: "port",
  id: "bloons-td-5",
  title: "Bloons TD 5",
  game: "Bloons TD 5",
  developers: ["NKHook"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NKHook/BTD5-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
