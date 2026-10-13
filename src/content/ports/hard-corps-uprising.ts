import type { Port } from "@/lib/ports/schema";

export const HardCorpsUprising: Port = {
  schema: "port",
  id: "hard-corps-uprising",
  title: "Hard Corps: Uprising",
  game: "Hard Corps: Uprising",
  developers: ["saulob"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/saulob/hard-corps-uprising-recompiled"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Xbox 360",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/Hard_Corps_Uprising_%28cover_art%29.png",
    alt: "Hard Corps: Uprising (cover)",
    credit: "Wikipedia",
  },
};
