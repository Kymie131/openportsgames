import type { Port } from "@/lib/ports/schema";

export const NeedForSpeedHighStakesPs1: Port = {
  schema: "port",
  id: "need-for-speed-high-stakes-ps1",
  title: "Need for Speed: High Stakes (PS1)",
  game: "Need for Speed: High Stakes (PS1)",
  developers: ["Caesar0007"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Caesar0007/NFSHS-PSX-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "Byte-matching decompilation of Need for Speed High Stakes (PSX) - splat + maspsx + objdiff.",
  notesEs: "Decompilación que coincide byte a byte de Need for Speed: High Stakes (PSX).",
};
