import type { Port } from "@/lib/ports/schema";

export const sonicMania: Port = {
  schema: "port",
  id: "sonic-mania-decomp",
  title: "Sonic Mania Decompilation",
  game: "Sonic Mania",
  developers: ["Headcannon", "PagodaWest Games"],
  publisher: "Sega",
  originalYear: 2017,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.1", date: "2025-11-01" },
  sources: ["https://github.com/RSDKModding/Sonic-Mania-Decompilation"],
  license: {
    spdx: "NOASSERTION",
    note: "community Retro Engine license, not an SPDX identifier",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Decompilation of Sonic Mania (Retro Engine v5) that rebuilds the game on PC, Mac and Linux and opens the door to extensive modding. Requires a legally acquired copy of the Sonic Mania data files.",
};
