import type { Port } from "@/lib/ports/schema";

export const openGoal: Port = {
  schema: "port",
  id: "open-goal",
  title: "OpenGOAL",
  game: "Jak and Daxter / Jak II / Jak 3",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.3.8", date: "2026-09-20" },
  sources: ["https://github.com/open-goal/jak-project"],
  website: "https://opengoal.dev",
  docs: "https://opengoal.dev/docs/intro",
  discord: "https://discord.gg/VZbXMHXzWv",
  license: { spdx: "ISC" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation 2",
  features: [
    "Original GOAL code decompiled and recompiled for x86-64",
    "Jak and Daxter treated as complete, Jak II in beta, Jak 3 in progress",
    "Asset extraction and repacking tools shipped in the repository",
  ],
  notes:
    "Decompilation of the Jak trilogy from Naughty Dog's GOAL language, running on PC. Needs your own PS2 disc of each game; PS3, PS4 and PS5 releases are not supported.",
};
