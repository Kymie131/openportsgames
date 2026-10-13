import type { Port } from "@/lib/ports/schema";

export const WarioWorld: Port = {
  schema: "port",
  id: "wario-world",
  title: "Wario World",
  game: "Wario World",
  developers: ["sabishii-bit"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sabishii-bit/wwdcmp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
