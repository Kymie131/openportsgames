import type { Port } from "@/lib/ports/schema";

export const Thirdeye: Port = {
  schema: "port",
  id: "thirdeye",
  title: "Thirdeye",
  game: "Thirdeye",
  developers: ["psi29a"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/psi29a/thirdeye"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
