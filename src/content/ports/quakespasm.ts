import type { Port } from "@/lib/ports/schema";

export const quakeSpasm: Port = {
  schema: "port",
  id: "quakespasm",
  title: "QuakeSpasm",
  game: "Quake",
  developers: ["Forest"],
  publisher: "id Software",
  originalYear: 1996,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/sezero/quakespasm"],
  website: "https://sourceforge.net/projects/quakespasm/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "MS-DOS",
  features: ["SDL2 backends", "16-bit textures and sprites", "Quake expansion support"],
  notes:
    "Minimal Quake source port closely matching the original software renderer. No releases are published on GitHub; builds are distributed elsewhere.",
};
