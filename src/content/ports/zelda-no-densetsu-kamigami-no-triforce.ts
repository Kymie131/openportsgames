import type { Port } from "@/lib/ports/schema";

export const ZeldaNoDensetsuKamigamiNoTriforce: Port = {
  schema: "port",
  id: "zelda-no-densetsu-kamigami-no-triforce",
  title: "Zelda no Densetsu: Kamigami no Triforce",
  game: "Zelda no Densetsu: Kamigami no Triforce",
  developers: ["spannerisms"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/spannerisms/jpdasm"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
