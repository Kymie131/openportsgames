import type { Port } from "@/lib/ports/schema";

export const Tyrquake: Port = {
  schema: "port",
  id: "tyrquake",
  title: "Tyrquake",
  game: "Tyrquake",
  developers: ["libretro"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/libretro/tyrquake"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
