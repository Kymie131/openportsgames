import type { Port } from "@/lib/ports/schema";

export const ShadowTheHedgehog: Port = {
  schema: "port",
  id: "shadow-the-hedgehog",
  title: "Shadow the Hedgehog",
  game: "Shadow the Hedgehog",
  developers: ["dev-camo"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dev-camo/shadow-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
