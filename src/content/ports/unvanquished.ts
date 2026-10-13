import type { Port } from "@/lib/ports/schema";

export const Unvanquished: Port = {
  schema: "port",
  id: "unvanquished",
  title: "Unvanquished",
  game: "Unvanquished",
  developers: ["Unvanquished"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Unvanquished/Unvanquished"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
