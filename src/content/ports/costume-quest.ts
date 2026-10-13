import type { Port } from "@/lib/ports/schema";

export const CostumeQuest: Port = {
  schema: "port",
  id: "costume-quest",
  title: "Costume Quest",
  game: "Costume Quest",
  developers: ["Costume-Quest-Modding"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Costume-Quest-Modding/CostumeQuest-Decomp"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
