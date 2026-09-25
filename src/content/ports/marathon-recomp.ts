import type { Port } from "@/lib/ports/schema";

export const marathonRecomp: Port = {
  schema: "port",
  id: "marathon-recomp",
  title: "MarathonRecomp",
  game: "Sonic the Hedgehog (2006)",
  developers: ["Sonic Team"],
  publisher: "Sega",
  originalYear: 2006,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicnext-dev/MarathonRecomp"],
  license: { spdx: "GPL-3.0" },
  aiDisclosure: false,
  verified: false,
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/e446b726-e828-4e8a-9000-7144d4760ef6",
      alt: "In-game footage of the MarathonRecomp PC port of Sonic the Hedgehog (2006)",
      credit: "MarathonRecomp",
    },
  ],
  originalSystem: "Xbox 360",
  notes:
    "Unofficial PC port of Sonic the Hedgehog (2006) created by statically recompiling the Xbox 360 PowerPC binary, with Windows, Linux and macOS support. No tagged releases yet; builds track the repository. Requires the game dump from a copy you own. This is the native recompilation project, distinct from the fan remake excluded in the verification backlog.",
};
