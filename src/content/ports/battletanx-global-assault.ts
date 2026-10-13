import type { Port } from "@/lib/ports/schema";

export const BattletanxGlobalAssault: Port = {
  schema: "port",
  id: "battletanx-global-assault",
  title: "BattleTanx: Global Assault",
  game: "BattleTanx: Global Assault",
  developers: ["TheGh0stShip"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TheGh0stShip/BattleTanx-Global-Assault"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
