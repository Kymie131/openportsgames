import type { Port } from "@/lib/ports/schema";

export const Starflight: Port = {
  schema: "port",
  id: "starflight",
  title: "Starflight",
  game: "Starflight",
  developers: ["s-macke"],
  publisher: "Unknown",
  originalYear: 1986,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/s-macke/starflight-reverse"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
