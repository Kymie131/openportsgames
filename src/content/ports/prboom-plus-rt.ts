import type { Port } from "@/lib/ports/schema";

export const prBoomPlusRt: Port = {
  schema: "port",
  id: "prboom-plus-rt",
  title: "PrBoom-Plus RT",
  game: "Doom / Doom II",
  developers: ["id Software"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["linux"],
  status: "beta",
  release: { version: "2.6.1-rt1.0.7", date: "2026-06-22" },
  sources: ["https://github.com/tomboylover93/prboom-plus-rt"],
  license: {
    spdx: "NOASSERTION",
    note: "PrBoom-Plus is GPL-2.0, the ray-traced renderer is MIT",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "MS-DOS",
  features: [
    "Real-time path-traced lighting for Doom",
    "Builds and runs on Linux with AMD RADV/Mesa fixes",
    "Ray-traced fallback for pre-RDNA GPUs",
    "FSR and CRT shader modes",
  ],
  notes:
    "Linux fork of PrBoom-Plus that adds the real-time ray-traced Doom renderer, with packaging fixes for current Mesa drivers. Requires the original game's WAD files, which the player must own.",
};