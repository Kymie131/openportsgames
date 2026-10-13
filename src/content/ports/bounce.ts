import type { Port } from "@/lib/ports/schema";

export const Bounce: Port = {
  schema: "port",
  id: "bounce",
  title: "Bounce",
  game: "Bounce",
  developers: ["misterjdrg"],
  publisher: "Unknown",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/misterjdrg/Bouncer"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
