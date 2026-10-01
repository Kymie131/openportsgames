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
  screenshots: [
    {
      src: "https://badges.crowdin.net/opengoal/localized.svg",
      alt: "open-goal screenshot",
      credit: "open-goal",
    },
    {
      src: "https://github.com/open-goal/jak-project/actions/workflows/build-matrix.yaml/badge.svg",
      alt: "Linux and Windows Build",
      credit: "open-goal",
    },
    {
      src: "https://app.codacy.com/project/badge/Grade/29316d04a1644aa390c33be07289f3f5",
      alt: "Codacy Badge",
      credit: "open-goal",
    },
  ],
};
