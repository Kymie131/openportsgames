import type { Port } from "@/lib/ports/schema";

export const sm64ex: Port = {
  schema: "port",
  id: "sm64ex",
  title: "sm64ex",
  game: "Super Mario 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/sm64pc/sm64ex"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Native PC port from the Super Mario 64 decompilation. No numbered releases; builds track the repository. Requires a legally obtained North American Super Mario 64 ROM.",
};