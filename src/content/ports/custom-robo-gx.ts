import type { Port } from "@/lib/ports/schema";

export const CustomRoboGx: Port = {
  schema: "port",
  id: "custom-robo-gx",
  title: "Custom Robo GX",
  game: "Custom Robo GX",
  developers: ["pizdex"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pizdex/robogx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
