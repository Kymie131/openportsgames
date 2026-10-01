import type { Port } from "@/lib/ports/schema";

export const pspRecomp: Port = {
  schema: "port",
  id: "psprecomp",
  title: "PSPRecomp",
  game: "Grand Theft Auto: Vice City Stories",
  developers: ["Rockstar North"],
  publisher: "Rockstar Games",
  originalYear: 2007,
  portType: "recompilation",
  genre: "open-world",
  openSource: true,
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jessicanataliagta/PSPRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "PlayStation Portable",
  features: [
    "Static recompiler that turns Allegrex code into C++ translation units",
    "Vice City Stories is the first working profile",
    "No PSP interpreter or JIT in the host runtime",
  ],
  notes:
    "Static recompilation framework for PSP software with a Vice City Stories profile. No tagged releases yet, so builds come from the repository. Needs the data from your own copy of the game.",
};
