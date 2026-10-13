import type { Port } from "@/lib/ports/schema";

export const LiliumVoyager: Port = {
  schema: "port",
  id: "lilium-voyager",
  title: "Lilium-voyager",
  game: "lilium-voyager",
  developers: ["clover-moe"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/clover-moe/lilium-voyager"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
