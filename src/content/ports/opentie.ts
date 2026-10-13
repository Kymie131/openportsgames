import type { Port } from "@/lib/ports/schema";

export const Opentie: Port = {
  schema: "port",
  id: "opentie",
  title: "OpenTIE",
  game: "OpenTIE",
  developers: ["elyosh"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/elyosh/OpenTIE"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
