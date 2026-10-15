import type { Port } from "@/lib/ports/schema";

export const TigerWoodsPgaTour2004: Port = {
  schema: "port",
  id: "tiger-woods-pga-tour-2004",
  title: "Tiger Woods PGA Tour 2004",
  game: "Tiger Woods PGA Tour 2004",
  developers: ["mitsevox"],
  publisher: "Unknown",
  originalYear: 2004,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mitsevox/tw2004"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Tiger%20Woods%20PGA%20Tour%202004%20(Europe)%20(Disc%201)%20(Rev%201).png",
    alt: "Tiger Woods PGA Tour 2004 (box art)",
    credit: "Box art",
  },
  notes: "Decompilation and asset research for Tiger Woods PGA Tour 2004 (GameCube, GW4E69).",
  notesEs:
    "Decompilación e investigación de recursos de Tiger Woods PGA Tour 2004 (GameCube, GW4E69).",
};
