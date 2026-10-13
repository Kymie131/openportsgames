import type { Port } from "@/lib/ports/schema";

export const JurassicParkOperationGenesis: Port = {
  schema: "port",
  id: "jurassic-park-operation-genesis",
  title: "Jurassic Park: Operation Genesis",
  game: "Jurassic Park: Operation Genesis",
  developers: ["AdventureT"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AdventureT/OpenJPOG"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Sega Mega Drive / Genesis",
};
