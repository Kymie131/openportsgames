import type { Port } from "@/lib/ports/schema";

export const Vangers: Port = {
  schema: "port",
  id: "vangers",
  title: "Vangers",
  game: "Vangers",
  developers: ["KranX"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/KranX/Vangers"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
