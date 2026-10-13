import type { Port } from "@/lib/ports/schema";

export const Yakuza: Port = {
  schema: "port",
  id: "yakuza",
  title: "Yakuza",
  game: "Yakuza",
  developers: ["Hamzaxx370"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Hamzaxx370/Ogre-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
