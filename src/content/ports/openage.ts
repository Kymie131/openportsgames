import type { Port } from "@/lib/ports/schema";

export const openage: Port = {
  schema: "port",
  id: "openage",
  title: "openage",
  game: "Age of Empires II",
  developers: ["Ensemble Studios"],
  publisher: "Microsoft",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.0", date: "2024-11-26" },
  sources: ["https://github.com/SFTtech/openage"],
  website: "https://openage.dev",
  license: {
    spdx: "GPL-3.0-or-later",
  },
  verified: false,
  notes:
    "Volunteer project recreating the Genie engine used by Age of Empires, Age of Empires II and Star Wars: Galactic Battlegrounds. The last tagged release is 0.6.0, although development continues.",
  screenshots: [
    {
      src: "https://cidata.sft.lol/openage/branches/master/status.svg",
      alt: "Kevin CI status",
      credit: "SFTtech",
    },
    {
      src: "https://github.com/SFTTech/openage/actions/workflows/ubuntu-24.04.yml/badge.svg?branch=master",
      alt: "Ubuntu 24.04 build status",
      credit: "SFTtech",
    },
    {
      src: "https://github.com/SFTtech/openage/workflows/macOS-CI/badge.svg",
      alt: "macOS build status",
      credit: "SFTtech",
    },
  ],
};
