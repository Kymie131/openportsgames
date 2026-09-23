import type { Port } from "@/lib/ports/schema";

export const goldenEye64Recompiled: Port = {
  schema: "port",
  id: "goldeneye-64-recompiled",
  title: "GoldenEye 007 Recompiled",
  game: "GoldenEye 007",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["macos", "linux"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-08-20" },
  sources: ["https://github.com/cblock85/GoldenEye64Recomp"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Native macOS and Linux builds via N64Recomp and RT64",
    "Metal (macOS) and Vulkan (Linux) rendering",
    "Widescreen support and frame interpolation",
    "Full campaign, menus and audio playable without an emulator",
  ],
  notes:
    "Native port of GoldenEye 007 produced by statically recompiling the Nintendo 64 code with N64Recomp and rendering with RT64. The clean build ships no game code: the launcher recompiles roughly three thousand functions from the player's own legally dumped ROM at startup.",
};