import type { Port } from "@/lib/ports/schema";

export const PrinceMonogame: Port = {
  schema: "port",
  id: "prince-monogame",
  title: "Prince-Monogame",
  game: "Prince-Monogame",
  developers: ["salvadorc17"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/salvadorc17/Prince-Monogame"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
