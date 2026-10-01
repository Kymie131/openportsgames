import type { Port } from "@/lib/ports/schema";

export const doomRetro: Port = {
  schema: "port",
  id: "doomretro",
  title: "Doom Retro",
  game: "Doom",
  developers: ["Brad Harding"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "6.3", date: "2026-08-08" },
  sources: ["https://github.com/bradharding/doomretro"],
  website: "https://www.doomretro.com",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "High-resolution textures and sprites",
    "Full controller support including analog sticks and triggers",
    "Widescreen and ultrawide support",
  ],
  notes: "Windows-focused Doom source port with a wide range of display and input options.",
};
