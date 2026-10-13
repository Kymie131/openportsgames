import type { Port } from "@/lib/ports/schema";

export const FireEmblemTheBindingBlade: Port = {
  schema: "port",
  id: "fire-emblem-the-binding-blade",
  title: "Fire Emblem: The Binding Blade",
  game: "Fire Emblem: The Binding Blade",
  developers: ["StanHash"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/StanHash/fe6"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
