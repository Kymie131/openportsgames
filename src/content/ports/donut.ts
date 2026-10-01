import type { Port } from "@/lib/ports/schema";

export const donut: Port = {
  schema: "port",
  id: "donut",
  title: "donut",
  game: "The Simpsons: Hit & Run",
  developers: ["plowteam"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  genre: "action-adventure",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/plowteam/donut"],
  discord: "https://discord.gg/U7jFGJKuW4",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: [
    "Open source reimplementation in modern C++",
    "Modern OpenGL renderer",
    "Requires original game assets supplied by the player",
  ],
  notes:
    "Clean-room reimplementation of The Simpsons: Hit & Run. The player supplies their own legally obtained game assets; the repository ships no game content.",
  screenshots: [
    {
      src: "https://files.facepunch.com/Layla/2019/August/11/2019-08-09_22-12-28.png",
      alt: "plowteam screenshot",
      credit: "plowteam",
    },
    {
      src: "https://files.facepunch.com/Layla/2019/August/11/2019-08-09_22-11-26.png",
      alt: "plowteam screenshot",
      credit: "plowteam",
    },
  ],
};
