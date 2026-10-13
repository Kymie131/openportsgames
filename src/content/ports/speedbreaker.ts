import type { Port } from "@/lib/ports/schema";

export const Speedbreaker: Port = {
  schema: "port",
  id: "speedbreaker",
  title: "SpeedBreaker",
  game: "SpeedBreaker",
  developers: ["SpeedBreakerProject"],
  publisher: "Unknown",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SpeedBreakerProject/speedbreaker"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
};
