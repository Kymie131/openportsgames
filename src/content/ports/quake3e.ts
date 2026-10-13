import type { Port } from "@/lib/ports/schema";

export const Quake3e: Port = {
  schema: "port",
  id: "quake3e",
  title: "Quake3e",
  game: "Quake3e",
  developers: ["ec-"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ec-/Quake3e"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
