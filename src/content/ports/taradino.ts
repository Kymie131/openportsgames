import type { Port } from "@/lib/ports/schema";

export const Taradino: Port = {
  schema: "port",
  id: "taradino",
  title: "Taradino",
  game: "Taradino",
  developers: ["fabiangreffrath"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/fabiangreffrath/taradino"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
