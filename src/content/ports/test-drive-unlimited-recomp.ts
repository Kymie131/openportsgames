import type { Port } from "@/lib/ports/schema";

export const testDriveUnlimitedRecomp: Port = {
  schema: "port",
  id: "test-drive-unlimited-recomp",
  title: "Test Drive Unlimited Recompiled",
  game: "Test Drive Unlimited",
  developers: ["testdriveupgrade"],
  publisher: "Atari",
  originalYear: 2006,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/testdriveupgrade/TDURecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Test Drive Unlimited (Xbox 360) for Windows. It requires the original game files and is still in development.",
  notesEs:
    "Recompilación de Test Drive Unlimited (Xbox 360) para Windows. Requiere los archivos del juego original y sigue en desarrollo.",
};
