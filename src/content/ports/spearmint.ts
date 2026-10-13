import type { Port } from "@/lib/ports/schema";

export const Spearmint: Port = {
  schema: "port",
  id: "spearmint",
  title: "Spearmint",
  game: "spearmint",
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
  sources: ["https://github.com/clover-moe/spearmint"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
