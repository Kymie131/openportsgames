import type { Port } from "@/lib/ports/schema";

export const rsdkv3Decompilation: Port = {
  schema: "port",
  id: "rsdkv3-decompilation",
  title: "Sonic CD Decompilation",
  game: "Sonic CD",
  developers: ["Sonic Team"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.3.3", date: "2025-11-02" },
  sources: ["https://github.com/RSDKModding/RSDKv3-Decompilation"],
  license: {
    spdx: "NOASSERTION",
    note: "community Retro Engine license, not an SPDX identifier",
  },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "Sega CD / Mega-CD",
  features: [
    "Windows, Linux, macOS and Android builds",
    "Built-in mod loader and modding API",
    "Partial support for the Sonic Origins versions of the game",
  ],
  notes:
    "Full decompilation of Retro Engine v3 behind the 2011 Sonic CD remake, maintained by the RSDK Modding team. Needs data.rsdk from your own copy of Sonic CD (2011); the Origins builds leave some features out.",
};
