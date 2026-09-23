import type { Port } from "@/lib/ports/schema";

export const starRod: Port = {
  schema: "port",
  id: "star-rod",
  title: "Star Rod",
  game: "Paper Mario",
  developers: ["Intelligent Systems"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.10.2", date: "2025-07-21" },
  sources: ["https://github.com/z64a/star-rod"],
  license: {
    spdx: "MIT",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Native port and modding toolkit for Paper Mario from the decompilation project. Requires the original Paper Mario N64 ROM (legally obtained).",
};
