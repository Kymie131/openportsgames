import type { Port } from "@/lib/ports/schema";

export const Kamiden: Port = {
  schema: "port",
  id: "kamiden",
  title: "Ōkamiden",
  game: "Ōkamiden",
  developers: ["dothacktranslate"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dothacktranslate/okamiden-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
