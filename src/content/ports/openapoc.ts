import type { Port } from "@/lib/ports/schema";

export const openapoc: Port = {
  schema: "port",
  id: "openapoc",
  title: "OpenApoc",
  game: "X-COM: Apocalypse",
  developers: ["MicroProse"],
  publisher: "MicroProse",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "2026.4.8", date: "2026-04-10" },
  sources: ["https://github.com/openApoc/OpenApoc"],
  discord: "https://discord.gg/f8Rayre",
  license: {
    spdx: "GPL-3.0",
  },
  verified: false,
  notes:
    "Open-source reimplementation of the X-COM: Apocalypse engine, written in C++ with SDL2. Requires the original game files to run.",
  screenshots: [
    {
      src: "https://i.imgur.com/XxudxVj.jpg",
      alt: "openApoc screenshot",
      credit: "openApoc",
    },
  ],
};
