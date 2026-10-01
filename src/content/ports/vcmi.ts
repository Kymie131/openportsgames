import type { Port } from "@/lib/ports/schema";

export const vcmi: Port = {
  schema: "port",
  id: "vcmi",
  title: "VCMI",
  game: "Heroes of Might and Magic III",
  developers: ["New World Computing"],
  publisher: "The 3DO Company",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.7.5", date: "2026-08-15" },
  sources: ["https://github.com/vcmi/vcmi"],
  discord: "https://discord.gg/chBT42V",
  website: "https://vcmi.eu/",
  license: {
    spdx: "GPL-2.0",
  },
  verified: false,
  notes:
    "Open-source recreation of the Heroes of Might and Magic III engine, loadable with the original game data. Active development with a long release history.",
  screenshots: [
    {
      src: "https://github.com/vcmi/vcmi/actions/workflows/github.yml/badge.svg?branch=develop&event=push",
      alt: "VCMI",
      credit: "vcmi",
    },
    {
      src: "https://hosted.weblate.org/widget/vcmi/287x66-grey.png",
      alt: "Translation status",
      credit: "vcmi",
    },
    {
      src: "https://hosted.weblate.org/widget/vcmi/multi-auto.svg",
      alt: "Translation status",
      credit: "vcmi",
    },
  ],
};
