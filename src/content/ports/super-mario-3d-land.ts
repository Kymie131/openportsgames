import type { Port } from "@/lib/ports/schema";

export const SuperMario3dLand: Port = {
  schema: "port",
  id: "super-mario-3d-land",
  title: "Super Mario 3D Land",
  game: "Super Mario 3D Land",
  developers: ["3dsdecomp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/3dsdecomp/RedPepper"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
