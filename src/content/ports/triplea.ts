import type { Port } from "@/lib/ports/schema";

export const Triplea: Port = {
  schema: "port",
  id: "triplea",
  title: "Triplea",
  game: "triplea",
  developers: ["triplea-game"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/triplea-game/triplea"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
