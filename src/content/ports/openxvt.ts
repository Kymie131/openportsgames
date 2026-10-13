import type { Port } from "@/lib/ports/schema";

export const Openxvt: Port = {
  schema: "port",
  id: "openxvt",
  title: "OpenXvT",
  game: "OpenXvT",
  developers: ["elyosh"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/elyosh/OpenXvT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
