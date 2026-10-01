import type { Port } from "@/lib/ports/schema";

export const wargusPort: Port = {
  schema: "port",
  id: "wargus",
  title: "Wargus",
  game: "Warcraft II",
  developers: ["Wargus contributors"],
  publisher: "Blizzard Entertainment",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "beta",
  release: { version: "3.3.2", date: "2022-08-10" },
  sources: ["https://github.com/wargus/wargus"],
  discord: "https://discord.gg/dQGxaw3QfB",
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for Warcraft II, intended to be compatible with the retail data files.",
  screenshots: [
    {
      src: "https://travis-ci.org/Wargus/wargus.svg?branch=master",
      alt: "Build Status",
      credit: "wargus",
    },
    {
      src: "https://github.com/Wargus/wargus/actions/workflows/macos.yml/badge.svg",
      alt: "Build Status",
      credit: "wargus",
    },
    {
      src: "https://badges.gitter.im/Join%20Chat.svg",
      alt: "Join the chat at https://gitter.im/Wargus",
      credit: "wargus",
    },
  ],
};
