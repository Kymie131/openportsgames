import type { Port } from "@/lib/ports/schema";

export const ctrNative: Port = {
  schema: "port",
  id: "ctr-native",
  title: "CTR Native",
  game: "Crash Team Racing",
  developers: ["Naughty Dog"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "7.1", date: "2026-07-07" },
  sources: ["https://github.com/CTR-tools/ctr-native"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  originalSystem: "PlayStation",
  features: [
    "Direct NTSC-U retail disc image loading",
    "Retail-parity Adventure, menu, cutscene and audio states",
    "Replay recording for bug reports",
  ],
  notes:
    "Native port of Crash Team Racing rebuilt from the original PlayStation code, distributed as beta/playtest releases. Requires your own NTSC-U retail disc image (assets/ctr-u.bin) and an OpenGL 3.3 capable GPU.",
};
