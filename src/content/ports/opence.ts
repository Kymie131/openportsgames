import type { Port } from "@/lib/ports/schema";

export const Opence: Port = {
  schema: "port",
  id: "opence",
  title: "OpenCE",
  game: "OpenCE",
  developers: ["OpenCommunityEdition"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenCommunityEdition/OpenCE"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox",
};
