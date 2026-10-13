import type { Port } from "@/lib/ports/schema";

export const BigBrainAcademyWiiDegree: Port = {
  schema: "port",
  id: "big-brain-academy-wii-degree",
  title: "Big Brain Academy: Wii Degree",
  game: "Big Brain Academy: Wii Degree",
  developers: ["vabold"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vabold/bba-wd"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
