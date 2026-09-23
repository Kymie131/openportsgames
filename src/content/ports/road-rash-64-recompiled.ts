import type { Port } from "@/lib/ports/schema";

export const roadRash64Recompiled: Port = {
  schema: "port",
  id: "road-rash-64-recompiled",
  title: "Road Rash 64 Recompiled",
  game: "Road Rash 64",
  developers: ["Pacific Coast Power & Light"],
  publisher: "THQ",
  originalYear: 1999,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.3.1", date: "2026-09-19" },
  sources: ["https://github.com/linkssy2/RoadRash64Recompiled"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "60 FPS presentation with a 30-240 FPS slider",
    "Widescreen 16:9 and 21:9 support with draw distance slider",
    "Custom music rotation and 52 local achievements",
    "Split-screen and experimental online multiplayer",
  ],
  notes:
    "Native recompilation of Road Rash 64. The README discloses that AI was used extensively during development, including code changes, debugging and launcher artwork. Requires the player's own legally obtained ROM.",
};
