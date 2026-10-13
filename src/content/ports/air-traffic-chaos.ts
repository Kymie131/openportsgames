import type { Port } from "@/lib/ports/schema";

export const AirTrafficChaos: Port = {
  schema: "port",
  id: "air-traffic-chaos",
  title: "Air Traffic Chaos",
  game: "Air Traffic Chaos",
  developers: ["sasja-san"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sasja-san/atc"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
