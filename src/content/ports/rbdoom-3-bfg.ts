import type { Port } from "@/lib/ports/schema";

export const rbDoom3Bfg: Port = {
  schema: "port",
  id: "rbdoom-3-bfg",
  title: "RBDOOM-3 BFG",
  game: "Doom 3 BFG Edition",
  developers: ["Robert Beckebans"],
  publisher: "id Software",
  originalYear: 2012,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.6.0", date: "2025-05-10" },
  sources: ["https://github.com/RobertBeckebans/RBDOOM-3-BFG"],
  discord: "https://discord.gg/Q3E9rUFnnP",
  website: "https://www.moddb.com/mods/rbdoom-3-bfg",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: [
    "Open source id Tech 4 engine",
    "Mission editor support",
    "Extensive configuration and scripting",
  ],
  notes: "Open source reimplementation of the id Tech 4 engine used by Doom 3 BFG Edition.",
  screenshots: [
    {
      src: "https://i.imgur.com/nSWBSUB.png",
      alt: "RobertBeckebans screenshot",
      credit: "RobertBeckebans",
    },
    {
      src: "https://i.imgur.com/DqTEbzU.jpg",
      alt: "RobertBeckebans screenshot",
      credit: "RobertBeckebans",
    },
  ],
};
