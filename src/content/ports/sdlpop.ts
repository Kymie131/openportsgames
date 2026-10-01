import type { Port } from "@/lib/ports/schema";

export const sdlPoP: Port = {
  schema: "port",
  id: "sdlpop",
  title: "SDLPoP",
  game: "Prince of Persia",
  developers: ["Nagy David"],
  publisher: "Brøderbund",
  originalYear: 1989,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/NagyD/SDLPoP"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "MS-DOS",
  features: ["SDL2 backends", "Restored level editor", "Modern display scaling options"],
  notes:
    "Port of the Apple II original of Prince of Persia. No tagged releases are published on GitHub.",
};
