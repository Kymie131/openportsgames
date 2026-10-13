import type { Port } from "@/lib/ports/schema";

export const Vf1Recomp: Port = {
  schema: "port",
  id: "vf1-recomp",
  title: "Vf1 recomp",
  game: "vf1 recomp",
  developers: ["mr-finster"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mr-finster/vf1-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
