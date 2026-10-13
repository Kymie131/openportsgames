import type { Port } from "@/lib/ports/schema";

export const LegoStarWarsIiiTheCloneWars: Port = {
  schema: "port",
  id: "lego-star-wars-iii-the-clone-wars",
  title: "Lego Star Wars III: The Clone Wars",
  game: "Lego Star Wars III: The Clone Wars",
  developers: ["ThePlayerRolo"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ThePlayerRolo/LegoCloneWarsWii"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Wii",
};
