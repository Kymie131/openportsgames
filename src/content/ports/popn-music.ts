import type { Port } from "@/lib/ports/schema";

export const PopnMusic: Port = {
  schema: "port",
  id: "popn-music",
  title: "Pop'N Music",
  game: "Pop'N Music",
  developers: ["Erizur"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Erizur/slpm86183"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
};
