import type { Port } from "@/lib/ports/schema";

export const KirbyAirRide: Port = {
  schema: "port",
  id: "kirby-air-ride",
  title: "Kirby Air Ride",
  game: "Kirby Air Ride",
  developers: ["doldecomp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/doldecomp/kar"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
