import type { Port } from "@/lib/ports/schema";

export const PeggleDeluxe: Port = {
  schema: "port",
  id: "peggle-deluxe",
  title: "Peggle Deluxe",
  game: "Peggle Deluxe",
  developers: ["teampopwork"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/teampopwork/Thunderball"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
