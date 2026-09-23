import type { Port } from "@/lib/ports/schema";

export const symphonyRecomp: Port = {
  schema: "port",
  id: "symphony-recomp",
  title: "SymphonyRecomp",
  game: "Castlevania: Symphony of the Night",
  developers: ["Konami"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.5.1-b", date: "2026-08-19" },
  sources: ["https://github.com/BlackLabelHQ/SymphonyRecomp"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  aiDisclosure: false,
  verified: false,
  originalSystem: "PlayStation",
  features: [
    "Widescreen and resolution scaling",
    "Built-in modding and asset replacement system",
    "Multiple UI languages and a themed interface",
    "Randomizer support with save metadata",
  ],
  notes:
    "Recompilation of Castlevania: Symphony of the Night (PS1) that runs natively on Windows, Linux and macOS. Open beta releases (v0.5.1b) and active development; the maintainers explicitly state the port does not use AI. Requires the game dump from a disc copy you own, .NET 10 runtime and OpenAL.",
};
