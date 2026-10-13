import type { Port } from "@/lib/ports/schema";

export const TaikoNoTatsujinWiiKetteiban: Port = {
  schema: "port",
  id: "taiko-no-tatsujin-wii-ketteiban",
  title: "Taiko No Tatsujin Wii Ketteiban",
  game: "Taiko No Tatsujin Wii Ketteiban",
  developers: ["CalebPancake"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CalebPancake/Taiko-No-Tatsujin-Wii-Ketteiban"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
