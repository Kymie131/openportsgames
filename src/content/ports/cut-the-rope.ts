import type { Port } from "@/lib/ports/schema";

export const CutTheRope: Port = {
  schema: "port",
  id: "cut-the-rope",
  title: "Cut The Rope",
  game: "Cut The Rope",
  developers: ["Bingies24"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Bingies24/cuttherope-dx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
