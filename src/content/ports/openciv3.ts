import type { Port } from "@/lib/ports/schema";

export const Openciv3: Port = {
  schema: "port",
  id: "openciv3",
  title: "OpenCiv3",
  game: "OpenCiv3",
  developers: ["C7-Game"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/C7-Game/OpenCiv3"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
