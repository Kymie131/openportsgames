import type { Port } from "@/lib/ports/schema";

export const openmw: Port = {
  schema: "port",
  id: "openmw",
  title: "OpenMW",
  game: "The Elder Scrolls III: Morrowind",
  developers: ["Bethesda Game Studios"],
  publisher: "Bethesda Softworks",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "0.51.0", date: "2026-06-19" },
  sources: ["https://github.com/OpenMW/openmw"],
  website: "https://openmw.org/",
  discord: "https://discord.gg/bWuqq2e",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Recreation of the Morrowind engine with mod support and an official Android build. Requires the original Morrowind game files.",
};