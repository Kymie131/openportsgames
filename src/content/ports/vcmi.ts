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
  website: "https://vcmi.eu/",
  license: {
    spdx: "GPL-2.0",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Open-source recreation of the Heroes of Might and Magic III engine, loadable with the original game data. Active development with a long release history.",
};
