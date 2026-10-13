import type { Port } from "@/lib/ports/schema";

export const Openkrush: Port = {
  schema: "port",
  id: "openkrush",
  title: "OpenKrush",
  game: "OpenKrush",
  developers: ["IceReaper"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/IceReaper/OpenKrush"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
