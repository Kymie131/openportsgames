import type { Port } from "@/lib/ports/schema";

export const ZeroK: Port = {
  schema: "port",
  id: "zero-k",
  title: "Zero-K",
  game: "Zero-K",
  developers: ["ZeroK-RTS"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ZeroK-RTS/Zero-K"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
