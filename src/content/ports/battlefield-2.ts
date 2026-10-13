import type { Port } from "@/lib/ports/schema";

export const Battlefield2: Port = {
  schema: "port",
  id: "battlefield-2",
  title: "Battlefield 2",
  game: "Battlefield 2",
  developers: ["kiwidoggie"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/kiwidoggie/breadflowerdos"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
