import type { Port } from "@/lib/ports/schema";

export const FortuneStreet: Port = {
  schema: "port",
  id: "fortune-street",
  title: "Fortune Street",
  game: "Fortune Street",
  developers: ["FortuneStreetModding"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/FortuneStreetModding/boom-street-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
