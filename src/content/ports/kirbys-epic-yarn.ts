import type { Port } from "@/lib/ports/schema";

export const KirbysEpicYarn: Port = {
  schema: "port",
  id: "kirbys-epic-yarn",
  title: "Kirby's Epic Yarn",
  game: "Kirby's Epic Yarn",
  developers: ["Swiftshine"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Swiftshine/key"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
