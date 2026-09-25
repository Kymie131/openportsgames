import type { Port } from "@/lib/ports/schema";

export const gzdoom: Port = {
  schema: "port",
  id: "gzdoom",
  title: "GZDoom",
  game: "Doom",
  developers: ["id Software"],
  publisher: "id Software",
  originalYear: 1993,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "4.14.2", date: "2025-05-03" },
  sources: ["https://github.com/ZDoom/gzdoom"],
  website: "https://zdoom.org/",
  docs: "https://zdoom.org/wiki",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/ZDoom/gzdoom/master/src/posix/freedesktop/screenshot_doom.png",
      alt: "Classic DOOM gameplay rendered by GZDoom",
      credit: "ZDoom/gzdoom",
    },
  ],
  notes:
    "Feature-centric source port for all Doom-engine games, with an official Android build. Requires an IWAD (the freedoom project provides assets).",
};
