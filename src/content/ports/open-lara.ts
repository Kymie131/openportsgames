import type { Port } from "@/lib/ports/schema";

export const openLara: Port = {
  schema: "port",
  id: "open-lara",
  title: "OpenLara",
  game: "Tomb Raider",
  developers: ["Core Design"],
  publisher: "Eidos Interactive",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/XProger/OpenLara"],
  website: "https://xproger.info/projects/OpenLara/",
  license: {
    spdx: "BSD-2-Clause",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Reverse-engineered engine for the original Tomb Raider. No numbered releases; builds track the repository. Requires Tomb Raider 1 data files (legally obtained).",
};