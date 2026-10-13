import type { Port } from "@/lib/ports/schema";

export const OmegaEngine: Port = {
  schema: "port",
  id: "omega-engine",
  title: "OmegA-engine",
  game: "OmegA-engine",
  developers: ["Bishop-333"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Bishop-333/OmegA-engine"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
