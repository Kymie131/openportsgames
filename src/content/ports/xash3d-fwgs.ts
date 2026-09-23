import type { Port } from "@/lib/ports/schema";

export const xash3d: Port = {
  schema: "port",
  id: "xash3d-fwgs",
  title: "Xash3D FWGS",
  game: "Half-Life",
  developers: ["Valve Corporation"],
  publisher: "Sierra On-Line",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/FWGS/xash3d-fwgs"],
  discord: "https://xash.su/discord/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Open source reimplementation of the Half-Life engine, including a working Android build. Uses rolling 'continuous' releases. Requires the original Half-Life game files.",
};