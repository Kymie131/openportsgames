import type { Port } from "@/lib/ports/schema";

export const Homeworld2: Port = {
  schema: "port",
  id: "homeworld-2",
  title: "Homeworld 2",
  game: "Homeworld 2",
  developers: ["HaydnTrigg"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/HaydnTrigg/Homeworld2Classic"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
