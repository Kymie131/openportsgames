import type { Port } from "@/lib/ports/schema";

export const spaceCadetPinball: Port = {
  schema: "port",
  id: "space-cadet-pinball",
  title: "3D Pinball Space Cadet",
  game: "3D Pinball for Windows - Space Cadet",
  developers: ["k4zmu2a"],
  publisher: "Microsoft",
  originalYear: 1995,
  genre: "simulation",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "macos"],
  status: "stable",
  release: { version: "2.1.0", date: "2023-10-16" },
  sources: ["https://github.com/k4zmu2a/SpaceCadetPinball"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "Microsoft Windows",
  features: [
    "Faithful recreation of the original physics and rules",
    "Cross-platform desktop builds",
  ],
  notes:
    "Open source recreation of the Windows 95 Space Cadet pinball game, released under CC0 by Microsoft.",
};
