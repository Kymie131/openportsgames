import type { Port } from "@/lib/ports/schema";

export const redriver2: Port = {
  schema: "port",
  id: "redriver2",
  title: "REDRIVER2",
  game: "Driver 2",
  developers: ["Reflections Interactive"],
  publisher: "Infogrames",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "7.4-rc2", date: "2022-02-04" },
  sources: ["https://github.com/OpenDriver2/REDRIVER2"],
  website: "https://opendriver2.github.io/",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation",
  features: [
    "Game logic translated from MIPS back to C, no interpreter involved",
    "Types and function names recovered from the retail .SYM debug symbols",
    "Windows and 64-bit Linux builds",
  ],
  notes:
    "Driver 2 disassembled and translated to C by the OpenDriver2 team. Geometry still runs on Psy-X, which descends from an emulator, so it is not a from-scratch port. Needs the data files from your own PlayStation disc.",
  screenshots: [
    {
      src: "https://ci.appveyor.com/api/projects/status/p3smpt14elwlpcad/branch/master?svg=true",
      alt: "Build status (Master)",
      credit: "OpenDriver2",
    },
  ],
};
