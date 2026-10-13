import type { Port } from "@/lib/ports/schema";

export const Jfwhaven: Port = {
  schema: "port",
  id: "jfwhaven",
  title: "Jfwhaven",
  game: "jfwhaven",
  developers: ["jonof"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jonof/jfwhaven"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
