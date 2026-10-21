import type { Port } from "@/lib/ports/schema";

export const SpaceRangersHdAWarApart: Port = {
  schema: "port",
  id: "space-rangers-hd-a-war-apart",
  title: "Space Rangers HD: A War Apart",
  game: "Space Rangers HD: A War Apart",
  developers: ["pakompom"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pakompom/SpaceRangersHD_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/214730/header.jpg",
    alt: "Space Rangers HD: A War Apart (cover art)",
    credit: "Steam",
  },
  notes:
    "A matching Delphi decompilation of Space Rangers HD: A War Apart - Космические рейнджеры HD: Революция.",
  notesEs: "Decompilación que coincide en Delphi de Space Rangers HD: A War Apart.",
};
