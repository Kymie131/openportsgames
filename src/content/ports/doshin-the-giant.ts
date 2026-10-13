import type { Port } from "@/lib/ports/schema";

export const DoshinTheGiant: Port = {
  schema: "port",
  id: "doshin-the-giant",
  title: "Doshin the Giant",
  game: "Doshin the Giant",
  developers: ["break-core"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/break-core/doshin-gc"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
