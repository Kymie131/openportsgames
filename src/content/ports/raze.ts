import type { Port } from "@/lib/ports/schema";

export const raze: Port = {
  schema: "port",
  id: "raze",
  title: "Raze",
  game: "Duke Nukem 3D",
  developers: ["3D Realms"],
  publisher: "GT Interactive",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "macos"],
  status: "stable",
  release: { version: "1.11.0", date: "2025-02-22" },
  sources: ["https://github.com/ZDoom/Raze"],
  website: "https://raze.zdoom.org/",
  license: { spdx: "GPL-2.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Source port of the Build-engine games Duke Nukem 3D, Blood, Shadow Warrior, Redneck Rampage and Powerslave, built on GZDoom technology. Requires the original game files.",
};
