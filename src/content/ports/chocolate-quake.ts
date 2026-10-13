import type { Port } from "@/lib/ports/schema";

export const ChocolateQuake: Port = {
  schema: "port",
  id: "chocolate-quake",
  title: "Chocolate Quake",
  game: "Chocolate Quake",
  developers: ["Henrique194"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Henrique194/chocolate-quake"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
