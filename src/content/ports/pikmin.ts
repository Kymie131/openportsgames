import type { Port } from "@/lib/ports/schema";

export const pikmin: Port = {
  schema: "port",
  id: "pikmin",
  title: "Pikmin Decompilation",
  game: "Pikmin",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/projectPiki/pikmin"],
  license: { spdx: "CC0-1.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "Nintendo GameCube",
  notes:
    "Decompilation of Pikmin (GameCube) that aims to produce a playable native build from the original machine code. Work-in-progress with no tagged releases; requires a dump of the original game.",
};
