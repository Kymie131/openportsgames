import type { Port } from "@/lib/ports/schema";

export const Splatoon: Port = {
  schema: "port",
  id: "splatoon",
  title: "Splatoon",
  game: "Splatoon",
  developers: ["Dexx-io"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Dexx-io/Splatoon-Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii U",
};
