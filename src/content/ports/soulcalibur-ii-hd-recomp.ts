import type { Port } from "@/lib/ports/schema";

export const soulcaliburIiHdRecomp: Port = {
  schema: "port",
  id: "soulcalibur-ii-hd-recomp",
  title: "Soulcalibur II HD Online Recompiled",
  game: "Soulcalibur II HD Online",
  developers: ["n0madic"],
  publisher: "Bandai Namco",
  originalYear: 2013,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.0", date: "2026-10-16" },
  sources: ["https://github.com/n0madic/Soulcalibur2HD-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 3"],
  notes:
    "Soulcalibur II HD Online (Bandai Namco, 2013) running natively on Windows, Linux and Mac through static recompilation. It needs your own copy.",
  notesEs:
    "Soulcalibur II HD Online (Bandai Namco, 2013) en Windows, Linux y Mac de forma nativa mediante recompilación estática. Necesitas tu propia copia.",
};
