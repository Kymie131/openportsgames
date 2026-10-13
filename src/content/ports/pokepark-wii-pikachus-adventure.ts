import type { Port } from "@/lib/ports/schema";

export const PokeparkWiiPikachusAdventure: Port = {
  schema: "port",
  id: "pokepark-wii-pikachus-adventure",
  title: "Pokepark Wii: Pikachu's Adventure",
  game: "Pokepark Wii: Pikachu's Adventure",
  developers: ["SephDB"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SephDB/pokepark-wii-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
