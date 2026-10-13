import type { Port } from "@/lib/ports/schema";

export const IdleOfficeTycoon: Port = {
  schema: "port",
  id: "idle-office-tycoon",
  title: "Idle Office Tycoon",
  game: "Idle Office Tycoon",
  developers: ["Avenze"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Avenze/ios_reverse_engineering"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
