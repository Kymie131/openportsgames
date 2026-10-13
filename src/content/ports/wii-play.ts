import type { Port } from "@/lib/ports/schema";

export const WiiPlay: Port = {
  schema: "port",
  id: "wii-play",
  title: "Wii Play",
  game: "Wii Play",
  developers: ["akiramusic000"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/akiramusic000/Rhae"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
