import type { Port } from "@/lib/ports/schema";

export const Hopmon: Port = {
  schema: "port",
  id: "hopmon",
  title: "Hopmon",
  game: "Hopmon",
  developers: ["Teofil98"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Teofil98/OpenHopmon"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
