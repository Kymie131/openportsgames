import type { Port } from "@/lib/ports/schema";

export const FordRacing: Port = {
  schema: "port",
  id: "ford-racing",
  title: "Ford Racing",
  game: "Ford Racing",
  developers: ["dashr9230"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dashr9230/Gt2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
