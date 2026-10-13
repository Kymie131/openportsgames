import type { Port } from "@/lib/ports/schema";

export const Qfusion: Port = {
  schema: "port",
  id: "qfusion",
  title: "Qfusion",
  game: "qfusion",
  developers: ["Warsow"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Warsow/qfusion"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
