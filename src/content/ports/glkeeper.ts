import type { Port } from "@/lib/ports/schema";

export const Glkeeper: Port = {
  schema: "port",
  id: "glkeeper",
  title: "GLKeeper",
  game: "GLKeeper",
  developers: ["codenamecpp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/codenamecpp/GLKeeper"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
