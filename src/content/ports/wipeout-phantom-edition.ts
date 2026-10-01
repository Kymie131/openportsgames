import type { Port } from "@/lib/ports/schema";

export const wipeoutPhantomEdition: Port = {
  schema: "port",
  id: "wipeout-phantom-edition",
  title: "WipeOut Phantom Edition",
  game: "WipeOut",
  developers: ["Psygnosis"],
  publisher: "Psygnosis",
  originalYear: 1995,
  portType: "source-port",
  genre: "racing",
  openSource: false,
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.2.256", date: "2024-02-17" },
  sources: ["https://github.com/wipeout-phantom-edition/wipeout-phantom-edition"],
  license: {
    spdx: "NOASSERTION",
    note: "no license file published with the project",
  },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation",
  features: [
    "Uncapped frame rate decoupled from the simulation",
    "Widescreen and high resolution rendering options",
    "Automatic data extraction from a PlayStation disc image",
  ],
  notes:
    "Source port of the PlayStation WipeOut that follows the original more closely than the 1996 PC release. Binaries only, the repository holds the readme and screenshots. Needs the USA PlayStation data.",
};
