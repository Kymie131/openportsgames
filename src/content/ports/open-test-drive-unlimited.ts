import type { Port } from "@/lib/ports/schema";

export const openTestDriveUnlimited: Port = {
  schema: "port",
  id: "open-test-drive-unlimited",
  title: "OpenTDU",
  game: "Test Drive Unlimited",
  developers: ["opentestdriveunlimited"],
  publisher: "Atari",
  originalYear: 2006,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/opentestdriveunlimited/OpenTestDriveUnlimited"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Open source port of Test Drive Unlimited PC (TDU, MC 1.66A). Work in progress: the goal is a new client that fixes issues found in the original. It requires your own copy of the game.",
  notesEs:
    "Port de código abierto de Test Drive Unlimited para PC (TDU, MC 1.66A). En desarrollo: el objetivo es un cliente nuevo que arregle problemas del original. Requiere tu propia copia del juego.",
};
