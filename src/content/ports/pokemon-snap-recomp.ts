import type { Port } from "@/lib/ports/schema";

export const pokemonSnapRecomp: Port = {
  schema: "port",
  id: "pokemon-snap-recomp",
  title: "Pokémon Snap Recompiled",
  game: "Pokémon Snap",
  developers: ["HAL Laboratory"],
  publisher: "Nintendo",
  originalYear: 1999,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.0", date: "2026-09-27" },
  sources: ["https://github.com/JackandBeans/Snap64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "Widescreen and higher frame rates, disabled by default to match the cartridge",
    "Mouse and gyro aiming, button rebinding and fast forward",
    "Photo export of the in-game camera shots",
    "Anti-aliasing up to 8x with cached shader programs",
  ],
  notes:
    "Static recompilation of Pokémon Snap; the player supplies their own legally obtained game.",
};
