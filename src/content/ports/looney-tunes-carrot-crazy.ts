import type { Port } from "@/lib/ports/schema";

export const LooneyTunesCarrotCrazy: Port = {
  schema: "port",
  id: "looney-tunes-carrot-crazy",
  title: "Looney Tunes: Carrot Crazy",
  game: "Looney Tunes: Carrot Crazy",
  developers: ["huderlem"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/huderlem/carrotcrazy"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Color",
};
