import type { Port } from "@/lib/ports/schema";

export const WiiFitPlus: Port = {
  schema: "port",
  id: "wii-fit-plus",
  title: "Wii Fit Plus",
  game: "Wii Fit Plus",
  developers: ["Tanline666"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Tanline666/veryfat-dungeon"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
