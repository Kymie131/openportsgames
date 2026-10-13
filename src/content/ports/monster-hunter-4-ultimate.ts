import type { Port } from "@/lib/ports/schema";

export const MonsterHunter4Ultimate: Port = {
  schema: "port",
  id: "monster-hunter-4-ultimate",
  title: "Monster Hunter 4 Ultimate",
  game: "Monster Hunter 4 Ultimate",
  developers: ["mhvuze"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mhvuze/mh4u-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 3DS",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/39/Monster-Hunter_4Boxart.png",
    alt: "Monster Hunter 4 Ultimate (cover)",
    credit: "Wikipedia",
  },
};
