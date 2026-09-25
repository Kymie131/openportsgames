import type { Port } from "@/lib/ports/schema";

export const dhewm3: Port = {
  schema: "port",
  id: "dhewm3",
  title: "dhewm3",
  game: "Doom 3",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 2004,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.5.5", date: "2026-06-08" },
  sources: ["https://github.com/dhewm/dhewm3"],
  website: "https://dhewm3.org/",
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Source port of Doom 3 that keeps the original gameplay with bugfixes, widescreen support, 64-bit builds, EFX sound, mod-independent settings and gamepad support. Requires the original game data.",
};
