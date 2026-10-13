import type { Port } from "@/lib/ports/schema";

export const InsaniquariumDeluxe: Port = {
  schema: "port",
  id: "insaniquarium-deluxe",
  title: "Insaniquarium Deluxe",
  game: "Insaniquarium Deluxe",
  developers: ["Vindirect"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Vindirect/WinFish"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
