import type { Port } from "@/lib/ports/schema";

export const namcoSystem22PropCycle: Port = {
  schema: "port",
  id: "namco-system-22-prop-cycle",
  title: "Prop Cycle (Namco System 22)",
  game: "Prop Cycle",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1996,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.4.2", date: "2026-09-27" },
  sources: ["https://github.com/spacestate1/namco22-decompile"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "Namco System 22",
  features: [
    "Playable from the first screen to the last, with sound",
    "Windows and Linux packages on the releases page, no building needed",
    "The Namco System 22 DSP BIOS is compiled in, so no extra file is required",
  ],
  requirements: {
    minimum: "Your own Prop Cycle ROM set from MAME 0.271 or later (propcycl.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/propcycle-gameplay.png",
      alt: "Prop Cycle running on PC, boat crossing the river course",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  notes:
    "Decompilation of the 1996 Namco arcade boat game for PC. Ships as ready-made Windows and Linux packages; you supply the arcade ROM set, which is not included.",
};
