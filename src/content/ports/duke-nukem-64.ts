import type { Port } from "@/lib/ports/schema";

export const DukeNukem64: Port = {
  schema: "port",
  id: "duke-nukem-64",
  title: "Duke Nukem 64",
  game: "Duke Nukem 64",
  developers: ["NBlood"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NBlood/Duke64-RE"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
