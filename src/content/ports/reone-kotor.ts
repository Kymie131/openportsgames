import type { Port } from "@/lib/ports/schema";

export const reOne: Port = {
  schema: "port",
  id: "reone-kotor",
  title: "reone",
  game: "Knights of the Old Republic",
  developers: ["reone contributors"],
  publisher: "LucasArts",
  originalYear: 2003,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/seedhartha/reone"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Engine reimplementation for Knights of the Old Republic. No tagged releases are published.",
};
