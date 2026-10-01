import type { Port } from "@/lib/ports/schema";

export const dsdaDoom: Port = {
  schema: "port",
  id: "dsda-doom",
  title: "dsda-doom",
  game: "Doom",
  developers: ["kraflab"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.30.0", date: "2026-09-29" },
  sources: ["https://github.com/kraflab/dsda-doom"],
  discord: "https://discord.gg/9paQ52zQUT",
  license: {
    spdx: "NOASSERTION",
    note: "no project-wide license file; prboom2/COPYING applies to bundled sources",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Demo playback compatible with the original demo format",
    "Configurable keyboard and mouse emulation",
    "Binds every command to keys and buttons independently",
  ],
  notes:
    "Doom source port oriented around deterministic demo playback. No project-wide license file declares the terms for the full tree.",
};
