import type { Port } from "@/lib/ports/schema";

export const namcoSystem22DirtDash: Port = {
  schema: "port",
  id: "namco-system-22-dirt-dash",
  title: "Dirt Dash (Namco System 22)",
  game: "Dirt Dash",
  developers: ["Namco"],
  publisher: "Namco",
  originalYear: 1995,
  portType: "decompilation",
  genre: "racing",
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
    "All five stages playable, with sound",
    "Widescreen rendering on top of the original Mode 22 output",
    "Windows and Linux packages on the releases page, no building needed",
  ],
  requirements: {
    minimum: "Your own Dirt Dash ROM set from MAME 0.271 or later (dirtdash.zip)",
  },
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/spacestate1/namco22-decompile/main/docs/images/dirtdash-gameplay.png",
      alt: "Dirt Dash running in widescreen on PC, mid-race",
      credit: "spacestate1/namco22-decompile",
    },
  ],
  notes:
    "Decompilation of the 1995 Namco arcade rally game for PC. All five tracks are finished, which is more than the arcade original shipped with.",
};
