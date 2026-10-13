import type { Port } from "@/lib/ports/schema";

export const YuGiOhTheEternalDuelistSoul: Port = {
  schema: "port",
  id: "yu-gi-oh-the-eternal-duelist-soul",
  title: "Yu-Gi-Oh! The Eternal Duelist Soul",
  game: "Yu-Gi-Oh! The Eternal Duelist Soul",
  developers: ["CosmicScribe64"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CosmicScribe64/eds-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
