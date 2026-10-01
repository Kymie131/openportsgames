import type { Port } from "@/lib/ports/schema";

export const openEnroth: Port = {
  schema: "port",
  id: "open-enroth",
  title: "OpenEnroth",
  game: "Might and Magic VI-VIII",
  developers: ["OpenEnroth Team"],
  publisher: "New World Computing",
  originalYear: 1998,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenEnroth/OpenEnroth"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: [
    "Unified engine across several Might and Magic titles",
    "Android build",
    "Modern rendering and input",
  ],
  notes:
    "Cross-platform engine covering several Might and Magic installments. The single GitHub release is a prerelease, so no stable version is recorded.",
};
