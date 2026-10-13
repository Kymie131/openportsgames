import type { Port } from "@/lib/ports/schema";

export const StretchPanic: Port = {
  schema: "port",
  id: "stretch-panic",
  title: "Stretch Panic",
  game: "Stretch Panic",
  developers: ["Harskov"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Harskov/stretch-panic-usa"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
