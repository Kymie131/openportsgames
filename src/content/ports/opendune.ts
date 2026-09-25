import type { Port } from "@/lib/ports/schema";

export const openDune: Port = {
  schema: "port",
  id: "opendune",
  title: "OpenDUNE",
  game: "Dune II",
  developers: ["Westwood Studios"],
  publisher: "Virgin Interactive",
  originalYear: 1992,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.9", date: "2018-05-25" },
  sources: ["https://github.com/OpenDUNE/OpenDUNE"],
  license: { spdx: "GPL-2.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Open-source re-implementation of Dune II: The Building of a Dynasty. The original game data files are required to play.",
};
