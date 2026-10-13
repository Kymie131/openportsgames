import type { Port } from "@/lib/ports/schema";

export const Mc2: Port = {
  schema: "port",
  id: "mc2",
  title: "Mc2",
  game: "mc2",
  developers: ["alariq"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alariq/mc2"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
