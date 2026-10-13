import type { Port } from "@/lib/ports/schema";

export const ExciteTruck: Port = {
  schema: "port",
  id: "excite-truck",
  title: "Excite Truck",
  game: "Excite Truck",
  developers: ["orangedude27"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/orangedude27/excite-truck"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
