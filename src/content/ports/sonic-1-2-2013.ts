import type { Port } from "@/lib/ports/schema";

export const sonic12: Port = {
  schema: "port",
  id: "sonic-1-2-2013",
  title: "Sonic 1 & 2 (2013) — Retro Engine v4 Decompilation",
  game: "Sonic the Hedgehog / Sonic the Hedgehog 2",
  developers: ["Sonic Team"],
  publisher: "Sega",
  originalYear: 1991,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.3.3", date: "2025-11-02" },
  sources: ["https://github.com/RSDKModding/RSDKv4-Decompilation"],
  license: {
    spdx: "NOASSERTION",
    note: "community Retro Engine license, not an SPDX identifier",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Complete decompilation of the 2013 mobile remakes of Sonic 1 and Sonic 2 (Retro Engine v4), playable on PC, Mac and Linux. Requires a legally acquired copy of the Sonic the Hedgehog (2013) or Sonic the Hedgehog 2 (2013) game data from the App Store, Google Play or Steam.",
};
