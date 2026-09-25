import type { Port } from "@/lib/ports/schema";

export const julius: Port = {
  schema: "port",
  id: "julius",
  title: "Julius",
  game: "Caesar III",
  developers: ["Impressions Games"],
  publisher: "Sierra On-Line",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.8.0", date: "2025-07-31" },
  sources: ["https://github.com/bvschaik/julius"],
  license: { spdx: "AGPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  notes:
    "Open-source re-implementation of Caesar III that runs with the original game files. On top of the stable releases, the project publishes continuous (weekly) builds.",
};
