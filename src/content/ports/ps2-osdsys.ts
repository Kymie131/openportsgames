import type { Port } from "@/lib/ports/schema";

export const Ps2Osdsys: Port = {
  schema: "port",
  id: "ps2-osdsys",
  title: "PS2 OSDSYS",
  game: "PS2 OSDSYS",
  developers: ["JeanxPereira"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/JeanxPereira/CrystalOSD"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
