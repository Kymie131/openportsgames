import type { Port } from "@/lib/ports/schema";

export const LionheartRemake: Port = {
  schema: "port",
  id: "lionheart-remake",
  title: "Lionheart Remake",
  game: "Lionheart Remake",
  developers: ["b3dgs"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/b3dgs/lionheart-remake"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
