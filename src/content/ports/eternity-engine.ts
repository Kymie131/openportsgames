import type { Port } from "@/lib/ports/schema";

export const eternityEngine: Port = {
  schema: "port",
  id: "eternity-engine",
  title: "The Eternity Engine",
  game: "Doom",
  developers: ["Team Eternity"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "4.06.00", date: "2026-06-13" },
  sources: ["https://github.com/team-eternity/eternity"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Modern renderer with dynamic lights and reflections",
    "Heightmap support for unlimited room heights",
  ],
  notes: "Extended Doom engine kept in active development for advanced community maps.",
};
