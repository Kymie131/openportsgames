import type { Port } from "@/lib/ports/schema";

export const LegoBatmanTheVideogame: Port = {
  schema: "port",
  id: "lego-batman-the-videogame",
  title: "LEGO Batman: The Videogame",
  game: "LEGO Batman: The Videogame",
  developers: ["wasdhjklxyz"],
  publisher: "Unknown",
  originalYear: 2008,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/wasdhjklxyz/lbtvg"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
