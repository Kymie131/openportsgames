import type { Port } from "@/lib/ports/schema";

export const YsVi: Port = {
  schema: "port",
  id: "ys-vi",
  title: "Ys VI",
  game: "Ys VI",
  developers: ["GrantBenR"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GrantBenR/YsViDecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
