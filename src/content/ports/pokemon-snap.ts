import type { Port } from "@/lib/ports/schema";

export const PokemonSnap: Port = {
  schema: "port",
  id: "pokemon-snap",
  title: "Pokemon Snap",
  game: "Pokemon Snap",
  developers: ["dreamsailing59-ops"],
  publisher: "Unknown",
  originalYear: 1999,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dreamsailing59-ops/Snapshot"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
