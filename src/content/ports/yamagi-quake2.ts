import type { Port } from "@/lib/ports/schema";

export const yamagiQuake2: Port = {
  schema: "port",
  id: "yamagi-quake2",
  title: "Yamagi Quake II",
  game: "Quake II",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 1997,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "8.70", date: "2026-05-14" },
  sources: ["https://github.com/yquake2/yquake2"],
  website: "https://www.yamagi.org/quake2/",
  license: {
    spdx: "GPL-2.0",
    note: "based on id Software's GPL-2.0 Quake II release",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Maintained source port of the Quake II engine. Requires Quake II gamedata (shareware baseq2 files freely available).",
};