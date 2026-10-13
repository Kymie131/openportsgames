import type { Port } from "@/lib/ports/schema";

export const Openxw: Port = {
  schema: "port",
  id: "openxw",
  title: "OpenXW",
  game: "OpenXW",
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
  sources: ["https://github.com/elyosh/OpenXW"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
