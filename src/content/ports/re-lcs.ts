import type { Port } from "@/lib/ports/schema";

export const reLcs: Port = {
  schema: "port",
  id: "re-lcs",
  title: "reLCS",
  game: "Grand Theft Auto: Liberty City Stories",
  developers: ["Rockstar North"],
  publisher: "Rockstar Games",
  originalYear: 2005,
  portType: "reimplementation",
  genre: "open-world",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://gitea.com/initdream/relcs"],
  license: {
    spdx: "NOASSERTION",
    note: "no license file published with the project",
  },
  verified: false,
  originalSystem: "PlayStation Portable",
  features: [
    "Vendored librw with an OpenGL 3 backend, no external library needed",
    "SDL2 and OpenGL ES build for handhelds and other embedded devices",
    "Optional game files in the gamefiles folder enable extra features",
  ],
  requirements: {
    minimum: "Your own copy of Grand Theft Auto: Liberty City Stories",
  },
  notes:
    "Native PC reimplementation of Liberty City Stories, hosted on Gitea rather than GitHub. No tagged releases yet, so the executable has to be built from the lcs branch or taken from the project's own build output.",
};
