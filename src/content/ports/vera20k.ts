import type { Port } from "@/lib/ports/schema";

export const Vera20k: Port = {
  schema: "port",
  id: "vera20k",
  title: "Vera20k",
  game: "vera20k",
  developers: ["YuriPlanet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/YuriPlanet/vera20k"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
