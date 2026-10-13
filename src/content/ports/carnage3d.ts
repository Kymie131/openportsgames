import type { Port } from "@/lib/ports/schema";

export const Carnage3d: Port = {
  schema: "port",
  id: "carnage3d",
  title: "Carnage3D",
  game: "Carnage3D",
  developers: ["codenamecpp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/codenamecpp/carnage3d"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
