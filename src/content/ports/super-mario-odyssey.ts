import type { Port } from "@/lib/ports/schema";

export const SuperMarioOdyssey: Port = {
  schema: "port",
  id: "super-mario-odyssey",
  title: "Super Mario Odyssey",
  game: "Super Mario Odyssey",
  developers: ["MonsterDruide1"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/MonsterDruide1/OdysseyDecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
