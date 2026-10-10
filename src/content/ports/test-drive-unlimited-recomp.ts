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
  notes: "The project publishes no description.",
  notesEs: "El proyecto no publica descripción.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/Test_Drive_Unlimited_boxart.jpg",
    alt: "Test Drive Unlimited (box art)",
    credit: "Wikipedia",
  },
};
