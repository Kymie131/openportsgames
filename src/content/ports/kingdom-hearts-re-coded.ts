import type { Port } from "@/lib/ports/schema";

export const KingdomHeartsReCoded: Port = {
  schema: "port",
  id: "kingdom-hearts-re-coded",
  title: "Kingdom Hearts Re:coded",
  game: "Kingdom Hearts Re:coded",
  developers: ["kh-recoded-decomp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kh-recoded-decomp/kh-recoded-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
